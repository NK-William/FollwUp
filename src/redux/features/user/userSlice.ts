import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userKey} from '../../../constants/cacheKeys';
import {IReduxUser} from '../../../interfaces';

const emptyUser: IReduxUser = {
  id: '',
  firstName: '',
  lastName: '',
  emailAddress: '',
  phoneNumber: '',
  accessToken: '',
};

// Async thunk to load user from AsyncStorage
export const loadUser = createAsyncThunk('user/loadUser', async () => {
  try {
    const userData = await AsyncStorage.getItem(userKey);
    if (userData) {
      return JSON.parse(userData);
    }
    return emptyUser; // default if nothing in storage
  } catch (error) {
    console.error('Failed to load user from storage:', error);
    return emptyUser;
  }
});

const options = {
  name: 'user',
  initialState: emptyUser as IReduxUser,
  reducers: {
    setUser: (state: IReduxUser, action: PayloadAction<IReduxUser>) => {
      const newState = {...state, ...action.payload};

      // Save updated state to AsyncStorage
      AsyncStorage.setItem(userKey, JSON.stringify(newState)).catch(error => {
        console.error('Failed to save user to storage:', error);
      });

      return newState;
    },
    signUserOut: (state: IReduxUser) => {
      // Clear user data in state
      const newState = emptyUser;

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
      (state: IReduxUser, action: PayloadAction<IReduxUser>) => {
        return {...state, ...action.payload};
      },
    );
  },
};

export const userSlice = createSlice(options);

export const {setUser, signUserOut} = userSlice.actions;

export default userSlice.reducer;

export const selectUser = (state: {user: IReduxUser}) => state.user;
