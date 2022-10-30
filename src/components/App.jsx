import { useEffect, useState } from 'react';
import { ContactsForm } from './ContactsForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import css from '../components/App.module.css';

const CONTACT_LIST_LOCAL_KEY = 'contact-list-local';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localeContactList = localStorage.getItem(CONTACT_LIST_LOCAL_KEY);
    if (localeContactList) {
      return JSON.parse(localeContactList);
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [filter, setFilter] = useState('');
  //  Лінива ініціалізація стану => на стор. 12-16
  //    componentDidMount() {
  //      const localeContactList = localStorage.getItem(CONTACT_LIST_LOCAL_KEY);
  //      if (localeContactList) {
  //        this.setState({ contacts: JSON.parse(localeContactList) });
  //      }
  //    }
  useEffect(() => {
    localStorage.setItem(CONTACT_LIST_LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(prevState => [
      ...prevState,
      { name: name, id: nanoid(), number: number },
    ]);
  };
  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(filter.trim().toLocaleLowerCase())
    );
  };
  const handleChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };
  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  return (
    <div>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactsForm handleSubmit={handleSubmit} />

      <h2 className={css.appTitle}>Contacts</h2>

      <Filter handleFilter={handleChange} filter={filter} />
      <ContactList
        filterContacts={getFilterContacts()}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
