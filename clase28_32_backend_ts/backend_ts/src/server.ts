import express, {Express} from "express";
import itemRouter from "./routes/items.routes";
import { connectDB } from "./utils/database";
import { logger } from "./middlewares/logger";

const app = express();
const port = 8080;

connectDB(); //función de conexión a la base de datos

//middlewares nivel aplicación
app.use(express.json()); //habilita el parseo de archivos json
app.use(logger);

app.use("/items", itemRouter);

app.listen(port, ()=>{
    console.log("App funcionando en http://localhost:"+port);
})