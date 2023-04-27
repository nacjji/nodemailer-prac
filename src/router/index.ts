import { Router } from 'express';
import MailRouter from './mail.router';

const indexRouter = Router();

indexRouter.use('/mail', MailRouter);

export default indexRouter;
