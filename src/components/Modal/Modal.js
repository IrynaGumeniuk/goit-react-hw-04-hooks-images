import React, { Component, createRef } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.modalKeyDown);
    }

    componentWillMount() {
        window.removeEventListener("keydown", this.modalKeyDown);
    }

    modalKeyDown = ({ key }) => {
        if (key === "Escape") {
            this.props.onClose();
        }
    };

    closeOnClick = ({ target, currentTarget }) => {
        if (target !== currentTarget) {
            this.props.onClose();
        }
    };

    backdropRef = createRef();

    modalClick = (e) => {
        const { current } = this.backdropRef;
        if (current && e.target !== current) {
            return;
        }
        this.props.onClose();
    };

    render() {
        const { url } = this.props;
        return (
            <div
                onClick={this.modalClick}
                className={styles.Overlay}
                ref={this.backdropRef}
            >
                <div className={styles.Modal} onClick={this.closeOnClick}>
                    <img src={url} alt="img" />
                </div>
            </div>
        );
    }
}

export default Modal;