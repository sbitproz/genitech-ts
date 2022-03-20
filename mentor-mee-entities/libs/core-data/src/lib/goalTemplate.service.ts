
import { baseAPI } from './data.conf';
import { GoalTemplate } from '@mentor-mee/core-types';

const getUrl = () => `goalTemplates`;

const getUrlWithId = (id: string) => `goalTemplates/${id}`;

const getUrlWithFkId = (fieldName: string, id: string) => `goalTemplates?${fieldName}=${id}`;

export const goalTemplatesAPI = baseAPI<GoalTemplate>(getUrl, getUrlWithId, getUrlWithFkId);

export const goalTemplateAPIBase = {
  getUrl,
  getUrlWithId,
  getUrlWithFkId
}

  