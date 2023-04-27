import env from 'dotenv';

env.config();

export default (() => {
  return {
    host: process.env.DB_HOST,
    port: 3306,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
  };
})();
