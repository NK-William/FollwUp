import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';

const reducer = {
  user: userReducer,
};

export const store = configureStore({reducer});
