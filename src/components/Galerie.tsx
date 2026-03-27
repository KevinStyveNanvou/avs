import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, Pause, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];
  const videos = [
    "/videos/1.mp4",
    "/videos/2.mp4",
    "/videos/3.mp4",
    "/videos/4.mp4",
    "/videos/5.mp4",
    "/videos/6.mp4",
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [modalType, setModalType] = useState<"image" | "video" | null>(null);
  const [playing, setPlaying] = useState(false);

  const openModal = (index: number, type: "image" | "video") => {
    setModalIndex(index);
    setModalType(type);
    setPlaying(false);
  };

  const closeModal = () => {
    videoRefs.current.forEach((v) => v?.pause());
    setPlaying(false);
    setModalIndex(null);
    setModalType(null);
  };

  const next = () => {
    if (modalIndex === null) return;
    const list = modalType === "image" ? images : videos;
    setPlaying(false);
    setModalIndex((modalIndex + 1) % list.length);
  };

  const prev = () => {
    if (modalIndex === null) return;
    const list = modalType === "image" ? images : videos;
    setPlaying(false);
    setModalIndex((modalIndex - 1 + list.length) % list.length);
  };

  const togglePlay = () => {
    if (modalIndex === null) return;
    const video = videoRefs.current[modalIndex];
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
    <section
      id="galerie"
      ref={ref}
      className="py-24 px-4 bg-white/70 dark:bg-[#0E0A1A]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* ───────── LIGNE IMAGES ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(i, "image")}
              className="min-w-[300px] cursor-pointer"
            >
              <div className="wave-card bg-gradient-to-br from-[#E92252] to-yellow-400 p-1">
                <div className="wave-card overflow-hidden h-64 bg-white dark:bg-[#0E0A1A]">
                  <img
                    src={src}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ───────── LIGNE VIDEOS ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
        >
          {videos.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(i, "video")}
              className="min-w-[300px] cursor-pointer relative"
            >
              <div className="wave-card bg-gradient-to-br from-[#E92252] to-yellow-400 p-1">
                <div className="wave-card overflow-hidden h-64 bg-black relative">
                  <video
                    src={src}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="text-white w-10 h-10" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* ───────── MODAL FULLSCREEN ───────── */}
      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Close */}
            <button onClick={closeModal} className="absolute top-6 right-6">
              <X className="text-white w-8 h-8" />
            </button>

            {/* Prev */}
            <button onClick={prev} className="absolute left-6">
              <ChevronLeft className="text-white w-10 h-10" />
            </button>

            {/* Next */}
            <button onClick={next} className="absolute right-6">
              <ChevronRight className="text-white w-10 h-10" />
            </button>

            {/* Content */}
            <div className="max-w-5xl w-full h-[80vh] flex items-center justify-center">

              {modalType === "image" ? (
                <img
                  src={images[modalIndex]}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    ref={(el) => (videoRefs.current[modalIndex] = el)}
                    src={videos[modalIndex]}
                    className="max-h-full max-w-full"
                  />

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