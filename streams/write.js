const fs = require('fs');
const path = require('path');

function writeToCatalog(filename, bookLine) {
  if (!filename || !bookLine) {
    console.error('Требуются аргументы: filename, book_line');
    process.exit(1);
  }

  const filePath = path.join(__dirname, filename);
  const writeStream = fs.createWriteStream(filePath, { flags: 'a', encoding: 'utf8' });

  writeStream.write(`${bookLine}\n`, (err) => {
    if (err) {
      console.error('Ошибка записи:', err.message);
      process.exit(1);
      return;
    }
    console.log(`Записано: ${bookLine}`);
  });

  writeStream.on('finish', () => {
    console.log('Запись завершена');
  });

  writeStream.on('error', (err) => {
    console.error('Ошибка потока:', err.message);
    process.exit(1);
  });

  writeStream.end();
}

module.exports = { writeToCatalog };

if (require.main === module) {
  const [, , filename, bookLine] = process.argv;
  writeToCatalog(filename, bookLine);
}