import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './css/ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
