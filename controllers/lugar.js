const Lugar=require("../models/lugar.js");
const mongoose=require("mongoose");

/*
POST: localhost:8081/lugar/agregar
{
    "pais": "México",
    "lugar": "Tulum",
    "atractivo": "Playas maravillosas y ruinas Mayas."
}
*/
exports.postAgregarLugar=async(req,res)=>{

    try{
        const lugar=await Lugar.find({pais:req.body.pais,lugar:req.body.lugar});
        //Si ya existe este lugar:
        if(lugar.length>0){
            console.log("El lugar ya existe");
            var contadorInteres=lugar[0].contador_interes+1;
            await Lugar.findOneAndUpdate(
                {pais:req.body.pais,lugar:req.body.lugar},
                {
                    "contador_interes" :      contadorInteres           
                }
            );
            console.log("Cambio realizado");
        }else{ //Si es nuevo
            const lugar=new Lugar(req.body);
            lugar._id=new mongoose.Types.ObjectId();
            lugar.contador_interes=1;
            await lugar.save();
            console.log("Nuevo lugar resgistrado");
        }
        res.send({operacion:"Correcta"});
    }catch(err){
        console.log(err);
        res.json({operacion: "Incorrecta"});
    }
    res.end();
}


// GET: localhost:8081/lugar/obtener/México
exports.getObtenerLugar=async(req,res)=>{
    try{
        const lugar=await Lugar.find({pais:req.params.pais});
        console.log("Find Exitoso");
        res.json(lugar);
    }catch(err){
        console.log(err);
        res.json({operacion: "Incorrecta"});
    }
}
