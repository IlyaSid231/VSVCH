const fs = require('fs').promises;
const path = require('path');

async function listBooks() {
  const indexFile = path.join(__dirname, 'book_index.json');

  let index = [];
  try {
    const indexData = await fs.readFile(indexFile, 'utf8');
    index = JSON.parse(indexData);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Индекс пуст или не найден');
      return;
    }
    throw err;
  }

  if (index.length === 0) {
    console.log('Нет книг в каталоге');
    return;
  }

  console.log('Список книг:');
  index.forEach(book => {
    console.log(`- ${book.title} (Автор: ${book.author})`);
  });
}

module.exports = { listBooks };

if (require.main === module) {
  (async () => {
    try {
      await listBooks();
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  })();
}