const fs = require('fs').promises;
const path = require('path');

async function searchInBooks(dir, query) {
  const files = await fs.readdir(dir);
  const bookFiles = files.filter(f => f.startsWith('book_') && f.endsWith('.json'));

  for (const file of bookFiles) {
    const data = await fs.readFile(path.join(dir, file), 'utf8');
    const book = JSON.parse(data);
    if (JSON.stringify(book).toLowerCase().includes(query.toLowerCase())) {
      console.log(`Найдено в ${file}: ${book.title}`);
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

const [,, dir, query] = process.argv;
searchInBooks(dir, query).catch(console.error);