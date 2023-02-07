import express from "express";
import cors from "cors";
import router from "./routes/api.routes.js";
import './config/enviroment.js'
import connection from "./config/connect_Db.js";
import cookieParser from "cookie-parser";
import routerUser from "./routes/user.routes.js";

const app = express();

/* middleware */
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api',router)
app.use('/',routerUser)

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

const servidor=async()=>{

  await connection(process.env.DB_CONNECTION)

  app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
  });
}

servidor()