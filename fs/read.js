const fs = require('fs').promises;
const path = require('path');

async function readBook(id) {
  if (!id) {
    throw new Error('Требуется аргумент: id');
  }

  const filename = path.join(__dirname, `book_${id}.json`);

  try {
    const data = await fs.readFile(filename, 'utf8');
    const book = JSON.parse(data);
    console.log('Информация о книге:', book);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Книга не найдена');
    } else {
      throw err;
    }
  }
}

module.exports = { readBook };

if (require.main === module) {
  const [, , id] = process.argv;
  (async () => {
    try {
      await readBook(id);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  })();
}