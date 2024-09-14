import { createSlice } from '@reduxjs/toolkit';
import { deleteContacts, fetchContacts } from './contacts/contactsOperations';

const handlePending = state => {
  state.isLoading = true;
  state.isError = false;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = false;
  state.items = action.payload;
};

/* const handleAddFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = false;
  state.items.push(action.payload);
}; */

const handleDeleteFulfilled = (state, action) => {
  state.items.filter(item => item.id !== action.payload);
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, () => {})
      .addCase(deleteContacts.fulfilled, handleDeleteFulfilled)
      .addCase(deleteContacts.rejected, handleRejected),
});

// export const { fetchInProgress, fetchSuccess, fetchError } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

/* [addTasks.pending](state) {
    state.isLoading = true;
  },
  [addTasks.fulfilled](state, action) {
    state.isLoading = false;
    state.isError = false;
    state.items.push(action.payload);
  },
  [addTasks.rejected](state, action) {
    state.isLoading = false;
    state.isError = action.payload;
  },

  [deleteTasks.pending](state) {
    state.isLoading = true;
  },
  [deleteTasks.fulfilled](state, action) {
    state.isLoading = false;
    state.isError = false;
    const index = state.items.findIndex(
      contact => contact.id === action.payload
    );
    state.items.splice(index, 1);
  },
  [deleteTasks.rejected](state, action) {
    state.isLoading = false;
    state.isError = action.payload;
  }, */

// extraReducers: builder => builder,
/* .addCase(selectContacts.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(selectContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.items = action.payload;
      })
      .addCase(selectContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteTasks.pending, () => {})
      .addCase(deleteTasks.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteTasks.rejected, () => {}), */
/* [addTasks.pending](state) {
    state.isLoading = true;
  },
  [addTasks.fulfilled](state, action) {
    state.isLoading = false;
    state.isError = false;
    state.items.push(action.payload);
  },
  [addTasks.rejected](state, action) {
    state.isLoading = false;
    state.isError = action.payload;
  },

  [deleteTasks.pending](state) {
    state.isLoading = true;
  },
  [deleteTasks.fulfilled](state, action) {
    state.isLoading = false;
    state.isError = false;
    const index = state.items.findIndex(
      contact => contact.id === action.payload
    );
    state.items.splice(index, 1);
  },
  [deleteTasks.rejected](state, action) {
    state.isLoading = false;
    state.isError = action.payload;
  }, */
