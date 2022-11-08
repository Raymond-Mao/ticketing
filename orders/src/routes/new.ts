import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { RequireAuth, validateRequest } from "@arale-auth/common";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/api/orders",
  RequireAuth,
  [
    body("ticketId")
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage("TicketId must be provided"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    res.send({});
  }
);

export { router as newOrderRouter };
