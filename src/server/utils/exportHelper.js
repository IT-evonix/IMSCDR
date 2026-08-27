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
