import { Component } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';

import styles from './phonebook.module.css';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = {
    contacts: [],
  };

  addContact = data => {
    console.log(data);
  };
  render() {
    const { contacts } = this.state;
    const { addContact } = this;
    return (
      <div className={styles.phonebookWrapper}>
        <PhonebookForm onSubmit={addContact} />
        <ContactsList items={contacts} />
      </div>
    );
  }
}

export default Phonebook;
