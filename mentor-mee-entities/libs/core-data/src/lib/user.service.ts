
import { baseAPI } from './data.conf';
import { User } from '@mentor-mee/core-types';

const getUrl = () => `users`;

const getUrlWithId = (id: string) => `users/${id}`;

const getUrlWithFkId = (fieldName: string, id: string) => `users?${fieldName}=${id}`;

export const usersAPI = baseAPI<User>(getUrl, getUrlWithId, getUrlWithFkId);

export const userAPIBase = {
  getUrl,
  getUrlWithId,
  getUrlWithFkId
}

  