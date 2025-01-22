export type User = {
  userId: number;
  name?: string;
  email: string;
  mobileNo?: string;
  password?: string;
  profile?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export type UserFilter = {
  name?: string;
  mobileNo?: string;
  email?: string;
};

export type CreateUser = {
  name: string;
  mobileNo: string;
  password: string;
  email: string;
  profile?: string;
};

export type UpdateUser = {
  userId: number;
  name: string;
  email: string;
  mobileNo: string;
  profile?: string;
};
