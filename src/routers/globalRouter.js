import express from "express";
import { recommended, search } from "../controllers/videoControllers";
import { join, login } from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get("/", recommended);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;