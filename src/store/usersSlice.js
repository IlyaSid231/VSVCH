import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createUser = createAsyncThunk(
  'users/createUser',
  async (userData, { rejectWithValue }) => {
    try {
      if (!userData.name || userData.name.length < 2) {
        return rejectWithValue('Имя должно быть не менее 2 символов');
      }
      if (!userData.email || !userData.email.includes('@')) {
        return rejectWithValue('Неверный email');
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { id: Date.now(), ...userData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, ...userData }, { rejectWithValue }) => {
    try {
      if (!userData.name || userData.name.length < 2) {
        return rejectWithValue('Имя должно быть не менее 2 символов');
      }
      return { id, ...userData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    filter: 'all',
    sortBy: 'name',
  },
  reducers: {
    setUserFilter: (state, action) => {
      state.filter = action.payload;
    },
    setUserSort: (state, action) => {
      state.sortBy = action.payload;
    },
    readUsers: (state, action) => {
      state.items = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export const { setUserFilter, setUserSort, readUsers, resetError } = usersSlice.actions;
export default usersSlice.reducer;