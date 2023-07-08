import {DiddenAxiosInstance} from '../axios-instance/DiddenAxiosInstance';

export const TourApi = {
  // Tour List
  getTourList(optServiceContentTypeCodes, optServiceHighCodes, optServiceMiddleCodes, keyword) {
    return DiddenAxiosInstance.request({
      method: 'GET',
      url: '/api/v1/tour/search',
      params: {
        optServiceContentTypeCodes,
        optServiceHighCodes,
        optServiceMiddleCodes,
        keyword,
      },
    });
  },
};
