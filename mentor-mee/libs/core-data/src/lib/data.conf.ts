
import axios, { AxiosResponse } from 'axios';

const BASE_URL = {
  dev: "http://localhost:3004/",
  prod: "mentor-mee",
}

export interface BaseEntity {
  id: string;
}

const api = axios.create({
  baseURL: BASE_URL.dev,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

const unwrapData = (response: AxiosResponse) => response.data

const load = <T>(getUrl: Function) => () => api.get<T>(`${getUrl()}`).then(unwrapData) as Promise<T[]>

const find = <T>(getUrlWithId: Function) => (id: string) => api.get<T>(`${getUrlWithId(id)}`).then(unwrapData) as Promise<T>

const create = <T>(getUrl: Function) => (entity: BaseEntity) => api.post<T>(`${getUrl()}`, entity).then(unwrapData) as Promise<T>

const update = <T>(getUrlWithId: Function) => (entity: BaseEntity) => api.patch<T>(`${getUrlWithId(entity.id)}`, entity).then(unwrapData) as Promise<T>

const remove = <T>(getUrlWithId: Function) => (id: string) => api.delete<T>(`${getUrlWithId(id)}`).then(unwrapData) as Promise<T>

export const baseAPI = <T>(getUrl: Function, getUrlWithId: Function) => ({
  load: load<T>(getUrl),
  find: find<T>(getUrlWithId),
  create: create<T>(getUrl),
  update: update<T>(getUrlWithId),
  remove: remove<T>(getUrlWithId)
}) 

