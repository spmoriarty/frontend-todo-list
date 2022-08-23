const app = require('./app.js');
const pool = require('./lib/utils/pool');

const API_URL = process.env.API_URL || 'http://localhost';
const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server started on ${API_URL}:${PORT}`);
});

process.on('exit', () => {
  // eslint-disable-next-line no-console
  console.log('👋  Goodbye!');
  pool.end();
});
