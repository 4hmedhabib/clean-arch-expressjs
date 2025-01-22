import { checkKnexConnDB } from "..";
import {
  CreateUser,
  UpdateUser,
  User,
  UserFilter,
  UserRepo
} from "../../../../core";

class UserRepoImpl implements UserRepo {
  constructor() {}

  static async init() {
    console.log("....");
    console.log("....");
    console.log("....");
    console.log("....");
    console.log("....");
    // Check db connection
    await checkKnexConnDB();
  }

  async findAll(filter: UserFilter): Promise<User[]> {
    return [];
  }

  async findById(userId: number): Promise<User | null> {
    return null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return null;
  }

  async createUser(data: CreateUser): Promise<User | null> {
    return null;
  }

  async updateUser(userId: number, data: UpdateUser): Promise<User | null> {
    return null;
  }

  async deleteUser(userId: number): Promise<User | null> {
    return null;
  }

  async resetPassword(userId: number, password: string): Promise<User | null> {
    return null;
  }
}

export default UserRepoImpl;
