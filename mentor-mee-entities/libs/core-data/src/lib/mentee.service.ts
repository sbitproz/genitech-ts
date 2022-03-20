
import { baseAPI } from './data.conf';
import { Mentee } from '@mentor-mee/core-types';

const getUrl = () => `mentees`;

const getUrlWithId = (id: string) => `mentees/${id}`;

const getUrlWithFkId = (fieldName: string, id: string) => `mentees?${fieldName}=${id}`;

export const menteesAPI = baseAPI<Mentee>(getUrl, getUrlWithId, getUrlWithFkId);

export const menteeAPIBase = {
  getUrl,
  getUrlWithId,
  getUrlWithFkId
}

  