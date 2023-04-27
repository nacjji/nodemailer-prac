import { Router } from 'express';
import MailController from '../Controller/mail.controller';

const mailRouter = Router();
const mailController = new MailController();

mailRouter.post('/', mailController.sendMail);
mailRouter.get('/', mailController.getMailList);
export default mailRouter;
