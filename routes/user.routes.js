import { Router } from "express";
import controllerCreateFavorite from "../controllers/controller-create-favorite.js";
import controllerFavorite from "../controllers/controller-favorite.js";
import controllerlogin from "../controllers/controller-login.js";
import controllerlogout from "../controllers/controller-logout.js";
import controllerprofile from "../controllers/controller-profile.js";
import controllerRegister from "../controllers/controller-register.js";
/* import controllerRole from "../controllers/controller-role.js"; */
import favoriteValidate from "../dto/dto-favorite.js";
import loginValidate from "../dto/dto-login.js";
import registerValidate from "../dto/dto-register.js";
/*i mport roleValidate from "../dto/dto-rol.js"; */
import jwtVerify from "../middleware/jwtVerifiy.js";
import roleVerify from "../middleware/roleVerify.js";

const routerUser = new Router();

routerUser.post("/register",registerValidate,controllerRegister)//register body:{name,email,password}
routerUser.post("/login",loginValidate,controllerlogin)//login body:{email,password}, retorna una cookie con jwt 
routerUser.patch("/logout",jwtVerify,controllerlogout)//logout , cambia el status de jwt en false
routerUser.get("/profile",jwtVerify,controllerprofile)//profile, retorna los datos personales del usuario
routerUser.post("/create-favorite",jwtVerify,favoriteValidate,controllerCreateFavorite)//create-favorite, añade un product favorito al usuario
routerUser.get("/favorite",jwtVerify,controllerFavorite)//favorite, devuelve los productos favoritos del usuario
/* routerUser.post('/assign-role',jwtVerify,roleVerify,roleValidate,controllerRole) */




export default routerUser