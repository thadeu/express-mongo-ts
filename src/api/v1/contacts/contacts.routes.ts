import express, { Request, Response } from 'express'
import { catchRoute } from '@api/errors'
import ContactController from '@api/v1/contacts/contacts.controller'
import Contact from '@schemas/Contact'

const router = express.Router()

/**
 * @api GET /contacts
 * Get All Contacts
 */
router.get('/', ContactController.index)
router.post('/', ContactController.create)

export default router
