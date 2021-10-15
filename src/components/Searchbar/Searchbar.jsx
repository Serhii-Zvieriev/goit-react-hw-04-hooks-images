import { useState } from "react";

import style from "./Searchbar.module.css";

function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }) => {
    setInputValue(target.value.toLowerCase());
  };

  return (
    <header className={style.Searchbar}>
      <form onSubmit={onSubmit} className={style.SearchForm}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          name="inputValue"
          value={inputValue}
          onChange={handleChange}
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default Searchbar;
