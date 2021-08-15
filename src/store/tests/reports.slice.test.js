import reportsReducer, { fetchReportsByCountryAction, fetchReportsByCountryAndDateAction, fetchReportsByProvinceAction } from '../reports.slice';

describe('reports reducer', () => {
  const initialState = {
    loading: false,
    countryProvinces: [],
    countries: [],
    provinces: [],
  };
  
  const mockError = 'Something went wrong';
  
  const mockData = [{ name: 'USA', someData: {} }];
  
  it('should handle initial state', () => {
    expect(reportsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });
  
  it('should be loading true when fetchReportsByCountryAction is pending', () => {
    const action = { type: fetchReportsByCountryAction.pending.type };
    const actual = reportsReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, loading: true });
  });
  
  it('should return list of provinces when fetchReportsByCountryAction is fulfilled', () => {
    const action = { type: fetchReportsByCountryAction.fulfilled.type, payload: mockData };
    const actual = reportsReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, countries: mockData });
  });

  it('should fail when fetchReportsByCountryAction is rejected', () => {
    const action = { type: fetchReportsByCountryAction.rejected.type, payload: mockError };
    const actual = reportsReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, error: mockError });
  });
  
  it('should be loading true when fetchReportsByCountryAndDateAction is pending', () => {
    const action = { type: fetchReportsByCountryAndDateAction.pending.type };
    const actual = reportsReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, loading: true });
  });
  
  it('should return list of provinces when fetchReportsByCountryAndDateAction is fulfilled', () => {
    const action = { type: fetchReportsByCountryAndDateAction.fulfilled.type, payload: mockData };
    const actual = reportsReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, countryProvinces: mockData });
  });
  
  it('should fail when fetchReportsByCountryAndDateAction is rejected', () => {
    const action = { type: fetchReportsByCountryAndDateAction.rejected.type, payload: mockError };
    const actual = reportsReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, error: mockError });
  });
  
  it('should be loading true when fetchReportsByProvinceAction is pending', () => {
    const action = { type: fetchReportsByProvinceAction.pending.type };
    const actual = reportsReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, loading: true });
  });
  
  it('should return list of provinces when fetchReportsByProvinceAction is fulfilled', () => {
    const action = { type: fetchReportsByProvinceAction.fulfilled.type, payload: mockData };
    const actual = reportsReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, provinces: mockData });
  });
  
  it('should fail when fetchReportsByProvinceAction is rejected', () => {
    const action = { type: fetchReportsByProvinceAction.rejected.type, payload: mockError };
    const actual = reportsReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, error: mockError });
  });
});
