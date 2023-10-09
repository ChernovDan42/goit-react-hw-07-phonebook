import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import css from './ContactsFilter.module.css';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(filterChange(value.trim()));
  };

  return (
    <>
      <label htmlFor="filter" className={css.filterLabel}>
        Find contact
      </label>
      <input
        id="filter"
        type="text"
        name="filter"
        autoComplete="off"
        onChange={handleChange}
      />
    </>
  );
};
