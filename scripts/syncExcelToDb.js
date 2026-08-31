require('dotenv').config();
const prisma = require('../src/server/config/db');
const { getAllContactsFromExcel } = require('../src/server/services/contactExcelService');

/**
 * Migration Utility Script:
 * Imports all contact enquiries saved in contacts.xlsx into PostgreSQL via Prisma.
 * 
 * Usage:
 *   node scripts/syncExcelToDb.js
 */
async function syncExcelToDatabase() {
  console.log('--- Starting Excel to PostgreSQL Sync ---');

  try {
    const contacts = getAllContactsFromExcel();

    if (!contacts || contacts.length === 0) {
      console.log('No contact records found in contacts.xlsx.');
      process.exit(0);
    }

    console.log(`Found ${contacts.length} record(s) in contacts.xlsx. Starting import...`);

    let importedCount = 0;
    let skippedCount = 0;

    for (const record of contacts) {
      const email = (record['Email'] || '').trim().toLowerCase();
      const mobile = (record['Mobile'] || '').trim();
      const firstName = (record['First Name'] || '').trim();
      const lastName = (record['Last Name'] || '').trim();
      const subject = (record['Subject'] || '').trim();
      const message = (record['Message'] || '').trim();

      if (!email || !firstName) {
        console.warn(`Skipping invalid row:`, record);
        skippedCount++;
        continue;
      }

      await prisma.contactMessage.create({
        data: {
          firstName,
          lastName,
          email,
          mobile,
          subject,
          message,
          status: 'Unread',
        },
      });

      importedCount++;
      console.log(`✓ Imported [${importedCount}/${contacts.length}]: ${firstName} ${lastName} (${email})`);
    }

    console.log('\n--- Sync Completed Successfully ---');
    console.log(`Total Records: ${contacts.length}`);
    console.log(`Imported: ${importedCount}`);
    console.log(`Skipped: ${skippedCount}`);
  } catch (error) {
    console.error('Error during synchronization:', error);
  } finally {
    await prisma.$disconnect();
    process.exit(0);
  }
}

syncExcelToDatabase();
