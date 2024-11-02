// SearchBox.jsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBoxContainer}>
      <label htmlFor="search" className={styles.searchBoxLabel}>
        Search contacts
      </label>
      <input
        type="text"
        id="search" // Унікальний ID
        name="searchFilter" // Унікальний Name
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts"
        className={styles.searchBox}
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBox;
