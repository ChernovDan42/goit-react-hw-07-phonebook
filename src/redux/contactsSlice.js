import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => ({
  ...state,
  isLoading: true,
});
const handleRejected = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](_, action) {
      return {
        contacts: action.payload,
        isLoading: false,
        error: null,
      };
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending](state, action) {
      return { ...state, isLoading: true };
    },
    [addContact.fulfilled](state, action) {
      return {
        isLoading: false,
        error: null,
        contacts: [...state.contacts, action.payload],
      };
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload.id
        ),
        error: null,
        isLoading: false,
      };
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
