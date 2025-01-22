import { Request, Response } from "express";
import {
  CreateUser,
  UpdateUser,
  UserFilter,
  UserService
} from "../../../../core";
import { logger } from "../../../logger";

export class UserController {
  private service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  createUser = async (req: Request, res: Response) => {
    try {
      const data = req.body as CreateUser;

      // Create user
      const user = await this.service.createUser(data);

      res.send(user);
    } catch (error: any) {
      logger.error(error.message);
      logger.error(error.stack);
      res.status(error.status || 501).json({ error: error?.message });
    }
  };

  findAllUsers = async (req: Request, res: Response) => {
    try {
      const query = req.query as UserFilter;

      const users = await this.service.findAllUsers({ ...query });

      res.send({ data: users });
    } catch (error: any) {
      logger.error(error.message);
      logger.error(error.stack);
      res.status(error.status || 501).json({ error: error?.message });
    }
  };

  findUserById = async (req: Request, res: Response) => {
    try {
      const userId = +req.params.userId;

      // Check user id is a not NaN
      if (isNaN(userId)) throw new Error("User id must be a number");

      // Get user by id
      const user = await this.service.findUserById(userId);

      res.send({ data: user });
    } catch (error: any) {
      logger.error(error.message);
      logger.error(error.stack);
      res.status(error.status || 501).json({ error: error?.message });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const userId = +req.params.userId;

      // Check user id is a not NaN
      if (isNaN(userId)) throw new Error("User id must be a number");

      const data = req.body as UpdateUser;

      // Update user
      const user = await this.service.updateUser(userId, data);

      res.send({ data: user });
    } catch (error: any) {
      logger.error(error.message);
      logger.error(error.stack);
      res.status(error.status || 501).json({ error: error?.message });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const userId = +req.params.userId;

      // Check user id is a not NaN
      if (isNaN(userId)) throw new Error("User id must be a number");

      // Delete user
      const deletedUser = await this.service.deleteUser(userId);

      res.send({ data: deletedUser });
    } catch (error: any) {
      logger.error(error.message);
      logger.error(error.stack);
      res.status(error.status || 501).json({ error: error?.message });
    }
  };

  resetPassword = async (req: Request, res: Response) => {
    try {
      const userId = +req.params.userId;
      const password = req.body.password;

      // Check user id is a not NaN
      if (isNaN(userId)) throw new Error("User id must be a number");

      // Reset password
      const updatedUser = await this.service.resetPassword(userId, password);

      res.send({ data: updatedUser });
    } catch (error: any) {
      logger.error(error.message);
      logger.error(error.stack);
      res.status(error.status || 501).json({ error: error?.message });
    }
  };
}
