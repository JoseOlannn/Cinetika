const usuario = require("../models/userModel")

//GET
const obtenerUsuarios = async (req, res) => {
    try{
        const usuarios = await usuario.find()
        res.status(200).json(usuarios)
    }catch(error){
        res.status(500).json({
            mensaje: 'Error al obtener usuarios',
            error: error.message
        })
    }
}

//POST
const crearUsuario = async (req, res) => {
    try{
        const {nombre, email} = req.body;

        if(!nombre || !email){
            return res.status(400).json({
                mensaje: 'Nombre y el email son requeridos'
            })
        }

        const nuevoUsuario = await usuario.create({
            nombre, email
        })

        res.status(200).json({
            mensaje: 'Usuario creado exitosamente',
            usuario: nuevoUsuario
        })
    } catch(error){
        res.status(500).json({
            mensaje: 'Error al crear usuario',
        })

    }
}

module.exports = {
    obtenerUsuarios,
    crearUsuario
}   
