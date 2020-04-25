const mongoose = require('mongoose')
mongoose.promise = global.Promise

module.exports = {
  MongooseSetup(model) {
    // Connect to Mongoose
    beforeAll(async () => {
      const url = `mongodb://127.0.0.1/${process.env.MONGO_DB}`

      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      })
    })

    // Cleans up database between each test
    beforeEach(async () => {
      await model.deleteMany({})
    })

    // Disconnect Mongoose
    afterAll(async () => {
      await mongoose.connection.close()
    })
  }
}
