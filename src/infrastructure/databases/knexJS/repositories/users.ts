import { Knex } from "knex";
import { checkKnexConnDB, knexConn } from "..";
import {
  CreateUser,
  UpdateUser,
  User,
  UserFilter,
  UserRepo
} from "../../../../core";

class UserRepoImpl implements UserRepo {
  private db: Knex = knexConn;

  constructor() {
    this.init();
  }

  private async init() {
    await checkKnexConnDB();
  }

  async findAll(filter: UserFilter): Promise<User[]> {
    let users: User[] = await this.db.select("*").from("users").where(filter);

    // delete password key
    users = users.map((user) => {
      delete user.password;

      return user;
    });

    return users;
  }

  async findById(userId: number): Promise<User | null> {
    const user = await this.db
      .select("*")
      .from("users")
      .where({ userId })
      .first();

    delete user?.password;

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.db
      .select("*")
      .from("users")
      .where({ email })
      .first();

    delete user?.password;

    return user;
  }

  async createUser(data: CreateUser): Promise<User | null> {
    // Logic here...

    return null;
  }

  async updateUser(userId: number, data: UpdateUser): Promise<User | null> {
    // Logic here...

    return null;
  }

  async deleteUser(userId: number): Promise<User | null> {
    // Logic here...

    return null;
  }

  async resetPassword(userId: number, password: string): Promise<User | null> {
    // Logic here...

    return null;
  }
}

export default UserRepoImpl;
