import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Counter state'inin yapısını tanımlıyoruz
interface CounterState {
  value: number;
}
// İlk durumu tanımlıyoruz
const initialState: CounterState = {
  value: 0,
};


// Counter slice'ını oluşturuyoruz
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => { 
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
