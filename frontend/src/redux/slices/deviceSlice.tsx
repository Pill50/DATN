import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Response } from '../../types/response';
import { DeviceApis } from '@/apis';
import { AddLine, DeviceCardList, RemoveLine } from '@/types/device';

type DeviceSlice = {
  devicesList: DeviceCardList;

  isLogin: boolean;
  isLoading: boolean;
  error: string;
  success: string;
};

export const getAllWaterMeter = createAsyncThunk<Response<DeviceCardList>, null, { rejectValue: Response<null> }>(
  '/water-meter/list',
  async (body, ThunkAPI) => {
    try {
      const response = await DeviceApis.getAllWaterMeter();

      const responseData: Response<DeviceCardList> = {
        data: response.data,
        statusCode: response.status,
      };
      return responseData;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.data as Response<null>);
    }
  },
);

export const addLine = createAsyncThunk<Response<null>, AddLine, { rejectValue: Response<null> }>(
  '/water-meter/add-line',
  async (body, ThunkAPI) => {
    try {
      const response = await DeviceApis.addLine(body);

      const responseData: Response<null> = {
        data: response.data,
        statusCode: response.status,
      };
      return responseData;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.data as Response<null>);
    }
  },
);

export const removeLine = createAsyncThunk<Response<null>, RemoveLine, { rejectValue: Response<null> }>(
  '/water-meter/delete-line',
  async (body, ThunkAPI) => {
    try {
      const response = await DeviceApis.deleteLine(body);

      const responseData: Response<null> = {
        data: response.data,
        statusCode: response.status,
      };
      return responseData;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.data as Response<null>);
    }
  },
);

const initialState: DeviceSlice = {
  devicesList: {
    totalWaterMeters: 0,
    totalPulse: 0,
    totalDigital: 0,
    statusActive: 0,
  },

  isLogin: false,
  isLoading: false,
  error: '',
  success: '',
};

export const deviceSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getAllWaterMeter
    builder.addCase(getAllWaterMeter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllWaterMeter.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getAllWaterMeter.rejected, (state) => {
      state.isLoading = false;
    });
    // addLine
    builder.addCase(getAllWaterMeter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllWaterMeter.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getAllWaterMeter.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {} = deviceSlice.actions;

export default deviceSlice.reducer;
