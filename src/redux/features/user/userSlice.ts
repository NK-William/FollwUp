import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userKey} from '../../../constants/cacheKeys';
import {IUser} from '../../../interfaces';

// Async thunk to load user from AsyncStorage
export const loadUser = createAsyncThunk('user/loadUser', async () => {
  try {
    console.log('Loading user from storage');
    const userData = await AsyncStorage.getItem(userKey);
    if (userData) {
      return JSON.parse(userData);
    }
    return {email: '', accessToken: ''}; // default if nothing in storage
  } catch (error) {
    console.error('Failed to load user from storage:', error);
    return {email: '', accessToken: ''};
  }
});

const options = {
  name: 'user',
  initialState: {email: '', accessToken: ''} as IUser,
  reducers: {
    setUser: (state: IUser, action: PayloadAction<IUser>) => {
      const newState = {...state, ...action.payload};

      // Save updated state to AsyncStorage
      AsyncStorage.setItem(userKey, JSON.stringify(newState)).catch(error => {
        console.error('Failed to save user to storage:', error);
      });

      return newState;
    },
    signUserOut: (state: IUser) => {
      // Clear user data in state
      console.log('Signing user out');
      const newState = {email: '', accessToken: ''};

      // Remove user data from AsyncStorage
      AsyncStorage.removeItem(userKey).catch(error => {
        console.error('Failed to remove user from storage:', error);
      });

      return newState;
    },
  },
  extraReducers: (builder: any) => {
    // Handle loading user from AsyncStorage
    builder.addCase(
      loadUser.fulfilled,
      (state: IUser, action: PayloadAction<IUser>) => {
        return {...state, ...action.payload};
      },
    );
  },
};

export const userSlice = createSlice(options);

export const {setUser, signUserOut} = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: {user: IUser}) => state.user;
