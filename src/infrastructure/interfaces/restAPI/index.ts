import { Express } from "express";
import { setupRoutes } from "./routes";
import { UserService } from "../../../core";

export function setupRestAPI(app: Express, userService: UserService) {
  const baseRoute = "/api";
  setupRoutes(app, userService, baseRoute);
}
