import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});