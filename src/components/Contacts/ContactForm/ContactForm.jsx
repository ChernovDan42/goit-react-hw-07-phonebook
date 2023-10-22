import { Formik, Field, Form } from 'formik';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './ContactForm.module.css';
import { useState } from 'react';
import { getContacts, getIsLoading } from 'redux/selectors';
import { searchName } from '../helpers/js/searchName';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={() => {
          if (searchName(contacts, name)) {
            resetForm();
            return alert(`${name} is already in contacts`);
          }
          dispatch(addContact({ name, number }));
          resetForm();
        }}
      >
        <Form className={css.form}>
          <div className={css.inputGrope} role="group">
            <Field
              onChange={handleChange}
              value={name}
              className={css.field}
              id="name"
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label
              htmlFor="name"
              className={clsx(css.label, {
                [css.filled]: name !== '',
              })}
            >
              Name
            </label>
          </div>

          <div className={css.inputGrope} role="group">
            <Field
              onChange={handleChange}
              value={number}
              className={css.field}
              id="number"
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
              minLength="10"
              maxLength="13"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <label
              htmlFor="number"
              className={clsx(css.label, {
                [css.filled]: number !== '',
              })}
            >
              Number
            </label>
          </div>

          <button type="submit" className={css.submitBtn} disabled={IsLoading}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};
