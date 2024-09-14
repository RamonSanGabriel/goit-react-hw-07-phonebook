import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './operations/contacts/contactsSlice';
import { filterReducer } from './operations/filter/filterSlice';
import { tasksReducer } from './operations/tasksSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    task: tasksReducer,
  },
});
