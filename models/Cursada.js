import { Schema, model } from 'mongoose'

const CursadaSchema = new Schema (
{
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      unique:true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    
    },
  },
  {
    timestamps: true,
  },
)
const Cursada = model ('Cursada', CursadaSchema)

export default Cursada