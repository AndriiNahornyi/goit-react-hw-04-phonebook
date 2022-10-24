import PropTypes from 'prop-types';
import css from './Filter.module.css';
export const Filter = ({ handleFilter, filter }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <br />
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
