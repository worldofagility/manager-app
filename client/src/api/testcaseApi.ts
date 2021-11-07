import { Checklist, ListResponse, PaginationParams } from 'models';
import axiosClient from './axiosClient';

const checklistApi = {
  getAll(params: PaginationParams): Promise<ListResponse<Checklist>> {
    const url = '/checklists';
    return axiosClient.get(url, { params });
  },
};

export default checklistApi;
