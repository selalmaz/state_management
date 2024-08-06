import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';


// store u init ediyorz ve counterReduceri ekliyoruz
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


// RootState ve AppDispatch türlerini tanımlama
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
