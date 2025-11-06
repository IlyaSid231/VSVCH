const fs = require('fs').promises;
const path = require('path');

async function renameBookFile(oldFilename, newFilename) {
  if (!oldFilename || !newFilename) {
    throw new Error('Требуются 2 аргумента: старое название файла, новое название файла');
  }

  const oldPath = path.join(__dirname, oldFilename);
  const newPath = path.join(__dirname, newFilename);
  const indexFile = path.join(__dirname, 'book_index.json');

  try {
    await fs.access(oldPath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Файл не найден');
    }
    throw err;
  }

  await fs.rename(oldPath, newPath);

  let index = [];
  try {
    const indexData = await fs.readFile(indexFile, 'utf8');
    index = JSON.parse(indexData);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }

  const updated = index.find(item => item.filename === oldFilename);
  if (updated) {
    updated.filename = newFilename;
    await fs.writeFile(indexFile, JSON.stringify(index, null, 2));
  }

  console.log(`Файл переименован: ${oldFilename} -> ${newFilename}`);
}

module.exports = { renameBookFile };

if (require.main === module) {
  const [, , oldFilename, newFilename] = process.argv;
  (async () => {
    try {
      await renameBookFile(oldFilename, newFilename);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  })();
}