const { Transform } = require('stream');
const fs = require('fs');
const path = require('path');

function transformCatalog(outputFile) {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const lines = chunk.toString().split('\n');
      const transformed = lines.map(line => {
        if (line.trim()) {
          const [title, author, year] = line.split('|');
          return JSON.stringify({ title, author, year: parseInt(year) }) + '\n';
        }
        return line;
      }).join('');
      callback(null, transformed);
    }
  });

  let writeStream;
  if (outputFile) {
    const filePath = path.join(__dirname, outputFile);
    writeStream = fs.createWriteStream(filePath, { encoding: 'utf8' });
    process.stdin.pipe(transformStream).pipe(writeStream);
  } else {
    process.stdin.pipe(transformStream).pipe(process.stdout);
  }

  if (writeStream) {
    writeStream.on('finish', () => {
      console.log('Преобразование завершено в файл');
    });
    writeStream.on('error', (err) => console.error('Ошибка записи:', err.message));
  } else {
    transformStream.on('end', () => {
      console.log('Преобразование завершено');
    });
  }

  process.stdin.on('error', (err) => console.error('Ошибка чтения stdin:', err.message));
}

module.exports = { transformCatalog };

if (require.main === module) {
  const [, , outputFile] = process.argv;
  transformCatalog(outputFile || null);
}