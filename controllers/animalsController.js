import Animal from "../models/animals.js";

export async function getAnimal(req, res) {
    try {
        const animales = await Animal.find();
        res.json(animales);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export async function postAnimal(req, res) {
    const body = req.body;
    try {
        const animal = new Animal(body)
        await animal.save()
        res.status(201).json('Animal creado satisfactoriamente');
    } catch (error) {
        res.status(500).json('Error');
    }
}

export async function putAnimal(req, res) {
    const { nombre, especie, color, raza, precio, observaciones } = req.body; 
    try {
        await Animal.findOneAndUpdate({ nombre:nombre }, { especie:especie, color:color, raza:raza, precio:precio, observaciones:observaciones});
        res.json('Animal actualizado satisfactoriamente');
    } catch (error) {
        res.status(500).json('Error');
    }
}

export async function deleteAnimal(req, res) {
    const _id = req.params.id
    try {
        await Animal.findByIdAndDelete({_id:_id})
        res.json('Animal eliminado satisfactoriamente');
    } catch (error) {
        res.status(500).json('Animal no encontrado');
    }
}
