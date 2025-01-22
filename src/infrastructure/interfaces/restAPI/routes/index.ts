import { Express } from "express";
import { setupUserRoutes } from "./users";
import { UserController } from "../controllers";
import { UserService } from "../../../../core";

export function setupRoutes(
  app: Express,
  userService: UserService,
  baseRoute = "/api"
) {
  const userCtrl = new UserController(userService);

  setupUserRoutes(app, userCtrl, `${baseRoute}/users`);
}
