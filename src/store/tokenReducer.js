import {createSlice} from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    login_id: '',
    token_acc: '',
    token_ref: '',
    kakao_token_acc: '',
    kakao_token_ref: '',
    kakao_user_email: '',
    naver_token_acc: '',
    naver_token_ref: '',
    naver_user_email: '',
  },
  reducers: {
    setInit: state => {
      state.login_id = '';
      state.token_acc = '';
      state.token_ref = '';
      state.kakao_token_acc = '';
      state.kakao_token_ref = '';
      state.kakao_user_email = '';
      state.naver_token_acc = '';
      state.naver_token_ref = '';
      state.naver_user_email = '';
    },
    setLoginId: (state, action) => {
      state.login_id = action.payload;
    },
    setTokenAcc: (state, action) => {
      state.token_acc = action.payload;
    },
    setTokenRef: (state, action) => {
      state.token_ref = action.payload;
    },
    setKakaoTokenAcc: (state, action) => {
      state.kakao_token_acc = action.payload;
    },
    setKakaoTokenRef: (state, action) => {
      state.kakao_token_ref = action.payload;
    },
    setKakaoUserEmail: (state, action) => {
      state.kakao_user_email = action.payload;
    },
    setNaverTokenAcc: (state, action) => {
      state.naver_token_acc = action.payload;
    },
    setNaverTokenRef: (state, action) => {
      state.naver_token_ref = action.payload;
    },
    setNaverUserEmail: (state, action) => {
      state.naver_user_email = action.payload;
    },
  },
});

export const {
  setInit,
  setLoginId,
  setTokenAcc,
  setTokenRef,
  setKakaoTokenAcc,
  setKakaoTokenRef,
  setKakaoUserEmail,
  setNaverTokenAcc,
  setNaverTokenRef,
  setNaverUserEmail,
} = tokenSlice.actions;
export default tokenSlice.reducer;
export const selectLoginId = state => state.token.login_id;
export const selectTokenAcc = state => state.token.token_acc;
export const selectTokenRef = state => state.token.token_ref;
export const selectKakaoTokenAcc = state => state.token.kakao_token_acc;
export const selectKakaoTokenRef = state => state.token.kakao_token_ref;
export const selectKakaoUserEmail = state => state.token.kakao_user_email;
export const selectNaverTokenAcc = state => state.token.naver_token_acc;
export const selectNaverTokenRef = state => state.token.naver_token_ref;
export const selectNaverUserEmail = state => state.token.naver_user_email;