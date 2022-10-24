import PropTypes from 'prop-types';
import css from './ContactList.module.css';
export const ContactList = ({ filterContacts, handleDeleteContact }) => {
  return (
    <ul>
      {filterContacts.map(contact => (
        <li className={css.contactListItem} key={contact.id}>
          <p
            className={css.ContactListItem}
          >{`${contact.name}: ${contact.number}`}</p>
          <button
            className={css.contactListBtn}
            onClick={() => handleDeleteContact(contact.id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  handleDeleteContact: PropTypes.func.isRequired,
};
