import { model, Schema } from "mongoose"

const AnimalSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    especie:{
        type: String,
        required: [true, 'La especie es requerida']
    },
    color: {
        type: String,
        required: [true, 'El color es requerido']
    },
    raza:{
        type: String,
        required: [true, 'La raza es requerida']
    },
    precio:{
        type: Number,
        required: [true, 'El precio es requerido']
    },
    observaciones:{
        type: String,
    }
})

export default model('Animal', AnimalSchema, 'animal')