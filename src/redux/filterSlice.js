import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    filterChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterChange } = filterSlice.actions;

export default filterSlice.reducer;
