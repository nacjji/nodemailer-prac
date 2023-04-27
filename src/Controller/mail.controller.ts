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
      await this.mailService?.sendMail(data);
    } catch (err) {
      throw new Error(`${err}`);
    }
    return res.status(201).json({ message: '메일 전송 성공!' });
  };

  public getMailList: RequestHandler = async (req, res, next) => {
    let result = null;
    try {
      result = await this.mailService?.getMailList();
    } catch (err) {
      throw new Error(`${err}`);
    }
    return res.status(200).json({ result });
  };
}

export default MailController;
