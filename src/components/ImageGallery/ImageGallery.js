import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ listImages, onClick }) => {
    return (
        <ul className={styles.ImageGallery}>
            {listImages.map((image) => {
                return (
                    <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
                );
            })}
        </ul>
    );
};

export default ImageGallery;