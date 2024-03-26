import { User } from './types';

export const checkUserFullfilled = (user: User) => {
  return user.firstName && user.lastName && user.userName;
};
