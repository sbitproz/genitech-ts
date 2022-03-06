
import { baseAPI } from './data.conf';
import { Mentor } from '@mentor-mee/core-types';

const getUrl = () => `mentors/`;

const getUrlWithId = (id: string) => `mentors/${id}`;

export const mentorsAPI = baseAPI<Mentor>(getUrl, getUrlWithId);
  