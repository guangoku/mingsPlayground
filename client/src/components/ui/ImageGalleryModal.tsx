import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from "lucide-react";

interface ImageGalleryModalProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
    alt?: string;
}

export default function ImageGalleryModal({
    images,
    isOpen,
    onClose,
    initialIndex = 0,
    alt = "Gallery image"
}: ImageGalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);

    // Reset state when modal opens/closes
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            setZoom(1);
            setRotation(0);
        }
    }, [isOpen, initialIndex]);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        setZoom(1);
        setRotation(0);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        setZoom(1);
        setRotation(0);
    };

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 0.5, 0.5));
    };

    const handleRotate = () => {
        setRotation(prev => (prev + 90) % 360);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'ArrowLeft':
                handlePrevious();
                break;
            case 'ArrowRight':
                handleNext();
                break;
            case 'Escape':
                onClose();
                break;
            case '+':
            case '=':
                handleZoomIn();
                break;
            case '-':
                handleZoomOut();
                break;
            case 'r':
            case 'R':
                handleRotate();
                break;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    if (!images.length) return null;

    const currentImage = images[currentIndex];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 flex flex-col">
                <DialogTitle className="sr-only">
                    Image Gallery - {alt} ({currentIndex + 1} / {images.length})
                </DialogTitle>
                <DialogDescription className="sr-only">
                    Image gallery with zoom and rotation controls
                </DialogDescription>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-900 flex-shrink-0">
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {alt} ({currentIndex + 1} / {images.length})
                        </h3>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Zoom controls */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleZoomOut}
                            className="p-2"
                            aria-label="Zoom out"
                        >
                            <ZoomOut className="h-4 w-4" />
                        </Button>
                        <span className="text-sm text-gray-500 dark:text-gray-400 min-w-[3rem] text-center">
                            {Math.round(zoom * 100)}%
                        </span>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleZoomIn}
                            className="p-2"
                            aria-label="Zoom in"
                        >
                            <ZoomIn className="h-4 w-4" />
                        </Button>

                        {/* Rotate button */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleRotate}
                            className="p-2"
                            aria-label="Rotate"
                        >
                            <RotateCw className="h-4 w-4" />
                        </Button>

                        {/* Close button */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onClose}
                            className="p-2"
                            aria-label="Close"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Image container */}
                <div className="flex-1 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {/* Navigation arrows */}
                    {images.length > 1 && (
                        <>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handlePrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </>
                    )}

                    {/* Image */}
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <img
                            src={currentImage}
                            alt={`${alt} ${currentIndex + 1}`}
                            className="max-w-full max-h-full object-contain transition-transform duration-200"
                            style={{
                                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                                cursor: zoom > 1 ? 'grab' : 'default'
                            }}
                            draggable={false}
                        />
                    </div>
                </div>

                {/* Thumbnail strip */}
                {images.length > 1 && (
                    <div className="flex-shrink-0 p-4 border-t bg-white dark:bg-gray-900">
                        <div className="flex gap-2 overflow-x-auto">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setZoom(1);
                                        setRotation(0);
                                    }}
                                    className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${index === currentIndex
                                        ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800'
                                        : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${alt} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
