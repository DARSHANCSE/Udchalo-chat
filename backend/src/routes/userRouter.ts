// import { Router } from "express";
// import { getFlight } from "../controllers/userController";

// export const userRouter = Router();

// userRouter.get("/getflights",getFlight);


import { Router } from "express";
import  {getFlight}  from "../controllers/adminController";

export const userRouter = Router();
userRouter.get("/getflights", getFlight);