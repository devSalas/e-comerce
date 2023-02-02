import express from "express";
import cors from "cors";
import router from "./routes/index.js";
const app = express();


/* middleware */

app.use(cors())


app.use(router)




app.listen(3000, () => {
  console.log('App listening on port 3000!');
});