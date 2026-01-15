import css from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        className={css.input}
      />
    </div>
  );
}
export default SearchBox;
