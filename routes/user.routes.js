import { Router } from "express";
import controllerCreateFavorite from "../controllers/controller-create-favorite.js";
import controllerFavorite from "../controllers/controller-favorite.js";
import controllerlogin from "../controllers/controller-login.js";
import controllerprofile from "../controllers/controller-profile.js";
import controllerRegister from "../controllers/controller-register.js";
import controllerRole from "../controllers/controller-role.js";
import favoriteValidate from "../dto/dto-favorite.js";
import loginValidate from "../dto/dto-login.js";
import registerValidate from "../dto/dto-register.js";
import roleValidate from "../dto/dto-rol.js";
import jwtVerify from "../middleware/jwtVerifiy.js";
import roleVerify from "../middleware/roleVerify.js";

const routerUser = new Router();

routerUser.post("/register",registerValidate,controllerRegister)
routerUser.post("/login",loginValidate,controllerlogin)
routerUser.get("/profile",jwtVerify,controllerprofile)
routerUser.post("/create-favorite",jwtVerify,favoriteValidate,controllerCreateFavorite)
routerUser.get("/favorite",jwtVerify,controllerFavorite)
routerUser.post('/assign-role',jwtVerify,roleVerify,roleValidate,controllerRole)




export default routerUser