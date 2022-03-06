
import { baseAPI } from './data.conf';
import { Sprint } from '@mentor-mee/core-types';

const getUrl = () => `sprints/`;

const getUrlWithId = (id: string) => `sprints/${id}`;

export const sprintsAPI = baseAPI<Sprint>(getUrl, getUrlWithId);
  