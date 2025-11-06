const fs = require('fs').promises;
const path = require('path');

async function createBook(title, author, isbn, year) {
  if (!title || !author || !isbn || !year) {
    throw new Error('Требуются 4 аргумента: title, author, isbn, year');
  }

  const id = Date.now().toString();
  const filename = path.join(__dirname, `book_${id}.json`);
  const indexFile = path.join(__dirname, 'book_index.json');

  try {
    await fs.access(filename);
    throw new Error('Ошибка операции FS: Запись уже существует');
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }

  const bookJson = JSON.stringify({ id, title, author, isbn, year }, null, 2);
  await fs.writeFile(filename, bookJson);

  let index = [];
  try {
    const indexData = await fs.readFile(indexFile, 'utf8');
    index = JSON.parse(indexData);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }

  index.push({
    id,
    title,
    author,
    filename: `book_${id}.json`
  });

  await fs.writeFile(indexFile, JSON.stringify(index, null, 2));
//   console.log(`Книга "${title}" ID: ${id}`);
}

module.exports = { createBook };

if (require.main === module) {
  const [, , title, author, isbn, year] = process.argv;
  (async () => {
    try {
      await createBook(title, author, isbn, year);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  })();
}