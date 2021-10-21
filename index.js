/*
Miguel Jesús Torres Cárdenas
A01168868
Desarrollo Web
*/

const express=require("express");
const mongoose=require("mongoose");
const lugarRoutes=require("./routes/lugar");

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/lugar",lugarRoutes);

mongoose.connect('mongodb://vmanager:tecCEM@54.173.202.133:27017/testdb?authSource=admin')
.then(()=>{
    app.listen(8081,()=>console.log("Escuchando en puerto 8081"));
})
.catch(err=>console.log(err))