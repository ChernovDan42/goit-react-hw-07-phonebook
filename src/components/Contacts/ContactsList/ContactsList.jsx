import { useSelector } from 'react-redux';
import { getContacts, getFilterValue, getIsLoading } from 'redux/selectors';
import { ContactItem } from './ContactItem';
import { useMemo } from 'react';

import css from './css/ContactsList.module.css';
import { Loader } from 'components/helpers/Loader/Loader';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const IsLoading = useSelector(getIsLoading);

  const visibleContacts = useMemo(() => {
    const normalized = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  }, [contacts, filterValue]);

  return (
    <ul className={css.list}>
      <ContactItem contacts={visibleContacts} />
      {IsLoading && <Loader />}
    </ul>
  );
};
