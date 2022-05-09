import express, { Request, Response } from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prima-feedbacks-repository';
import { NodemailerMailAdapter } from './services/nodemailer/nodemailer-mail-adapter';
import { SubmitFeedback } from './services/submit-feedback';

export const routes = express.Router();


routes.post('/feedback', async (req: Request, res: Response) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedback = new SubmitFeedback(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    await submitFeedback.execute({
        type,
        comment,
        screenshot
    })

    res.status(201).send()
})

