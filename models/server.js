import express from "express";
import 'dotenv/config' // Permite trabjar con variables de entorno
import dbConnection from '../database/config.js'
import { getAnimal, postAnimal, putAnimal, deleteAnimal } from "../controllers/animalsController.js";

export default class Server {
    constructor() {
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathAnimal = '/api/animal'
        this.route()
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`El servidor esta corriendo en ${process.env.PORT}`)
        })
    }
    async dbConnection() { // llamar al metodo para concetarse a mongo
       await dbConnection()
    }
    route(){
        this.app.use(express.json())
        this.app.get(this.pathAnimal, getAnimal);
        this.app.post(this.pathAnimal, postAnimal);
        this.app.put(this.pathAnimal, putAnimal);
        this.app.delete(this.pathAnimal+'/:id', deleteAnimal);
    }
}
