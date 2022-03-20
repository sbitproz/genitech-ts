
import { baseAPI } from './data.conf';
import { Goal } from '@mentor-mee/core-types';

const getUrl = () => `goals`;

const getUrlWithId = (id: string) => `goals/${id}`;

const getUrlWithFkId = (fieldName: string, id: string) => `goals?${fieldName}=${id}`;

export const goalsAPI = baseAPI<Goal>(getUrl, getUrlWithId, getUrlWithFkId);

export const goalAPIBase = {
  getUrl,
  getUrlWithId,
  getUrlWithFkId
}

  