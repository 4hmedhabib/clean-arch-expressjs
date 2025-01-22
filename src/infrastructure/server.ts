import express from "express";
import cors, { CorsOptions } from "cors";
import { setupRestAPI } from "./interfaces";
import { prisma } from "./databases";
import { UserService } from "../core";
import { Nodemailer } from "./mail";

// Cors options
const CORS_OPTIONS: CorsOptions = {
  origin: ["*"],
  methods: ["GET", "POST"],
  credentials: true
};

const app = express();

// Middlewares
app.use(cors(CORS_OPTIONS));
app.use(express.json());

// Initialize External Adapters
const mailer = new Nodemailer();

// Initialize repositories
const userRepo = new prisma.UserRepoImpl();

// Initialize services
const userService = new UserService(userRepo, mailer);

// Setup restAPI
setupRestAPI(app, userService);

export default app;
