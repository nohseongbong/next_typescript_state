import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";

export type User = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
};

export interface UserListResType {
  users: User[];
}

const userList = (req: NextApiRequest, res: NextApiResponse<UserListResType>) => {
  const createRandomUser = (): User => {
    const user: User = {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
    return user;
  };

  const USERS: User[] = faker.helpers.multiple(createRandomUser, {
    count: 5,
  });
  const data = {
    users: USERS,
  };
  res.status(200).json(data);
};

export default userList;
