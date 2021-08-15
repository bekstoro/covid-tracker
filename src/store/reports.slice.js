import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchReportsByCountry, fetchReportsByCountryAndDate, fetchReportsByProvince } from '../api/reports.api';

// actions
export const fetchReportsByCountryAction = createAsyncThunk(
  'reports/fetchByCountry',
  async ({ country, period }) => {
    return fetchReportsByCountry(country, period);
  },
);

export const fetchReportsByCountryAndDateAction = createAsyncThunk(
  'reports/fetchByCountryAndDate',
  async ({ country, period }) => {
    return fetchReportsByCountryAndDate(country, period);
  },
);

export const fetchReportsByProvinceAction = createAsyncThunk(
  'reports/fetchByProvince',
  async ({ province, period }) => {
    return fetchReportsByProvince(province, period);
  },
);

// reducer
const initialState = {
  loading: false,
  countryProvinces: [],
  countries: [],
  provinces: [],
};
export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchReportsByCountryAction.pending, state => {
        state.loading = true;
      })
      .addCase(fetchReportsByCountryAction.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchReportsByCountryAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchReportsByCountryAndDateAction.pending, state => {
        state.loading = true;
      })
      .addCase(fetchReportsByCountryAndDateAction.fulfilled, (state, action) => {
        state.loading = false;
        state.countryProvinces = action.payload;
      })
      .addCase(fetchReportsByCountryAndDateAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchReportsByProvinceAction.pending, state => {
        state.loading = true;
      })
      .addCase(fetchReportsByProvinceAction.fulfilled, (state, action) => {
        state.loading = false;
        state.provinces = action.payload;
      })
      .addCase(fetchReportsByProvinceAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// selectors
export const selectLoading = state => state.reports.loading;

export const selectReportsByCountry = state => state.reports.countries.timeline;

export const selectReportsByCountryAndDate = state => state.reports.countryProvinces.states;

export const selectReportsByProvince = state => state.reports.provinces;

export default reportsSlice.reducer;
