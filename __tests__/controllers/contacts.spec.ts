import request from 'supertest'

import { MongooseSetup } from '../test-setup'
import app from '../../src/app'
import Contact from '@schemas/Contact'

describe('GET /contacts', () => {
  MongooseSetup(Contact)

  it('should be return all contacts', async () => {
    await Contact.create({ email: 'contact-1' })
    const { body, status } = await request(app).get('/api/v1/contacts')

    expect(status).toBe(200)

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'contact-1'
        })
      ])
    )
  })
})

describe('POST /contacts', () => {
  MongooseSetup(Contact)

  it('should be crate a new contact', async () => {
    const { body, status } = await request(app)
      .post('/api/v1/contacts')
      .send({ email: 'john@example.com' })

    expect(status).toBe(200)

    expect(body).toEqual(
      expect.objectContaining({
        email: 'john@example.com'
      })
    )
  })

  it('should be return error', async () => {
    await Contact.create({ email: 'john@example.com' })

    const { body, status } = await request(app)
      .post('/api/v1/contacts')
      .send({ email: 'john@example.com' })

    expect(status).toBe(500)

    expect(body).toEqual(
      expect.objectContaining({
        error: true
      })
    )
  })
})
