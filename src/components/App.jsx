import { Component } from 'react';
import { ContactsForm } from './ContactsForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import css from '../components/App.module.css';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleSubmit = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: name, id: nanoid(), number: number },
      ],
    }));
  };
  getFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.trim().toLocaleLowerCase())
    );
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <div>
        <h1 className={css.appTitle}>Phonebook</h1>
        <ContactsForm handleSubmit={this.handleSubmit} />

        <h2 className={css.appTitle}>Contacts</h2>

        <Filter handleFilter={this.handleChange} filter={this.state.filter} />
        <ContactList
          filterContacts={this.getFilterContacts()}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
