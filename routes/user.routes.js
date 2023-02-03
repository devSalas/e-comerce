import { Router } from "express";
import controllerlogin from "../controllers/controller-login.js";
import controllerprofile from "../controllers/controller-profile.js";
import loginValidate from "../dto/dto-login.js";

const routerUser = new Router();


routerUser.post("/login",loginValidate,controllerlogin)
routerUser.get("/profile",controllerprofile)


export default routerUser