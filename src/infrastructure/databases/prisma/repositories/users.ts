import { PrismaClient } from "@prisma/client";
import {
  CreateUser,
  UpdateUser,
  User,
  UserFilter,
  UserRepo
} from "../../../../core";
import prismaConn from "../connection";

class UserRepoImpl implements UserRepo {
  private db: PrismaClient;

  constructor() {
    this.db = prismaConn;
  }

  async findAll(filter: UserFilter): Promise<User[]> {
    return await this.db.users.findMany({
      where: filter,
      omit: { password: true }
    });
  }

  async findById(userId: number): Promise<User | null> {
    return await this.db.users.findUnique({
      where: {
        userId
      },
      omit: { password: true }
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.db.users.findUnique({
      where: {
        email
      },
      omit: { password: true }
    });
  }

  async createUser(data: CreateUser): Promise<User | null> {
    return await this.db.users.create({
      data,
      omit: { password: true }
    });
  }

  async updateUser(userId: number, data: UpdateUser): Promise<User | null> {
    return await this.db.users.update({
      where: { userId },
      data,
      omit: { password: true }
    });
  }

  async deleteUser(userId: number): Promise<User | null> {
    return await this.db.users.delete({ where: { userId } });
  }

  async resetPassword(userId: number, password: string): Promise<User | null> {
    return await this.db.users.update({
      where: {
        userId
      },
      data: { password },
      omit: { password: true }
    });
  }
}

export default UserRepoImpl;
