
import { baseAPI } from './data.conf';
import { Mentee } from '@mentor-mee/core-types';

const getUrl = () => `mentees/`;

const getUrlWithId = (id: string) => `mentees/${id}`;

export const menteesAPI = baseAPI<Mentee>(getUrl, getUrlWithId);
  