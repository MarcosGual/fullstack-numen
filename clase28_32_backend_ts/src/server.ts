import express, { Express } from "express";
import itemRouter from "./routes/items.routes";
import authRouter from "./routes/auth.routes";
import indexRouter from "./routes/index.routes";
import { connectDB } from "./utils/database";
import { logger } from "./middlewares/logger";
import session from "express-session";
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';

const app: Express = express();
const port = 8080;

connectDB(); //función de conexión a la base de datos

//middlewares nivel aplicación
app.use(express.json()); //habilita el parseo de archivos json
app.use(logger);
app.use(cookieParser()); //habilita el parseo de cookies
app.use(session({
    secret: process.env.SESSION_SECRET || "", //clave que es privada y va en la firma de la cookie de sesión
    resave: false, //no volver a guardar la sesión si no se modificó ningún dato
    saveUninitialized: false, //no guardar sesiones vacías
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        ttl: 60 * 60 * 24
    }),
    cookie: {
        maxAge: 60 * 60 * 24,
        secure: false,
    }
}))

app.use("/api", indexRouter);
app.use("/api/items", itemRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
    console.log("App funcionando en http://localhost:" + port);
})