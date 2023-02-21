import { Router } from "express";
import paymentController from "../controllers/controller-payment.js";
import PaymentValidate from "../dto/dto-payment.js";
const routerPayment = new Router();



routerPayment.post("/create-payment-intent",PaymentValidate ,paymentController);

export default routerPayment;