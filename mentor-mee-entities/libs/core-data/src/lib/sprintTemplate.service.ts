
import { baseAPI } from './data.conf';
import { SprintTemplate } from '@mentor-mee/core-types';

const getUrl = () => `sprintTemplates`;

const getUrlWithId = (id: string) => `sprintTemplates/${id}`;

const getUrlWithFkId = (fieldName: string, id: string) => `sprintTemplates?${fieldName}=${id}`;

export const sprintTemplatesAPI = baseAPI<SprintTemplate>(getUrl, getUrlWithId, getUrlWithFkId);

export const sprintTemplateAPIBase = {
  getUrl,
  getUrlWithId,
  getUrlWithFkId
}

  