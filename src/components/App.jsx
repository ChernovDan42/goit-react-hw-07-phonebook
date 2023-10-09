import { ContactForm } from './Contacts/ContactForm/ContactForm';
import { ContactsFilter } from './Contacts/ContactsFilter/ContactsFilter';
import { ContactsList } from './Contacts/ContactsList/ContactsList';
import clsx from 'clsx';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={clsx(css.container)}>
      <ContactForm />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};
