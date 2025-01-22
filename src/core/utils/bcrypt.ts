import bcrypt from "bcrypt";

export async function hashPasswordAsync(value: string): Promise<string> {
  return await bcrypt.hash(value, 10);
}

export function hashPasswordSync(value: string): string {
  return bcrypt.hashSync(value, 10);
}

export async function comparePasswordAsync(
  password: string,
  hashPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashPassword);
}

export function comparePasswordSync(
  password: string,
  hashPassword: string
): boolean {
  return bcrypt.compareSync(password, hashPassword);
}
