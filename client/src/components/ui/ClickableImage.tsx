import { useState } from "react";
import { useUnifiedGallery } from "@/hooks/useUnifiedGallery";

interface ClickableImageProps {
    src: string;
    alt: string;
    className?: string;
    allImages: string[];
    initialIndex: number;
}

export default function ClickableImage({
    src,
    alt,
    className = "",
    allImages,
    initialIndex
}: ClickableImageProps) {
    const { openGallery } = useUnifiedGallery();

    const handleClick = () => {
        openGallery(allImages, initialIndex, alt);
    };

    return (
        <img
            src={src}
            alt={alt}
            className={`${className} cursor-pointer hover:shadow-xl transition-shadow duration-300`}
            onClick={handleClick}
        />
    );
}
