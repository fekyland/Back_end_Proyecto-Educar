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
    price: {
      type: Number,
      required: true,
    
    },
    orders_id:{
      type: Array,
      default:[String],
    },
  },
  {
    timestamps: true,
  },
)
const Cursada = model ('Cursada', CursadaSchema)

export default Cursada