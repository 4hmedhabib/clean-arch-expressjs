import { CreateUser, UpdateUser, User, UserFilter } from "../entities";

export interface UserRepo {
  findAll: (filter: UserFilter) => Promise<User[]>;
  findById: (userId: number) => Promise<User | null>;
  findByEmail: (email: string) => Promise<User | null>;
  createUser: (data: CreateUser) => Promise<User | null>;
  updateUser: (userId: number, data: UpdateUser) => Promise<User | null>;
  deleteUser: (userId: number) => Promise<User | null>;
  resetPassword: (userId: number, password: string) => Promise<User | null>;
}
