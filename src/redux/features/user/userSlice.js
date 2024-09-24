import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Async thunk to load user from AsyncStorage
export const loadUser = createAsyncThunk('user/loadUser', async () => {
  try {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      return JSON.parse(userData);
    }
    return {email: '', accessTokenKey: ''}; // default if nothing in storage
  } catch (error) {
    console.error('Failed to load user from storage:', error);
    return {email: '', accessTokenKey: ''};
  }
});

const options = {
  name: 'user',
  initialState: {email: '', accessTokenKey: ''},
  reducers: {
    setUser: (state, action) => {
      const newState = {...state, ...action.payload};

      // Save updated state to AsyncStorage
      AsyncStorage.setItem('user', JSON.stringify(newState)).catch(error => {
        console.error('Failed to save user to storage:', error);
      });

      return newState;
    },
  },
  extraReducers: builder => {
    // Handle loading user from AsyncStorage
    builder.addCase(loadUser.fulfilled, (state, action) => {
      return {...state, ...action.payload};
    });
  },
};

export const userSlice = createSlice(options);

export const {setUser} = userSlice.actions;

export default userSlice.reducer;

export const selectUser = state => state.user;

// Usage
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { loadUser } from './path_to_slice';

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(loadUser());
//   }, [dispatch]);

//   return (
//     // Your app content
//   );
// };

// export default App;
