import { useEffect, createRef } from "react";
import styles from "./Modal.module.css";

export default function Modal () {
    //componentDidMount() {
        window.addEventListener("keydown", this.modalKeyDown);
    }

    //componentWillMount() {
        window.removeEventListener("keydown", this.modalKeyDown);
    }

    const modalKeyDown = ({ key }) => {
        if (key === "Escape") {
            onClose();
        }
    };

    const closeOnClick = ({ target, currentTarget }) => {
        if (target !== currentTarget) {
            onClose();
        }
    };

   const backdropRef = createRef();

    const modalClick = (e) => {
        const { current } = this.backdropRef;
        if (current && e.target !== current) {
            return;
        }
        onClose();
    };

        return (
            <div
                onClick={modalClick}
                className={styles.Overlay}
                ref={backdropRef}
            >
                <div className={styles.Modal} onClick={closeOnClick}>
                    <img src={url} alt="img" />
                </div>
            </div>
        );
    }
}
