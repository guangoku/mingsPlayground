import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useUnifiedGallery } from "@/hooks/useUnifiedGallery";

interface UnifiedImageGalleryProps {
    images: string[];
    alt: string;
    className?: string;
    gridCols?: 2 | 3 | 4 | 5 | 6;
    allProjectImages?: string[]; // All images from the entire project
}

export default function UnifiedImageGallery({
    images,
    alt,
    className = '',
    gridCols = 4,
    allProjectImages
}: UnifiedImageGalleryProps) {
    const { isOpen, currentIndex, allImages, openGallery, closeGallery, setCurrentIndex } = useUnifiedGallery();
    const galleryRef = useRef<HTMLDivElement>(null);
    const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Touch/swipe state
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    // Use all project images if provided, otherwise use local images
    const galleryImages = allProjectImages || images;

    const gridColsClasses = {
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
        5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
        6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'
    };

    const handleImageClick = (index: number) => {
        // Find the index in the global gallery
        const globalIndex = allProjectImages
            ? allProjectImages.findIndex(img => img === images[index])
            : index;

        openGallery(galleryImages, globalIndex >= 0 ? globalIndex : index, alt);
    };

    // Scroll to selected image in gallery when modal opens
    const scrollToSelectedImage = (globalIndex: number) => {
        // Find the local index in the current section's images
        const localIndex = allProjectImages
            ? images.findIndex(img => img === allProjectImages[globalIndex])
            : globalIndex;

        if (localIndex >= 0 && thumbnailRefs.current[localIndex]) {
            thumbnailRefs.current[localIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
    };

    const handlePrevious = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
        setCurrentIndex(newIndex);
        scrollToSelectedImage(newIndex);
    };

    const handleNext = () => {
        const newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
        setCurrentIndex(newIndex);
        scrollToSelectedImage(newIndex);
    };

    // Swipe handling
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrevious();
        }
    };

    // Trackpad/mouse wheel handling for desktop with debouncing
    const [lastWheelTime, setLastWheelTime] = useState(0);
    const handleWheel = (e: WheelEvent) => {
        const now = Date.now();
        // Debounce: prevent multiple rapid triggers (300ms cooldown)
        if (now - lastWheelTime < 300) {
            return;
        }

        // Only handle horizontal scrolling (trackpad swipe) with moderate threshold
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
            e.preventDefault();
            setLastWheelTime(now);

            if (e.deltaX > 40) {  // Moderate threshold
                handlePrevious();
            } else if (e.deltaX < -40) {  // Symmetric threshold
                handleNext();
            }
        }
    };

    // Keyboard navigation and trackpad events
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isOpen) return;

            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                handlePrevious();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                handleNext();
            } else if (event.key === 'Escape') {
                event.preventDefault();
                closeGallery();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Add wheel event listener for trackpad gestures
        if (isOpen && imageContainerRef.current) {
            imageContainerRef.current.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            if (imageContainerRef.current) {
                imageContainerRef.current.removeEventListener('wheel', handleWheel);
            }
        };
    }, [isOpen, currentIndex, allImages.length]);

    // Scroll to selected image when modal opens
    useEffect(() => {
        if (isOpen && currentIndex !== null) {
            scrollToSelectedImage(currentIndex);
        }
    }, [isOpen, currentIndex]);

    if (images.length === 0) return null;

    return (
        <>
            <div ref={galleryRef} className={`grid ${gridColsClasses[gridCols]} gap-4 ${className}`}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        ref={el => thumbnailRefs.current[index] = el as HTMLDivElement}
                        className={`group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 cursor-pointer hover:shadow-lg transition-all duration-300 ${currentIndex === (allProjectImages ? allProjectImages.findIndex(img => img === images[index]) : index) && isOpen
                            ? 'ring-4 ring-emerald-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-800 scale-105 shadow-xl'
                            : ''
                            }`}
                        onClick={() => handleImageClick(index)}
                    >
                        <img
                            src={image}
                            alt={`${alt} ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        {currentIndex === (allProjectImages ? allProjectImages.findIndex(img => img === images[index]) : index) && isOpen && (
                            <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                                <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {currentIndex + 1} / {allImages.length}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Full-screen image dialog with all the original effects */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-700/50 dark:bg-gray-900/50 backdrop-blur-sm"
                    onClick={closeGallery}
                >
                    <div
                        className="max-w-7xl max-h-[95vh] w-full p-0 flex flex-col bg-transparent relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={closeGallery}
                            className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 border-white/20 dark:border-gray-700 rounded-full w-10 h-10"
                            aria-label="Close gallery"
                        >
                            <X className="h-6 w-6" />
                        </Button>
                        {/* Image content with side preview cards */}
                        <div
                            ref={imageContainerRef}
                            className="flex-1 flex items-center justify-center p-4 bg-transparent min-h-0 relative"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                            onClick={closeGallery}
                        >
                            {/* Left side preview cards */}
                            {allImages.length > 1 && currentIndex !== null && currentIndex > 0 && (
                                <div
                                    className="absolute left-4 top-2/3 -translate-y-1/2 z-10 flex space-x-2 cursor-pointer transition-all duration-300 hover:scale-105"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrevious();
                                    }}
                                >
                                    {/* Show up to 3 previous images - reversed order so most recent is on right */}
                                    {Array.from({ length: Math.min(3, currentIndex) }, (_, i) => {
                                        const reverseIndex = Math.min(3, currentIndex) - 1 - i; // Reverse the order
                                        const imageIndex = currentIndex - (reverseIndex + 1);
                                        return (
                                            <div
                                                key={imageIndex}
                                                className="relative transition-all duration-300"
                                                style={{
                                                    opacity: 1 - (reverseIndex * 0.3),
                                                    transform: `scale(${1 - (reverseIndex * 0.1)}) translateY(${reverseIndex * -5}px)`
                                                }}
                                            >
                                                <img
                                                    src={allImages[imageIndex]}
                                                    alt={`${alt} ${imageIndex + 1}`}
                                                    className="w-16 h-16 object-cover rounded-lg shadow-lg border-2 border-white/20"
                                                />
                                            </div>
                                        );
                                    })}
                                    {/* Single hover overlay for the entire group */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                                        <ChevronLeft className="h-8 w-8 text-white drop-shadow-lg" />
                                    </div>
                                </div>
                            )}

                            {/* Right side preview cards */}
                            {allImages.length > 1 && currentIndex !== null && currentIndex < allImages.length - 1 && (
                                <div
                                    className="absolute right-4 top-2/3 -translate-y-1/2 z-10 flex space-x-2 cursor-pointer transition-all duration-300 hover:scale-105"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNext();
                                    }}
                                >
                                    {/* Show up to 3 next images */}
                                    {Array.from({ length: Math.min(3, allImages.length - currentIndex - 1) }, (_, i) => {
                                        const imageIndex = currentIndex + (i + 1);
                                        return (
                                            <div
                                                key={imageIndex}
                                                className="relative transition-all duration-300"
                                                style={{
                                                    opacity: 1 - (i * 0.3),
                                                    transform: `scale(${1 - (i * 0.1)}) translateY(${i * 5}px)`
                                                }}
                                            >
                                                <img
                                                    src={allImages[imageIndex]}
                                                    alt={`${alt} ${imageIndex + 1}`}
                                                    className="w-16 h-16 object-cover rounded-lg shadow-lg border-2 border-white/20"
                                                />
                                            </div>
                                        );
                                    })}
                                    {/* Single hover overlay for the entire group */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                                        <ChevronRight className="h-8 w-8 text-white drop-shadow-lg" />
                                    </div>
                                </div>
                            )}

                            {/* Current image (centered) */}
                            {currentIndex !== null && (
                                <img
                                    src={allImages[currentIndex]}
                                    alt={`${alt} ${currentIndex + 1}`}
                                    className="object-contain rounded-lg shadow-lg transition-transform duration-200"
                                    style={{
                                        maxWidth: 'calc(100vw - 12rem)', // More space for side previews
                                        maxHeight: 'calc(95vh - 4rem)',
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
