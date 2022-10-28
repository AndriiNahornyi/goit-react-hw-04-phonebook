import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsForm.module.css';

export const ContactsForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  //   handleChange = e => {
  //     const { name, value } = e.currentTarget;
  //     this.setState({ [name]: value });
  //   };
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  //   onSubmit = e => {
  //     e.preventDefault();
  //     this.props.handleSubmit(this.state.name, this.state.number);
  //     // this.setState({ name: '', number: '' });
  //     e.target.reset();
  //   };
  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(name, number);
    e.target.reset();
  };
  //   render()
  // {
  return (
    <form className={css.contactsFormForm} onSubmit={onSubmit}>
      <br />
      <label className={css.contactsFormLabel}>
        Name
        <br />
        <input
          className={css.contactsFormInput}
          type="text"
          name="name"
          onChange={handleChange}
          // value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <br />
      <label className={css.contactsFormLabel}>
        Number
        <br />
        <input
          className={css.contactsFormInput}
          type="tel"
          name="number"
          onChange={handleChange}
          // value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <br />
      <button className={css.contactsFormBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
// }
ContactsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
