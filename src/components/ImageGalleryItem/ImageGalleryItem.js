import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, onClick }) => {
    return (
        <li className={styles.ImageGalleryItem}>
            <img
                onClick={() => onClick(image.largeImageURL)}
                src={image.webformatURL}
                alt="image"
                className={styles.ImageGalleryItemImage}
            />
        </li>
    );
};

export default ImageGalleryItem;