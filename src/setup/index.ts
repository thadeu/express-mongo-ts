import express from 'express'
import setupCors from '@setup/cors'
import setupMorgan from '@setup/morgan'
import setupBodyParser from '@setup/body-parser'
import api from '../api'

export default (app: any) => {
  app.use(express.json())

  setupCors(app)
  setupMorgan(app)
  setupBodyParser(app)

  app.use('/api', api)
}
