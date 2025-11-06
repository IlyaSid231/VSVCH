const fs = require('fs');
const path = require('path');

function readLargeFile(filename) {
  if (!filename) {
    console.error('Требуется аргумент: filename');
    process.exit(1);
  }

  const filePath = path.join(__dirname, filename);
  const readStream = fs.createReadStream(filePath, { encoding: 'utf8', highWaterMark: 64 * 1024 });

  readStream.on('data', (chunk) => {
    const lines = chunk.split('\n');
    lines.forEach(line => {
      if (line.trim()) {
        console.log(`Прочитано: ${line}`);
      }
    });
  });

  readStream.on('end', () => {
    console.log('Чтение завершено');
  });

  readStream.on('error', (err) => {
    console.error('Ошибка чтения:', err.message);
    process.exit(1);
  });
}

module.exports = { readLargeFile };

if (require.main === module) {
  const [, , filename] = process.argv;
  readLargeFile(filename);
}