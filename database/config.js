import mongoose from "mongoose"

// Funcion asincrona para conectar con la base de datos de mongo
export default async function dbConnection(){
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Connect to Database')
    } catch (error) {
        console.log(error)
    }
}