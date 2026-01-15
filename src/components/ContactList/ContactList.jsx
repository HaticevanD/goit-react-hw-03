import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  return (
    <div className={css.container}>
      <h2 className={css.sectionTitle}>Contacts</h2>
      {contacts.length === 0 ? (
        <p className={css.emptyMessage}>No contacts yet.</p>
      ) : (
        <ul className={css.list}>
          {contacts.map((contact) => (
            <li key={contact.id} className={css.listItem}>
              <Contact name={contact.name} number={contact.number} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ContactList;
