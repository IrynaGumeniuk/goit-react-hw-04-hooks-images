import React, { Component } from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
    state = {
        inputValue: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.inputValue);
        this.props.onSubmit(this.state.inputValue);
    };

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    render() {
        return (
            <header className={styles.Searchbar}>
                <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        onChange={this.handleChange}
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
}

export default Searchbar;