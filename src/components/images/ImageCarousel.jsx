import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images = [] }) {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const displayImages = images.length ? images : ["placeholder.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (displayImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayImages.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [displayImages]);

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + displayImages.length) % displayImages.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  return (
    <div className="relative w-full max-w-[340px] flex items-center justify-center rounded-md border border-black/10 shadow p-5">
      <img
        src={`${displayImages[currentIndex]}`}
        alt={`image-${currentIndex}`}
        className="w-full max-h-[250px] rounded-2xl max-w-[250px] object-cover"
      />

      {displayImages.length > 1 && (
        <>
          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 
            bg-white/80 hover:bg-white text-black 
            p-2 rounded-full shadow-lg 
            transition transform hover:scale-110 active:scale-95
            z-10 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 
            bg-white/80 hover:bg-white text-black 
            p-2 rounded-full shadow-lg 
            transition transform hover:scale-110 active:scale-95
            z-10 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
}
