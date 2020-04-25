import { Request, Response } from 'express'

export const notFoundRoute = (req: Request, res: Response) => {
  return res.status(404).json({
    error: true,
    message: 'We can not find your resource in our app. Check that the endpoints are well formatted',
    code: 404
  })
}

export const catchRoute = (req: Request, res: Response) => {
  return res.status(500).json({
    error: true,
    message: 'Wen cant render json this route',
    code: 500
  })
}
