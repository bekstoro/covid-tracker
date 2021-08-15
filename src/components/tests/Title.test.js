import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Title from '../Title'

let component;

describe('Title component', () => {
  beforeEach(() => {
    component = render(<Title>Test</Title>);
  });
  
  it('should render correctly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });
  
  it('should have title text', () => {
    expect(component.getByText(/Test/i)).toBeInTheDocument();
  });
});
