import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ images, currentIndex, open, onClose, onNext, onPrev }: LightboxProps) => {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, handleKey]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-white/20 backdrop-blur-xl flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-foreground text-xl tracking-widest hover:opacity-60 transition-opacity z-10"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 text-foreground text-2xl hover:opacity-60 transition-opacity z-10"
          >
            ‹
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.975, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.985, y: -8 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[90vh] max-w-[96vw] items-center justify-center overflow-hidden rounded-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`Pamje ${currentIndex + 1}`}
              className="block max-h-[90vh] max-w-[96vw] object-contain"
            />
            <span className="absolute bottom-10 rounded-full bg-background/50 px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-foreground">
              {currentIndex + 1} / {images.length}
            </span>
          </motion.div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 text-foreground text-2xl hover:opacity-60 transition-opacity z-10"
          >
            ›
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
