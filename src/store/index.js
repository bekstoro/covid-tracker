import { configureStore } from '@reduxjs/toolkit';

import paramsReducer from './params.slice';
import provincesReducer from './provinces.slice';
import reportsReducer from './reports.slice';

export const index = configureStore({
  reducer: {
    params: paramsReducer,
    provinces: provincesReducer,
    reports: reportsReducer,
  },
});
