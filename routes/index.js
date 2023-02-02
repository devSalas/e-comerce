import { Router } from "express";

const router = new Router();


router
  .get("/", (req, res) => {
    res.send("hola mundo")
  })


export default router;