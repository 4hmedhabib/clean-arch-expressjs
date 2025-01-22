import { Express } from "express";
import { UserController } from "../controllers";

export function setupUserRoutes(
  app: Express,
  userCtrl: UserController,
  baseRoute: string = "/users"
) {
  app.post(`${baseRoute}/`, userCtrl.createUser);

  app.get(`${baseRoute}/`, userCtrl.findAllUsers);

  app.get(`${baseRoute}/:userId`, userCtrl.findUserById);

  app.put(`${baseRoute}/:userId`, userCtrl.updateUser);

  app.delete(`${baseRoute}/:userId`, userCtrl.deleteUser);
}
