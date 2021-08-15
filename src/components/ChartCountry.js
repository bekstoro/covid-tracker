import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';

import { updateParamsDate, updateParamsTotal } from '../store/params.slice';
import { fetchReportsByCountryAndDateAction, selectReportsByCountry } from '../store/reports.slice';

import CircularProgress from './CircularProgress';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export default function ChartCountry() {
  const dispatch = useDispatch();
  const data = useSelector(selectReportsByCountry);
  const [state, setState] = useState({});
  
  useEffect(() => {
    if (data) {
      const labels = Object.keys(data.cases);
      const cases = Object.values(data.cases);
      const deaths = Object.values(data.deaths);
  
      labels.shift();
      
      const baseCase = cases.shift();
      const baseDeath = deaths.shift();
      
      setState({
        labels,
        datasets: [
          {
            label: 'cases',
            data: cases.map(curr => curr - baseCase || 0),
            backgroundColor: 'rgb(63, 81, 181)',
          },
          {
            label: 'deaths',
            data: deaths.map(curr => curr - baseDeath || 0),
            backgroundColor: 'rgb(231, 53, 90)',
          },
        ],
      })
    }
  }, [data]);
  
  const getElementAtEvent = el => {
    if (!el.length) return;
  
    const { index } = el[0];
    
    const totalCases = state.datasets[0].data[index];
    const totalDeaths = state.datasets[1].data[index];
    const date = state.labels[index];
    
    dispatch(updateParamsDate(date));
    dispatch(updateParamsTotal({ totalCases, totalDeaths }));
    dispatch(fetchReportsByCountryAndDateAction(date));
  };
  
  if (!data) return <CircularProgress />;
  
  return (
    <Bar data={state} options={options} getElementAtEvent={getElementAtEvent} />
  )
};
