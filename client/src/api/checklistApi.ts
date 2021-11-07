import { Checklist, ListParams, ListResponse } from 'models';
import axiosClient from './axiosClient';

const checklistApi = {
  getAll(params: ListParams): Promise<ListResponse<Checklist>> {
    const url = '/checklists';
    return axiosClient.get(url, { params });
  },
  get(id: String): Promise<Checklist> {
    const url = `/checklists/${id}`;
    return axiosClient.get(url);
  },
  add(data: Checklist): Promise<Checklist> {
    const url = '/checklists';
    return axiosClient.post(url, { data });
  },
  update(data: Checklist): Promise<Checklist> {
    const url = '/checklists';
    return axiosClient.patch(url, { data });
  },
  delete(id: string): Promise<any> {
    const url = `/checklists/${id}`;
    return axiosClient.delete(url);
  },
};

export default checklistApi;
