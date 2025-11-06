const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

async function searchBooks(criteria) {
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

  const results = index.filter(book => 
    book.title.toLowerCase().includes(criteria.toLowerCase()) ||
    book.author.toLowerCase().includes(criteria.toLowerCase())
  );

  if (results.length === 0) {
    console.log('Ничего не найдено');
    return;
  }

  console.log('Результаты поиска:');
  results.forEach(book => {
    console.log(`- ${book.title} (Автор: ${book.author}, ID: ${book.id})`);
  });
}

module.exports = { searchBooks };

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Введите критерий поиска (например, название книги): ', (criteria) => {
    (async () => {
      try {
        await searchBooks(criteria);
      } catch (err) {
        console.error(err.message);
      } finally {
        rl.close();
      }
    })();
  });
}