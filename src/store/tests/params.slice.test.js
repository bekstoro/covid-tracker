import paramsReducer, { updateParams, updateParamsDate, updateParamsTotal } from '../params.slice';

describe('params reducer', () => {
  const initialState = {
    country: '',
    date: '',
    period: 0,
    province: '',
    totalCases: 0,
    totalDeaths: 0,
  };
  
  const mockParams = { country: 'USA', province: '', period: 7 };
  
  const mockParamsDate = '01/01/2021';
  
  const mockParamsTotal = { totalCases: 100, totalDeaths: 0 };
  
  it('should handle initial state', () => {
    expect(paramsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });
  
  it('should handle params updating', () => {
    const actual = paramsReducer(initialState, updateParams(mockParams));
    expect(actual).toEqual({ ...initialState, ...mockParams });
  });
  
  it('should handle date updating', () => {
    const actual = paramsReducer(initialState, updateParamsDate(mockParamsDate));
    expect(actual).toEqual({ ...initialState, date: mockParamsDate });
  });
  
  it('should handle total updating', () => {
    const actual = paramsReducer(initialState, updateParamsTotal(mockParamsTotal));
    expect(actual).toEqual({ ...initialState, ...mockParamsTotal });
  });
});
