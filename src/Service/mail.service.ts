import env from 'dotenv';
import nodemailer from 'nodemailer';
import { MailData } from '../model/mailModel';
import MailRepository from '../Repository/mail.repository';
env.config();

class MailService {
  mailRepository: MailRepository | undefined; //FIXME

  constructor() {
    this.mailRepository = new MailRepository();
  }

  public sendMail = async (data: MailData) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      host: 'smtp.gmail.com',
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_SENDER,
      to: data.to,
      subject: data.title,
      text: data.content,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.error(err);
      else console.log(`${data.to}님에게 메일을 전송했습니다.`);
    });
    await this.mailRepository?.sendMail(data);

    return;
  };

  public getMailList = async () => {
    const res = await this.mailRepository?.getMailList();
    return res;
  };
}

export default MailService;
