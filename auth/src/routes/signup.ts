import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { User } from "../models/user";
import { BadRequestError, RequestValidationError } from "../errors";
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
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new BadRequestError("User existed");
    }
    const user = User.build({ email, password });
    await user.save();
    res.status(201).send(user);
  }
);
export { router as signupRouter };
