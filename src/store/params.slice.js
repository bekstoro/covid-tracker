import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  country: '',
  date: '',
  period: 0,
  province: '',
  totalCases: 0,
  totalDeaths: 0,
};

export const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    update: (state, action) => {
      const {country, period, province} = action.payload;
      state.country = country;
      state.date = '';
      state.period = period;
      state.province = province;
      state.totalCases = 0;
      state.totalDeaths = 0;
    },
    updateDate: (state, action) => {
      state.date = action.payload;
    },
    updateTotal: (state, action) => {
      state.totalCases = action.payload.totalCases;
      state.totalDeaths = action.payload.totalDeaths;
    },
  },
});

export const { update: updateParams, updateDate: updateParamsDate, updateTotal: updateParamsTotal } = paramsSlice.actions;

export const selectParams = (state) => state.params;

export default paramsSlice.reducer;
