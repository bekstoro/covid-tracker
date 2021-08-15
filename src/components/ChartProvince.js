import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { selectReportsByProvince } from '../store/reports.slice';

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

export default function ChartProvince() {
  const data = useSelector(selectReportsByProvince);
  const [state, setState] = useState({});
  
  useEffect(() => {
    if (data?.length) {
      const formattedData = data.reduce((acc, curr) => {
        const labels = Object.keys(curr.timeline.cases);
        const cases = Object.values(curr.timeline.cases);
        const deaths = Object.values(curr.timeline.deaths);
  
        labels.shift();

        const baseCase = cases.shift();
        const baseDeath = deaths.shift();
        
        const newCases = cases.map(curr => curr - baseCase || 0);
        const newDeaths = deaths.map(curr => curr - baseDeath || 0);
        
        labels.forEach((curr, currIndex) => {
          acc.cases[curr] = acc.cases[curr] ? acc.cases[curr] + newCases[currIndex] : newCases[currIndex];
          acc.deaths[curr] = acc.deaths[curr] ? acc.deaths[curr] + newDeaths[currIndex] : newDeaths[currIndex];
        });
        
        return acc;
      }, { cases: {}, deaths: {} });
  
      const formattedLabels = Object.keys(formattedData.cases);
      const formattedCases = Object.values(formattedData.cases);
      const formattedDeaths = Object.values(formattedData.deaths);
      
      setState({
        labels: formattedLabels,
        datasets: [
          {
            label: 'cases',
            data: formattedCases,
            backgroundColor: 'rgb(63, 81, 181)',
          },
          {
            label: 'deaths',
            data: formattedDeaths,
            backgroundColor: 'rgb(231, 53, 90)',
          },
        ],
      })
    }
  }, [data]);
  
  if (!data) return <CircularProgress />;
  
  return (
    <Bar data={state} options={options} />
  )
};
