import { useEffect, useRef } from "react";
import React from 'react';

const Works = () => {

    const galleryRef = useRef();

    useEffect(() => {
        if (window && galleryRef.current) {
            window.cloudinary
                .galleryWidget({
                    container: galleryRef.current,
                    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                    aspectRatio: "16:9",
                    mediaAssets: [
                        { tag: "react-image-gallery-images", transformation: { crop: "fill" } },
                        { tag: "react-image-gallery-videos", mediaType: "video", transformation: { crop: "fill" } },
                    ],
                    // carouselStyle: "indicators",
                    // carouselLocation: "bottom",
                })
                .render();
        }
    }, []);
    return (
        <div>
            <div className="container"></div>
        </div>
    );
}

export default Works;