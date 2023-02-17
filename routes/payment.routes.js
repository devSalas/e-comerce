import { Router } from "express";
import paymentController from "../controllers/controller-payment.js";
const routerPayment = new Router();



routerPayment.post("/create-payment-intent", paymentController);

export default routerPayment;