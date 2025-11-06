const { spawn } = require('child_process');

function performHeavySearch(searchDir, query) {
  if (!searchDir || !query) {
    console.error('Требуются аргументы: search_dir, query');
    process.exit(1);
  }

  const searchProcess = spawn('node', ['search_worker.js', searchDir, query]);

  searchProcess.stdout.on('data', (data) => {
    console.log(`Результат поиска: ${data.toString().trim()}`);
  });

  searchProcess.stderr.on('data', (data) => {
    console.error(`Ошибка в процессе: ${data.toString()}`);
  });

  searchProcess.on('close', (code) => {
    console.log(`Поиск завершён с кодом ${code}`);
  });

  searchProcess.on('error', (err) => {
    console.error('Ошибка запуска процесса:', err.message);
    process.exit(1);
  });
}

module.exports = { performHeavySearch };

if (require.main === module) {
  const [, , searchDir, query] = process.argv;
  performHeavySearch(searchDir, query);
}