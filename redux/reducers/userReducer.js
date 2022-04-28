/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: 'users',

  initialState,

  reducers: {
    joinRequest(state) {
      state.loading = true;
    },

    joinSuccess(state, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
    },

    joinFailure(state, { payload }) {
      state.data = payload;
      state.loading = false;
    },

    loginRequest(state) {
      state.loading = true;
    },

    loginSuccess(state, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
      window.location.href = '/';
    },

    loginFailure(state, { payload }) {
      state.data = payload;
      state.loading = false;
    },

    logoutRequest(state) {
      state.loading = false;
    },

    logoutSuccess(state) {
      state.loading = false;
      localStorage.clear();
      window.location.href = '/';
    },
  },
});

const { reducer, actions } = userSlice;

export const userActions = actions;

export default reducer;
