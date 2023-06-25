import {DiddenAxiosInstance} from '../axios-instance/DiddenAxiosInstance';

export const TourApi = {
  // Tour List
  getTourList(cat1, cat2, cat3, keyword) {
    return DiddenAxiosInstance.request({
      method: 'GET',
      url: '/api/v1/tour/search',
      params: {
        cat1,
        cat2,
        cat3,
        keyword,
      },
    });
  },
};
