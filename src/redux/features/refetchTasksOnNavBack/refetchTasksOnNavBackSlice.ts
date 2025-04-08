import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const options = {
  name: 'refetchTasksOnNavBack',
  initialState: false,
  reducers: {
    setRefetchTasksOnNavBack: (
      state: boolean,
      action: PayloadAction<boolean>,
    ) => {
      return action.payload;
    },
  },
};

export const refetchTasksOnNavBackSlice = createSlice(options);

export const {setRefetchTasksOnNavBack} = refetchTasksOnNavBackSlice.actions;

export default refetchTasksOnNavBackSlice.reducer;

export const selectRefetchTasksOnNavBack = (state: {
  refetchTasksOnNavBack: boolean;
}) => state.refetchTasksOnNavBack;
