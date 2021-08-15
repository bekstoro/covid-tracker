import React from 'react';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { store } from '../../store';
import Chart from '../Chart';

let component;
const mockProps = {
  params: {
    country: 'USA',
    date: '',
    period: 7,
    province: '',
    totalCases: 0,
    totalDeaths: 0,
  }
}

describe('Chart component', () => {
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Chart {...mockProps} />
      </Provider>
    );
  });
  
  it('should render correctly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});
