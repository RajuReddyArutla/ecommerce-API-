// src/utils/logger.js
const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '../../logs');
const logFilePath = path.join(logDir, 'cron.log');

// Create logs directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Create empty log file if it doesn't exist
if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, '');
}

const logToFile = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) console.error('❌ Error writing to log file:', err);
  });
};

module.exports = {
  logToFile,
};
