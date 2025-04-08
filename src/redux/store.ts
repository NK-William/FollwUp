import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import refetchTasksOnNavBackReducer from './features/refetchTasksOnNavBack/refetchTasksOnNavBackSlice';

const reducer = {
  user: userReducer,
  refetchTasksOnNavBack: refetchTasksOnNavBackReducer, // TODO: Not consistent when using the value - code 1
};

export const store = configureStore({reducer});
