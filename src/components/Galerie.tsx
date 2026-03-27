import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function Gallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];
  const videos = [
    "/videos/1.mp4",
    "/videos/2.mp4",
    "/videos/3.mp4",
    "/videos/4.mp4",
    "/videos/5.mp4",
    "/videos/6.mp4",
  ];

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];

    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      // pause toutes les autres
      videoRefs.current.forEach((v) => v?.pause());

      video.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section
      id="galerie"
      className="min-h-screen bg-white dark:bg-transparent px-4 py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* ─── Ligne Images ───────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={src}
                alt=""
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* ─── Ligne Vidéos ───────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={src}
                className="w-full h-[300px] object-cover"
                preload="metadata"
              />

              {/* Bouton Play / Pause */}
              <button
                onClick={() => togglePlay(i)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
              >
                {playingIndex === i ? (
                  <Pause className="w-10 h-10 text-white" />
                ) : (
                  <Play className="w-10 h-10 text-white" />
                )}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}