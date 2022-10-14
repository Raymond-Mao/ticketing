import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { Password } from "../services/password";
import { validateRequest } from "../middlewares/validate-request";
import { BadRequestError } from "../errors";
const router = express.Router();
router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("email must be valid"),
    body("password").trim().notEmpty().withMessage("Password must be supplied"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      throw new BadRequestError("login failed");
    }
    const isMatch = await Password.compare(isUserExist.password, password);
    if (!isMatch) {
      throw new BadRequestError("Invalid pw");
    }
    //generate jwt
    const userJwt = jwt.sign(
      {
        id: isUserExist.id,
        email: isUserExist.email,
      },
      process.env.JWT_KEY!
    );
    // store it to session object
    req.session = {
      jwt: userJwt,
    };
    res.status(200).send(isUserExist);
  }
);
export { router as signinRouter };
