import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: [],
};

const searchName = (state, obj) => {
  return state.contacts.find(
    contact => contact.name.toLowerCase() === obj.name.toLowerCase()
  );
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (searchName(state, action.payload)) {
          return alert(`${action.payload.name} is already in contacts`);
        }
        // state.contacts.push(action.payload);
        return { contacts: [...state.contacts, action.payload] };
      },
      prepare(obj) {
        return {
          payload: {
            name: obj.name,
            number: obj.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      // state.contacts = state.contacts.filter(
      //   contact => contact.id !== action.payload
      // );

      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
