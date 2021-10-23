import { useState } from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar () {

    const [inputValue, setInputValue] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(setInputValue);
    };

    const handleChange = (e) => {
        setInputValue({ inputValue: e.target.value });
    };

        return (
            <header className={styles.Searchbar}>
                <form onSubmit={handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        onChange={handleChange}
                        className={styles.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
}
