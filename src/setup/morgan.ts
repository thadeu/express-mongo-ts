import morgan from 'morgan'

export default (app: any) => {
  app.use(morgan('dev'))
}
