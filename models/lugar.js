//Models
const mongoose=require('mongoose');

//Definir esquema
const LugarSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    pais:{
        type:String,
        required:true
    },
    lugar:{
        type:String,
        required:true
    },
    atractivo:{
        type:String,
        required:true
    },
    contador_interes:Number
},{collection:'lugar'});

//Crear modelo
module.exports=mongoose.model('Lugar',LugarSchema);