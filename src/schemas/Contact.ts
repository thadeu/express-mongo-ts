import mongoose, { Document, Schema } from 'mongoose'

interface Contact extends Document {
  email: string
  tags?: []
}

const ContactSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<Contact>('Contact', ContactSchema)
