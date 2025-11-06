const fs = require('fs').promises;
const path = require('path');

async function deleteBook(id) {
  if (!id) {
    throw new Error('Требуется аргумент: id');
  }

  const filename = path.join(__dirname, `book_${id}.json`);
  const indexFile = path.join(__dirname, 'book_index.json');

  try {
    await fs.access(filename);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Запись не найдена');
    }
    throw err;
  }

  await fs.unlink(filename);

  let index = [];
  try {
    const indexData = await fs.readFile(indexFile, 'utf8');
    index = JSON.parse(indexData);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }

  index = index.filter(item => item.id !== id);
  await fs.writeFile(indexFile, JSON.stringify(index, null, 2));

  console.log(`Книга с ID ${id} удалена`);
}

module.exports = { deleteBook };

if (require.main === module) {
  const [, , id] = process.argv;
  (async () => {
    try {
      await deleteBook(id);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  })();
}