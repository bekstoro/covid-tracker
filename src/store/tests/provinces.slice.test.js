import provincesReducer, { fetchProvincesAction } from '../provinces.slice';

describe('provinces reducer', () => {
  const initialState = {
    error: undefined,
    loading: false,
    provinces: [],
  };
  
  const mockError = 'Something went wrong';
  
  const mockProvinces = ['alabama', 'alaska', 'arizona'];
  
  it('should handle initial state', () => {
    expect(provincesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });
  
  it('should be loading true when fetchProvincesAction is pending', () => {
    const action = { type: fetchProvincesAction.pending.type };
    const actual = provincesReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, loading: true });
  });
  
  it('should return list of provinces when fetchProvincesAction is fulfilled', () => {
    const action = { type: fetchProvincesAction.fulfilled.type, payload: mockProvinces };
    const actual = provincesReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, provinces: mockProvinces.map(curr => ({ label: curr, value: curr })) });
  });

  it('should fail when fetchProvincesAction is rejected', () => {
    const action = { type: fetchProvincesAction.rejected.type, payload: mockError };
    const actual = provincesReducer(initialState, action);
    expect(actual).toEqual({ ...initialState, error: mockError });
  });
});
