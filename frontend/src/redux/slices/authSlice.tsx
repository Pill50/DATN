import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../types/user';
import { LoginType, RegisterType } from '../../types/auth';
import { Response } from '../../types/response';
import { AuthApis } from '@/apis';
import Cookies from 'js-cookie';

type AuthSlice = {
  user: UserType;
  isLogin: boolean;
  isLoading: boolean;
  error: string;
  success: string;
};

export const register = createAsyncThunk<Response<null>, RegisterType, { rejectValue: Response<null> }>(
  'auth/register',
  async (body, ThunkAPI) => {
    try {
      const response = await AuthApis.register(body);
      return response.data as Response<null>;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.data as Response<null>);
    }
  },
);

export const login = createAsyncThunk<Response<null>, LoginType, { rejectValue: Response<null> }>(
  'api/login',
  async (body, ThunkAPI) => {
    console.log('HAHA:');
    try {
      const response = await AuthApis.login(body);
      return response.data as Response<null>;
    } catch (error: any) {
      return ThunkAPI.rejectWithValue(error.data as Response<null>);
    }
  },
);

export const getMe = () => async (dispatch: any) => {
  try {
    const response = await AuthApis.getMe();

    if (response) {
      if (response.status >= 200 && response.status <= 299) {
        dispatch(setUsers(response.data.data));
      } else {
        window.location.href = '/login';
      }
    }
  } catch (error: any) {}
};

export const logout = () => async (dispatch: any) => {
  dispatch(
    setUsers({
      email: '',
      address: '',
      password: '',
      key: '',
    }),
  );
  dispatch(setLogout());
};

const initialState: AuthSlice = {
  user: {
    email: '',
    address: '',
    password: '',
    key: '',
  },
  isLogin: false,
  isLoading: false,
  error: '',
  success: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserType>) => {
      state.user.email = action.payload.email;
      state.user.address = action.payload.address;
      state.user.password = action.payload.password;
      state.user.key = action.payload.key;
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    // register
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
    });

    // login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      Cookies.set('accessToken', action.payload.data?.accessToken as string);
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setUsers, setLogout } = authSlice.actions;

export default authSlice.reducer;
