import request from 'supertest'

import { MongooseSetup } from '../test-setup'
import app from '../../src/app'
import Task from '@schemas/Task'

describe('GET /tasks', () => {
  MongooseSetup(Task)

  it('should be return all tasks', async () => {
    await Task.create({ title: 'task-1' })
    await Task.create({ title: 'task-2', description: 'included' })

    const { body, status } = await request(app).get('/api/v1/tasks')

    expect(status).toBe(200)

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'task-1'
        }),

        expect.objectContaining({
          title: 'task-2',
          description: 'included'
        })
      ])
    )
  })
})
