import {DiddenAxiosInstance} from '../axios-instance/DiddenAxiosInstance';

export const CategoryApi = {
  // HighCategory List
  getHighCategoryList() {
    return DiddenAxiosInstance.request({
      method: 'GET',
      url: '/tour/api/info/high-code',
    });
  },
  // MiddleCategory List
  getMiddleCategoryList() {
    return DiddenAxiosInstance.request({
      method: 'GET',
      url: '/tour/api/info/middle-code',
    });
  },
};
