import {
  CreateUser,
  MailGateway,
  UpdateUser,
  User,
  UserFilter,
  UserRepo
} from "../domain";
import { hashPasswordSync } from "../utils";

export class UserService {
  private userRepo: UserRepo;
  private mailer: MailGateway;

  constructor(userRepo: UserRepo, mailer: MailGateway) {
    this.userRepo = userRepo;
    this.mailer = mailer;
  }

  async findAllUsers(filter: UserFilter): Promise<User[]> {
    const users = await this.userRepo.findAll(filter);

    return users;
  }

  async findUserById(userId: number): Promise<User | null> {
    const user = await this.userRepo.findById(userId);

    // Check user is exists
    if (!user) throw new Error("User not found!");

    return user;
  }

  async createUser(user: CreateUser): Promise<User | null> {
    // Check email is already exists
    const existingUser = await this.userRepo.findByEmail(user.email);
    if (existingUser) {
      throw new Error(`User email [${user.email}] is already exists`);
    }

    // Hash password
    const hashedPassword = hashPasswordSync(user.password);
    user.password = hashedPassword;

    return await this.userRepo.createUser(user);
  }

  async updateUser(
    userId: number,
    updatedUser: UpdateUser
  ): Promise<User | null> {
    const existingUser = await this.userRepo.findByEmail(updatedUser.email);

    // Check user is exists
    if (!existingUser) throw new Error("User not exists");

    // Check email is already exists
    if (existingUser && existingUser.userId !== userId) {
      throw new Error(`User email [${updatedUser.email}] is already exists`);
    }

    return await this.userRepo.updateUser(userId, updatedUser);
  }

  async deleteUser(userId: number): Promise<User | null> {
    const existingUser = await this.userRepo.findById(userId);

    // Check user is exists
    if (!existingUser) throw new Error("User not exists");

    return await this.userRepo.deleteUser(userId);
  }

  async resetPassword(userId: number, password: string): Promise<User | null> {
    // Check email is already exists
    const existingUser = await this.userRepo.findById(userId);
    if (!existingUser) {
      throw new Error(`User is not exists`);
    }

    // Hash password
    password = hashPasswordSync(password);

    const updatedUser = await this.userRepo.resetPassword(userId, password);

    // Send email with successfully password updated
    this.mailer.sendMail({
      from: "noreply@gmail.com",
      to: updatedUser!.email,
      subject: "Password Reset",
      html: "Successfully your password is reset"
    });

    return updatedUser;
  }
}
