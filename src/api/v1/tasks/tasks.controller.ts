import { Request, Response } from 'express'
import { catchRoute } from '@api/errors'
import Task from '@schemas/Task'

export default {
  async index(req: Request, res: Response) {
    try {
      const tasks = await Task.find()
      res.json(tasks)
    } catch (error) {
      catchRoute(req, res)
    }
  }
}
