import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { FormControl, InputLabel, makeStyles, Select, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';

import { updateParams } from '../store/params.slice'
import { fetchProvincesAction, selectProvinces } from '../store/provinces.slice'
import { fetchReportsByCountryAction, fetchReportsByProvinceAction } from '../store/reports.slice'

const countries = [
  { value: 'USA', label: 'USA' },
];

const periods = [
  { value: 7, label: 'last 7 days' },
  { value: 30, label: 'last 1 month' },
  { value: 1000, label: 'all time' },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(1),
    width: '100%',
  },
}));

export default function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const provinces = useSelector(selectProvinces);
  
  const [state, setState] = React.useState({
    country: 'USA',
    province: undefined,
    period: 7,
  });
  
  useEffect(() => {
    dispatch(fetchProvincesAction());
  }, []);
  
  useEffect(() => {
    dispatch(fetchReportsByCountryAction({country: state.country, period: +state.period}));
  }, [state.country, state.period]);
  
  useEffect(() => {
    dispatch(fetchReportsByProvinceAction({province: state.province, period: +state.period}));
  }, [state.province, state.period]);
  
  useEffect(() => {
    dispatch(updateParams(state));
  }, [state.country, state.period, state.province])
  
  const formik = useFormik({
    initialValues: state,
    onSubmit: () => {
      dispatch(fetchReportsByCountryAction({country: state.country, period: +state.period}));
      dispatch(fetchReportsByProvinceAction({province: state.province, period: +state.period}));
    },
  });
  
  const handleChange = (e, value, name) => {
    const newState = {
      ...state,
      [name]: name === 'period' ? +value : value,
    };
    setState(newState);
    formik.submitForm();
  };
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel htmlFor="country">Country</InputLabel>
          <Select
            id="country"
            label="Country"
            value={state.country}
            onChange={e => handleChange(e, e.target.value, 'country')}
            disabled
            native
          >
            {countries.map(curr => <option key={`country-${curr.value}`} value={curr.value}>{curr.label}</option>)}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} variant="outlined">
          <Autocomplete
            id="state"
            options={provinces}
            getOptionLabel={option => option.label}
            onChange={(e, value) => handleChange(e, value?.value, 'province')}
            renderInput={params => <TextField {...params} label="State" variant="outlined" className={classes.capitalize} />}
          />
        </FormControl>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel htmlFor="country">Period</InputLabel>
          <Select
            id="period"
            label="Period"
            value={state.period}
            onChange={e => handleChange(e, e.target.value, 'period')}
            native
          >
            {periods.map(curr => <option key={`period-${curr.value}`} value={curr.value}>{curr.label}</option>)}
          </Select>
        </FormControl>
      </form>
    </div>
  );
};
