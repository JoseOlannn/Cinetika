const usuario = require("../models/userModel")

//GET
const obtenerUsuario = async (req, res) => {
    try{
        const usuario = await usuario.find()
        res.status(200).json(usuario)
    }catch(error){
        res.status(500).json({
            mensaje: 'Error al obtener usuarios',
            error: error.message
        })
    }
}

//Post