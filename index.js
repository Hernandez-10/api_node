const exp = require("express");
const modeloUsuarios =require("./backend/models/user.model")
require("dotenv").config();

const app = exp();

const logger = require("morgan")
app.use(logger("dev"));

app.use(exp.urlencoded({extended:false}));
app.use(exp.json())

app.get("/conectar", async (req, res)=>{
    const consulta = await modeloUsuarios.find({});
    console.log(consulta)

});

app.get('/usuario/:re', async (req,res)=>{
    let encontrarUsuario = await modeloUsuarios.findOne({correo: req.params.re});
    if (encontrarUsuario)
        res.status(200).json(encontrarUsuario);
    else 
        res.status(404).json({"error": "Usuario no encontrado"})
})



app.post("/crear", async (req, res)=>{

    
    const nuevoUsuario = {
        correo : req.body.correo,
        pass : req.body.pass,
        
    };
    let insercion = await modeloUsuarios.create(nuevoUsuario);
    if (insercion)
        res.status(200).json({"mensaje":"registro exitoso"})
    else
        res.status(404).json({"mensaje":"Se presentó un error"})
})

const emailService = require('./backend/utils/email.service')
app.get('/enviarcorreo',async (req, res)=>{
    await emailService.sendEmail(
        "juanpmontoya664@gmail.com",
        "Confirmación de Registro",
        "Bienvenido a la tienda en línea más top de todo el mundo",
    );
})
app.listen(process.env.PORT)