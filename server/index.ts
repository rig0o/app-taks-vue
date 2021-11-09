import app from "./app";
import {startConnection} from "./database";

startConnection();
app.listen(3000)
console.log('Servidor corriendo en el puerto 3000')