import styles from './contactsList.module.css';

const ContactsList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, phone }) => (
    <li key={id}>
      {name}: {phone}{' '}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));
  return <ul className={styles.contactsList}>{elements}</ul>;
};

export default ContactsList;
