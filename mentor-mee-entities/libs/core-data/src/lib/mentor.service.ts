
import { baseAPI } from './data.conf';
import { Mentor } from '@mentor-mee/core-types';

const getUrl = () => `mentors`;

const getUrlWithId = (id: string) => `mentors/${id}`;

const getUrlWithFkId = (fieldName: string, id: string) => `mentors?${fieldName}=${id}`;

export const mentorsAPI = baseAPI<Mentor>(getUrl, getUrlWithId, getUrlWithFkId);

export const mentorAPIBase = {
  getUrl,
  getUrlWithId,
  getUrlWithFkId
}

  