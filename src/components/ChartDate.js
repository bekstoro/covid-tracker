import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { selectReportsByCountryAndDate } from '../store/reports.slice';

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

export default function ChartDate() {
  const data = useSelector(selectReportsByCountryAndDate);
  const [state, setState] = useState({});
  
  useEffect(() => {
    if (data) {
      const labels = Object.keys(data);
      const {cases, deaths} = Object.values(data).reduce((acc, curr) => ({
        cases: acc.cases.concat(curr.cases),
        deaths: acc.deaths.concat(curr.deaths),
      }), { cases: [], deaths: [] });
  
      setState({
        labels,
        datasets: [
          {
            label: 'cases',
            data: cases,
            backgroundColor: 'rgb(63, 81, 181)',
          },
          {
            label: 'deaths',
            data: deaths,
            backgroundColor: 'rgb(231, 53, 90)',
          },
        ],
      })
    }
  }, [data]);
  
  if (!data) return <CircularProgress />;
  
  return (
    <Bar data={state} options={options} />
  );
};
