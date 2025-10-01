import { useState, useEffect } from 'react';

interface UnifiedGalleryState {
  isOpen: boolean;
  currentIndex: number;
  allImages: string[];
  alt: string;
}

let globalState: UnifiedGalleryState = {
  isOpen: false,
  currentIndex: 0,
  allImages: [],
  alt: ''
};

const listeners = new Set<() => void>();

export function useUnifiedGallery() {
  const [state, setState] = useState(globalState);

  useEffect(() => {
    const listener = () => setState({ ...globalState });
    listeners.add(listener);
    
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const openGallery = (images: string[], index: number, alt: string) => {
    globalState = {
      isOpen: true,
      currentIndex: index,
      allImages: images,
      alt
    };
    listeners.forEach(listener => listener());
  };

  const closeGallery = () => {
    globalState = {
      ...globalState,
      isOpen: false
    };
    listeners.forEach(listener => listener());
  };

  const setCurrentIndex = (index: number) => {
    globalState = {
      ...globalState,
      currentIndex: index
    };
    listeners.forEach(listener => listener());
  };

  return {
    ...state,
    openGallery,
    closeGallery,
    setCurrentIndex
  };
}
