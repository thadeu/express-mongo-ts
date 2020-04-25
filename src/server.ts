import 'dotenv/config'
import mongoose from 'mongoose'
import app from './app'
import mongoConfig from '@config/mongo'

mongoose.connect(`mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`⚡️ Server listening`)
})
