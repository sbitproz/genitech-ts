
import { baseAPI } from './data.conf';
import { Sprint } from '@mentor-mee/core-types';

const getUrl = () => `sprints`;

const getUrlWithId = (id: string) => `sprints/${id}`;

const getUrlWithFkId = (fieldName: string, id: string) => `sprints?${fieldName}=${id}`;

export const sprintsAPI = baseAPI<Sprint>(getUrl, getUrlWithId, getUrlWithFkId);

export const sprintAPIBase = {
  getUrl,
  getUrlWithId,
  getUrlWithFkId
}

  