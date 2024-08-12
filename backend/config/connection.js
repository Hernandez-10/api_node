const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USERBD}:${process.env.PASSBD}@adso2669736.c6qerdg.mongodb.net/${process.env.BD}`
//                          mongodb+srv://hammerhernandez10:<password>@adso2669736.c6qerdg.mongodb.net/
// `mongodb+srv://${process.env.USERBD}:${process.env.PASSDB}@adso2669736.c6qerdg.mongodb.net/${process.env.BD}`

mongoose.connect(URI);

module.exports=mongoose