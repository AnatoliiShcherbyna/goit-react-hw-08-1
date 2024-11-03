import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const generalApi = axios.create({
    baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeaders = (token) => {
  generalApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
  try {
      const { data } = await generalApi.post('users/signup', credentials);
      setAuthHeaders(data.token);
      return data;
      
  } catch (error) {
      return thunkApi.rejectWithValue(error.message);
  }  
});


export const login = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
  try {
      const { data } = await generalApi.post('users/login', credentials);
      setAuthHeaders(data.token);
      return data;
      
  } catch (error) {
      return thunkApi.rejectWithValue(error.message);
  }  
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
      await generalApi.post('users/logout');      
  } catch (error) {
      return thunkApi.rejectWithValue(error.message);
  }  
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;

  if (!savedToken) {
    return thunkApi.rejectWithValue(error.message);
  }

  setAuthHeaders(savedToken)
  try {
    const { data } = await generalApi.get('users/current');
    return data;
  } catch (error) {
      return thunkApi.rejectWithValue(error.message);
  }  
});
