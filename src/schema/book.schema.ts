import * as mongoose from 'mongoose'
import { nanoid } from 'nanoid'

export const BookSchema = new mongoose.Schema({
 
  uniqueId: {
    type: String,
    required: true,
    default: () => nanoid(),
    index: { unique: true },
  },
  
  title: String,

  author: String,

  summary: String
})


