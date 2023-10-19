import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import authSlice from './slices/authSlice';

const store: ToolkitStore = configureStore({
  reducer: {
    authSlice: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
