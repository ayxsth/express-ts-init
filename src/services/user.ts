import { User } from '@/types/user';

import { users } from '@/constants/user';

import NotFoundError from '@/errors/notFound';

export const get = () => {
  return new Promise<User[]>((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

export const find = (id: number) => {
  return new Promise<User | undefined>((resolve) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);

      resolve(user);
    }, 1000);
  });
};

export const findOrFail = async (id: number) => {
  const user = await find(id);

  if (!user) {
    throw new NotFoundError(`User not found with id: ${id}.`);
  }

  return user;
};

export const findBy = (field: keyof User, value: string | number) => {
  return new Promise<User | undefined>((resolve) => {
    setTimeout(() => {
      const user = users.find((user) => user[field] === value);

      resolve(user);
    }, 1000);
  });
};

export const findByOrFail = async (field: keyof User, value: string | number) => {
  const user = await findBy(field, value);

  if (!user) {
    throw new NotFoundError(`User not found with ${field}: ${value}.`);
  }

  return user;
};
