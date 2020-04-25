import express from 'express'
import { notFoundRoute } from '@api/errors'

import contacts from '@api/v1/contacts/contacts.routes'
import tasks from '@api/v1/tasks/tasks.routes'

const app = express()

app.use('/v1/contacts', contacts)
app.use('/v1/tasks', tasks)

app.all('*', notFoundRoute)

export default app
