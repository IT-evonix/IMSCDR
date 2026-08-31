const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const DATA_DIR = path.join(process.cwd(), 'src', 'server', 'data');
const FILE_PATH = path.join(DATA_DIR, 'contacts.xlsx');
const SHEET_NAME = 'Contact Enquiries';

// Ensure data directory exists
const ensureDirectoryExists = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
};

// Column widths for neat layout in Excel
const COLUMN_WIDTHS = [
  { wch: 8 },  // ID
  { wch: 18 }, // First Name
  { wch: 18 }, // Last Name
  { wch: 28 }, // Email
  { wch: 18 }, // Mobile
  { wch: 25 }, // Subject
  { wch: 45 }, // Message
  { wch: 22 }, // Submitted At
];

/**
 * Initializes the Excel file with empty headers if it does not exist yet.
 */
const initializeExcelFile = () => {
  ensureDirectoryExists();
  if (!fs.existsSync(FILE_PATH)) {
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet([], {
      header: ['ID', 'First Name', 'Last Name', 'Email', 'Mobile', 'Subject', 'Message', 'Submitted At'],
    });
    ws['!cols'] = COLUMN_WIDTHS;
    xlsx.utils.book_append_sheet(wb, ws, SHEET_NAME);
    xlsx.writeFile(wb, FILE_PATH);
  }
};

/**
 * Appends a new contact submission to the existing contacts.xlsx file.
 * If the file doesn't exist, it creates it first.
 * 
 * @param {Object} data - Contact form data
 * @returns {Object} Saved contact entry with ID and timestamp
 */
const appendContactToExcel = (data) => {
  ensureDirectoryExists();
  initializeExcelFile();

  // Read existing workbook
  const workbook = xlsx.readFile(FILE_PATH);
  const worksheet = workbook.Sheets[SHEET_NAME] || workbook.Sheets[workbook.SheetNames[0]];

  // Parse existing rows
  const existingRows = xlsx.utils.sheet_to_json(worksheet);

  // Calculate next auto-increment ID
  const nextId = existingRows.length > 0
    ? Math.max(...existingRows.map((r) => Number(r['ID']) || 0)) + 1
    : 1;

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'medium',
  });

  const newRecord = {
    'ID': nextId,
    'First Name': (data.firstName || '').trim(),
    'Last Name': (data.lastName || '').trim(),
    'Email': (data.email || '').trim().toLowerCase(),
    'Mobile': (data.mobile || '').trim(),
    'Subject': (data.subject || '').trim(),
    'Message': (data.message || '').trim(),
    'Submitted At': submittedAt,
  };

  const updatedRows = [...existingRows, newRecord];

  // Re-generate worksheet with updated rows
  const updatedWorksheet = xlsx.utils.json_to_sheet(updatedRows, {
    header: ['ID', 'First Name', 'Last Name', 'Email', 'Mobile', 'Subject', 'Message', 'Submitted At'],
  });
  updatedWorksheet['!cols'] = COLUMN_WIDTHS;

  // Update workbook sheet and save to disk
  workbook.Sheets[SHEET_NAME] = updatedWorksheet;
  if (!workbook.SheetNames.includes(SHEET_NAME)) {
    workbook.SheetNames.push(SHEET_NAME);
  }

  xlsx.writeFile(workbook, FILE_PATH);

  return {
    id: nextId,
    firstName: newRecord['First Name'],
    lastName: newRecord['Last Name'],
    email: newRecord['Email'],
    mobile: newRecord['Mobile'],
    subject: newRecord['Subject'],
    message: newRecord['Message'],
    createdAt: new Date().toISOString(),
  };
};

/**
 * Returns the absolute path of the Excel file for download.
 * Ensures the file is initialized if it does not already exist.
 * 
 * @returns {string} Absolute path to contacts.xlsx
 */
const getExcelFilePath = () => {
  initializeExcelFile();
  return FILE_PATH;
};

/**
 * Reads and returns all contact submissions currently stored in the Excel file.
 * 
 * @returns {Array<Object>} List of contact records
 */
const getAllContactsFromExcel = () => {
  if (!fs.existsSync(FILE_PATH)) {
    return [];
  }
  const workbook = xlsx.readFile(FILE_PATH);
  const worksheet = workbook.Sheets[SHEET_NAME] || workbook.Sheets[workbook.SheetNames[0]];
  return xlsx.utils.sheet_to_json(worksheet);
};

/**
 * Generates CSV content from the Excel file
 * 
 * @returns {string} CSV text
 */
const getContactsAsCsv = () => {
  initializeExcelFile();
  const workbook = xlsx.readFile(FILE_PATH);
  const worksheet = workbook.Sheets[SHEET_NAME] || workbook.Sheets[workbook.SheetNames[0]];
  return xlsx.utils.sheet_to_csv(worksheet);
};

module.exports = {
  appendContactToExcel,
  getExcelFilePath,
  getAllContactsFromExcel,
  getContactsAsCsv,
};
