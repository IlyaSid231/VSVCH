const fs = require('fs').promises;
const path = require('path');

async function backupFolder(sourceDir, targetDir) {
  if (!sourceDir || !targetDir) {
    throw new Error('Требуются 2 аргумента: source_dir, target_dir');
  }

  try {
    await fs.access(sourceDir);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Исходная папка не найдена');
    }
    throw err;
  }

  await fs.mkdir(targetDir, { recursive: true });
  await fs.cp(sourceDir, targetDir, { recursive: true, force: true });
  console.log(`Резервная копия создана: ${sourceDir} -> ${targetDir}`);
}

module.exports = { backupFolder };

if (require.main === module) {
  const [, , sourceDir, targetDir] = process.argv;
  (async () => {
    try {
      await backupFolder(sourceDir, targetDir);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  })();
}