const xlsx = require('xlsx');

/**
 * Reusable Excel Exporter Utility (.xlsx)
 * Generates an Excel workbook Buffer from an array of objects.
 * 
 * @param {Array<Object>} dataArray - List of records
 * @param {Array<{ label: string, key: string | Function }>} columns - Column definitions
 * @param {string} sheetName - Excel worksheet name
 * @returns {Buffer} Excel (.xlsx) file buffer
 */
exports.generateExcel = (dataArray = [], columns = [], sheetName = 'Sheet1') => {
  const rows = dataArray.map((item) => {
    const row = {};
    columns.forEach((col) => {
      let fieldValue = '';
      if (typeof col.key === 'function') {
        fieldValue = col.key(item);
      } else if (col.key && item[col.key] !== undefined && item[col.key] !== null) {
        fieldValue = item[col.key];
      }
      row[col.label] = fieldValue ?? '';
    });
    return row;
  });

  const wb = xlsx.utils.book_new();
  const ws = xlsx.utils.json_to_sheet(rows);

  // Auto column widths
  ws['!cols'] = columns.map((col) => {
    let maxLen = (col.label || '').length;
    rows.forEach((r) => {
      const cellVal = r[col.label] !== undefined && r[col.label] !== null ? String(r[col.label]) : '';
      if (cellVal.length > maxLen) {
        maxLen = cellVal.length;
      }
    });
    // clamp width between 12 and 55 characters
    return { wch: Math.min(Math.max(maxLen + 3, 12), 55) };
  });

  const safeSheetName = (sheetName || 'Sheet1').replace(/[\\/?*[\]]/g, '').substring(0, 31);
  xlsx.utils.book_append_sheet(wb, ws, safeSheetName || 'Sheet1');

  return xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
};

/**
 * Reusable CSV Exporter Utility
 * Generates a RFC 4180 compliant CSV string from any array of objects.
 * 
 * @param {Array<Object>} dataArray - List of database records or objects
 * @param {Array<{ label: string, key: string | Function }>} columns - Column mappings
 * @returns {string} CSV formatted text string
 */
exports.generateCsv = (dataArray = [], columns = []) => {
  const escapeCsvField = (value) => {
    if (value === undefined || value === null) return '""';
    const str = String(value).replace(/"/g, '""').replace(/\r?\n|\r/g, ' ');
    return `"${str}"`;
  };

  // Header row
  const headerRow = columns.map((col) => escapeCsvField(col.label)).join(',');

  // Data rows
  const dataRows = dataArray.map((item) => {
    return columns
      .map((col) => {
        let fieldValue = '';
        if (typeof col.key === 'function') {
          fieldValue = col.key(item);
        } else if (col.key && item[col.key] !== undefined) {
          fieldValue = item[col.key];
        }
        return escapeCsvField(fieldValue);
      })
      .join(',');
  });

  return [headerRow, ...dataRows].join('\n');
};
