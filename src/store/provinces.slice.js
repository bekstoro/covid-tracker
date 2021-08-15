import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchProvinces } from '../api/provinces.api'

// actions
export const fetchProvincesAction = createAsyncThunk(
  'provinces/fetch',
  async () => {
    return fetchProvinces();
  }
);

// reducer
const initialState = {
  error: undefined,
  loading: false,
  provinces: [],
};
export const provincesSlice = createSlice({
  name: 'provinces',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProvincesAction.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProvincesAction.fulfilled, (state, action) => {
        state.loading = false;
        state.provinces = action.payload?.map(curr => ({ label: curr, value: curr }));
      })
      .addCase(fetchProvincesAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// selectors
export const selectProvinces = state => state.provinces.provinces;

export default provincesSlice.reducer;
