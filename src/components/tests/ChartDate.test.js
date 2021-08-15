import React from 'react';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { store } from '../../store';
import ChartDate from '../ChartDate';

let component;

describe('ChartDate component', () => {
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <ChartDate />
      </Provider>
    );
  });
  
  it('should render correctly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
});
