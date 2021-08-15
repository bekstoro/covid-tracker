import React from 'react';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { store } from '../../store';
import Form from '../Form'

let component;

describe('Form component', () => {
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });
  
  it('should render correctly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
  
  it('should have initial state', () => {
  
  });
});
