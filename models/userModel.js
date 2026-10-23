const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim: true
        },
        email:{
            type: String,
            trim: true,
            unique: true,
            required: true,
            lowercase: true
        }
    },
    {
        timestamps: true
    }
)

const Usuario = mongoose.model("Usuario", userSchema)
module.exports = Usuario


