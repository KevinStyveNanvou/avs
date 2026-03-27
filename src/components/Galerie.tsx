import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, X, ChevronLeft, ChevronRight } from "lucide-react";

type Media = {
  type: "image" | "video";
  src: string;
};

export default function Gallery() {
  const media: Media[] = [
    { type: "image", src: "/imgages/1.jpg" },
    { type: "image", src: "/imgages/2.jpg" },
    { type: "image", src: "/imgages/3.jpg" },
    { type: "video", src: "/videos/1.mp4" },
    { type: "video", src: "/videos/2.mp4" },
    { type: "video", src: "/videos/3.mp4" },
    { type: "video", src: "/videos/4.mp4" },
    { type: "video", src: "/videos/5.mp4" },
    { type: "video", src: "/videos/6.mp4" },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setPlaying(false);
  };

  const closeModal = () => {
    videoRefs.current.forEach((v) => v?.pause());
    setPlaying(false);
    setCurrentIndex(null);
  };

  const next = () => {
    if (currentIndex === null) return;
    setPlaying(false);
    setCurrentIndex((currentIndex + 1) % media.length);
  };

  const prev = () => {
    if (currentIndex === null) return;
    setPlaying(false);
    setCurrentIndex(
      (currentIndex - 1 + media.length) % media.length
    );
  };

  const togglePlay = () => {
    if (currentIndex === null) return;

    const video = videoRefs.current[currentIndex];
    if (!video) return;

    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
    }
  };

  return (
    <section className="min-h-screen px-4 py-20 bg-white dark:bg-transparent">

      {/* ───────── SLIDER ───────── */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">

        {media.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="min-w-[280px] h-[200px] rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
            onClick={() => openModal(i)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                muted
              />
            )}
          </motion.div>
        ))}

      </div>

      {/* ───────── MODAL FULLSCREEN ───────── */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-50"
            >
              <X className="text-white w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-6 z-50"
            >
              <ChevronLeft className="text-white w-10 h-10" />
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-6 z-50"
            >
              <ChevronRight className="text-white w-10 h-10" />
            </button>

            {/* Content */}
            <div className="w-full max-w-5xl h-[80vh] flex items-center justify-center relative">

              {media[currentIndex].type === "image" ? (
                <img
                  src={media[currentIndex].src}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    ref={(el) =>
                      (videoRefs.current[currentIndex] = el)
                    }
                    src={media[currentIndex].src}
                    className="max-h-full max-w-full"
                  />

                  {/* Play / Pause */}
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/30"
                  >
                    {playing ? (
                      <Pause className="text-white w-12 h-12" />
                    ) : (
                      <Play className="text-white w-12 h-12" />
                    )}
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}