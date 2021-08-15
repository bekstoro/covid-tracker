import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { updateParamsDate } from '../store/params.slice';

import ChartCountry from './ChartCountry';
import ChartDate from './ChartDate';
import ChartProvince from './ChartProvince';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Chart({ params }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  if (params.date) {
    return (
      <>
        <Title>
          <IconButton color="primary" className={classes.icon} onClick={() => dispatch(updateParamsDate(''))}>
            <ArrowBackIcon/>
          </IconButton>
          Results for {params.date} with total {params.totalCases} cases ({params.totalDeaths} deaths)
        </Title>
        <ChartDate/>
      </>
    );
  }
  
  return (
    <>
      <Title>Results</Title>
      {params.province ? <ChartProvince/> : <ChartCountry/>}
    </>
  );
}

Chart.propTypes = {
  params: PropTypes.shape({
    country: PropTypes.string,
    date: PropTypes.string,
    period: PropTypes.number,
    province: PropTypes.string,
    totalCases: PropTypes.number,
    totalDeaths: PropTypes.number,
  }),
};
