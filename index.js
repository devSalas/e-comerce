import express from "express";
import cors from "cors";
import routerproduct from "./routes/api.routes.js";
import './config/enviroment.js'
import connection from "./config/connect_Db.js";
import cookieParser from "cookie-parser";
import routerUser from "./routes/user.routes.js";
import morgan from "morgan";

const app = express();
/* middleware */
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api',routerproduct)// api de productos
app.use('/',routerUser)//rutas para el usuario

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")//middleware si no se encuentra una ruta
})


const servidor=async()=>{

  await connection(process.env.DB_CONNECTION)

  app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
  });
}

servidor()