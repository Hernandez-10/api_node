const { default: mongoose } = require('mongoose')
const conexion = require('../config/connection')

const clientSchema = new conexion.Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre completo debe ser ingresado'],
        trim: true,
        maxLenght: [150, 'el nombre ingresado es muy extenso'],
        minLenght: [8, 'el nombre ingresado es muy corto']
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
        maxLenght: [14, 'el numero ingresado es muy extenso'],
        minLenght: [9, 'el numero ingresado es muy corto']
    },
    direccion: {
        type: String,
        required: true,
        trim: true,
        minLenght: [9, 'la direccion ingresada es muy corta'],
    },
    habilitado: {
        type: Boolean,
        default: true,
    },
    usuario: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    }


});

const clientModel = conexion.model('clientes', clientSchema);

module.exports= clientModel;
