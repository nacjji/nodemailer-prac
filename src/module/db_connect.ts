import mysql from 'mysql2/promise';
import db from './db';

const pool = mysql.createPool(db);

class DatabaseManager {
  getConnection = async () => {
    let conn = null;
    try {
      conn = await pool.getConnection();
    } catch (err) {
      console.error(err);
    }

    return conn;
  };

  query = async (sql: string) => {
    let poolConnection = null;

    try {
      poolConnection = await pool.getConnection();
    } catch (err) {
      console.log(err);
    }
    if (poolConnection == null) throw new Error();

    try {
      const rel = await poolConnection.query(sql).catch(() => {
        return false;
      });

      poolConnection.release();
      return rel || false;
    } catch (err) {
      console.error(err);
    } finally {
      poolConnection.release();
    }
  };
}

export default DatabaseManager;
