//RUTAS
const router=require("express").Router();
const lugarController=require("../controllers/lugar");

router.post('/agregar',lugarController.postAgregarLugar);
router.get("/obtener/:pais",lugarController.getObtenerLugar);
/*
router.get("/obtenerTodo",lugarController.getObtenerLugar);
router.get("/obtener/:id",lugarController.getObtenerLugar);
router.post("/actualizar",lugarController.postActualizarLugar);
router.post("/borrar",lugarController.postBorrarLugar);
*/

module.exports=router;