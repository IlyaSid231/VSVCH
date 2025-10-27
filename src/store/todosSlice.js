import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (todoData, { rejectWithValue }) => {
    try {
      if (!todoData.title || todoData.title.length < 3) {
        return rejectWithValue('Заголовок должен быть не менее 3 символов');
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { id: Date.now(), ...todoData, completed: false };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({ id, ...todoData }, { rejectWithValue }) => {
    try {
      if (!todoData.title || todoData.title.length < 3) {
        return rejectWithValue('Заголовок должен быть не менее 3 символов');
      }
      return { id, ...todoData };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    filter: 'all',
    sortBy: 'title',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
    readTodos: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export const { setFilter, setSort, readTodos } = todosSlice.actions;
export default todosSlice.reducer;