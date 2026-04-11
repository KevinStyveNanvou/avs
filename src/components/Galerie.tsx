import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

export default function Gallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];
  const videos = [
    "/videos/5.mp4",
    "/videos/3.mp4",
    "/videos/2.mp4",
    "/videos/1.mp4",
    "/videos/4.mp4",
  ];

  // 🔥 Détection responsive
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 🔥 vidéos visibles selon écran
  const visibleVideos = isMobile
    ? [videos[startIndex]]
    : [
        videos[startIndex],
        videos[(startIndex + 1) % videos.length],
      ];

  const togglePlay = (index: number) => {
    const realIndex = (startIndex + index) % videos.length;
    const video = videoRefs.current[realIndex];
    if (!video) return;

    if (playingIndex === realIndex) {
      video.pause();
      setPlayingIndex(null);
    } else {
      videoRefs.current.forEach((v) => v?.pause());
      video.play();
      setPlayingIndex(realIndex);
    }
  };

  const next = () => {
    videoRefs.current.forEach((v) => v?.pause());
    setPlayingIndex(null);
    setStartIndex((prev) => (prev + 1) % videos.length);
  };

  const prev = () => {
    videoRefs.current.forEach((v) => v?.pause());
    setPlayingIndex(null);
    setStartIndex((prev) =>
      (prev - 1 + videos.length) % videos.length
    );
  };

  return (
    <section className="min-h-screen bg-white dark:bg-transparent px-4 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10">

        {/* ─── HEADER ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{t.gallery}</h2>
          <div className="section-underline" />
        </motion.div>

        {/* ─── IMAGES ───────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-br from-[#E92252] to-yellow-400 p-1 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* ─── VIDEOS CAROUSEL ───────────────────────── */}
        <div className="relative flex items-center justify-center gap-6">

          {/* Bouton gauche */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 bg-black/40 p-2 rounded-full"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          {/* Vidéos */}
          {visibleVideos.map((src, i) => {
            const realIndex = (startIndex + i) % videos.length;

            return (
              <motion.div
                key={realIndex}
                className={`w-full ${
                  isMobile ? "max-w-sm" : "max-w-md"
                } bg-gradient-to-br from-[#E92252] to-yellow-400 p-1 rounded-2xl overflow-hidden shadow-lg`}
              >
                <div className="relative">
                  <video
                    ref={(el) => (videoRefs.current[realIndex] = el)}
                    src={src}
                    className="w-full h-[300px] object-cover"
                    preload="metadata"
                  />

                  {/* Play / Pause */}
                  <button
                    onClick={() => togglePlay(i)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30"
                  >
                    {playingIndex === realIndex ? (
                      <Pause className="w-10 h-10 text-white" />
                    ) : (
                      <Play className="w-10 h-10 text-white" />
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* Bouton droit */}
          <button
            onClick={next}
            className="absolute right-0 z-10 bg-black/40 p-2 rounded-full"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>

        </div>

      </div>
    </section>
  );
}
