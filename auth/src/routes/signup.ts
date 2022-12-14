import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { BadRequestError, validateRequest } from "@arale-auth/common";
const router = express.Router();
router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must valid"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new BadRequestError("User existed");
    }
    const user = User.build({ email, password });
    await user.save();
    //generate jwt
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );
    // store it to session object
    req.session = {
      jwt: userJwt,
    };
    res.status(201).send(user);
  }
);
export { router as signupRouter };
