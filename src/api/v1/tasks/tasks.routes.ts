import express, { Request, Response } from 'express'
import TasksController from '@api/v1/tasks/tasks.controller'
import Task from '@schemas/Task'

const router = express.Router()

/**
 * @api GET /tasks
 * Get All Task
 */
router.get('/', TasksController.index)

export default router
