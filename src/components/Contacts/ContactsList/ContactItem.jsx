import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

import css from './css/ContactItem.module.css';
import PropTypes from 'prop-types';
import { getIsLoading } from 'redux/selectors';

export const ContactItem = ({ contacts }) => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(getIsLoading);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contactItem}>
            <div className={css.contactInfo}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                onClick={() => handleDelete(id)}
                disabled={IsLoading}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
};

ContactItem.propTypes = {
  optionalObjectWithShape: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
