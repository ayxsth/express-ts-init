import NotFoundError from '@/errors/notFound';

import { User } from '@/types/user';

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@email.com'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@email.com'
  },
  {
    id: 3,
    name: 'Jack Doe',
    email: 'jackdoe@email.com'
  },
  {
    id: 4,
    name: 'Jill Doe',
    email: 'jilldoe@email.com'
  }
];

export const get = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

export const find = (id: number) => {
  return new Promise((resolve) => {
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
  return new Promise((resolve) => {
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
