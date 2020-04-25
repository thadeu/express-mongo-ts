import { Request, Response } from 'express'
import { catchRoute } from '@api/errors'
import Contact from '@schemas/Contact'

export default {
  async index(req: Request, res: Response) {
    try {
      const contacts = await Contact.find().populate('tasks')
      res.json(contacts)
    } catch (error) {
      catchRoute(req, res)
    }
  },

  async create(req: Request, res: Response) {
    try {
      const contact = await Contact.create(req.body)
      res.json(contact)
    } catch (error) {
      catchRoute(req, res)
    }
  }
}
