
import { baseAPI } from './data.conf';
import { User } from '@mentor-mee/core-types';

const getUrl = () => `users/`;

const getUrlWithId = (id: string) => `users/${id}`;

export const usersAPI = baseAPI<User>(getUrl, getUrlWithId);
  