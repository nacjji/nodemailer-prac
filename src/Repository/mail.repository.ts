import env from 'dotenv';
import { MailData } from '../model/mailModel';
import DatabaseManager from '../module/db_connect';

env.config();
const db = new DatabaseManager();

class MailRepository {
  public sendMail = async (data: MailData) => {
    let conn = await db.getConnection();
    if (!conn) throw new Error();

    await conn.query(
      `INSERT INTO mail(\`to\`, \`from\`, title, content, send_at) 
      VALUES('${data.to}','${process.env.MAIL_SENDER}','${data.title}','${data.content}' ,NOW())`
    );
  };

  public getMailList = async () => {
    let conn = await db.getConnection();
    if (!conn) throw new Error();

    const [res] = await conn.query(`SELECT * FROM mail`);

    return res;
  };
}

export default MailRepository;
