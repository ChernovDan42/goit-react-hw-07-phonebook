import { ContactForm } from './Contacts/ContactForm/ContactForm';
import { ContactsFilter } from './Contacts/ContactsFilter/ContactsFilter';
import { ContactsList } from './Contacts/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clsx from 'clsx';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={clsx(css.container)}>
      <ContactForm />
      <ContactsFilter />
      <ContactsList />
      <ToastContainer autoClose={2500} />
    </div>
  );
};
