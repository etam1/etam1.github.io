const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Get the last commit date
  const lastCommitDate = execSync('git log -1 --format=%cd --date=short', {
    encoding: 'utf-8',
    cwd: __dirname + '/..'
  }).trim();

  // Format the date as MM/DD/YYYY
  const dateParts = lastCommitDate.split('-');
  const formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;

  // Create the data object
  const data = {
    lastUpdated: formattedDate
  };

  // Write to a JSON file in src
  const outputPath = path.join(__dirname, '../src/last-update.json');
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

  console.log(`Last updated date set to: ${formattedDate}`);
} catch (error) {
  console.error('Error getting last commit date:', error.message);
  // Fallback to current date if git command fails
  const now = new Date();
  const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()}`;
  const data = { lastUpdated: formattedDate };
  const outputPath = path.join(__dirname, '../src/last-update.json');
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`Using fallback date: ${formattedDate}`);
}

