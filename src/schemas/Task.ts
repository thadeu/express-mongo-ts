import mongoose, { Document, Schema } from 'mongoose'

interface Task extends Document {
  title: string
  description?: string
}

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: true
    },
    description: String
  },
  { timestamps: true }
)

export default mongoose.model<Task>('Task', TaskSchema)
