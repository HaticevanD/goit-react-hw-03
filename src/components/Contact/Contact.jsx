import css from "./Contact.module.css";

function Contact({ name, number }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <button className={css.deleteButton} disabled>
        Delete
      </button>
    </div>
  );
}
export default Contact;
