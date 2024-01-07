import styles from './contactsList.module.css';

const ContactsList = ({ items }) => {
  const elements = items.map(({ id, name, phone }) => (
    <li key={id}>
      {name}: {phone}
    </li>
  ));
  return <ul className={styles.contactsList}>{elements}</ul>;
};

export default ContactsList;
