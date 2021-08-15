import React from 'react';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { store } from '../../store';
import ChartCountry from '../ChartCountry';

let component;

describe('ChartCountry component', () => {
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <ChartCountry />
      </Provider>
    );
  });
  
  it('should render correctly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});
