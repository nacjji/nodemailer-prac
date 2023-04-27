import { RequestHandler } from 'express';
import { MailData } from '../model/mailModel';
import MailService from '../Service/mail.service';

class MailController {
  mailService: MailService | undefined;

  constructor() {
    this.mailService = new MailService();
  }

  public sendMail: RequestHandler = async (req, res, next) => {
    const data: MailData = req.body;
    try {
    } catch (err) {
      throw new Error(`${err}`);
    }

    await this.mailService?.sendMail(data);

    return res.status(201).json({ message: '메일 전송 성공!' });
  };
}

export default MailController;
