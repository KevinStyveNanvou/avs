import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function Gallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];
  const videos = [
    "/videos/1.mp4",
    "/videos/2.mp4",
    "/videos/3.mp4",
    "/videos/4.mp4",
    "/videos/5.mp4",
    "/videos/6.mp4",
  ];

  // 🔥 Auto slide toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);

      // pause toutes les vidéos
      videoRefs.current.forEach((v) => v?.pause());
      setPlayingIndex(null);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10">

        {/* ─── HEADER ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Gallery</h2>
          <div className="section-underline" />
        </motion.div>

        {/* ─── IMAGES (inchangé) ───────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gradient-to-br from-[#E92252] to-yellow-400 p-1 relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={src}
                alt=""
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* ─── VIDEOS SLIDER AUTO ───────────────────────── */}
        <div className="relative w-full flex justify-center">

          {videos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentVideo === i ? 1 : 0,
                scale: currentVideo === i ? 1 : 0.95,
              }}
              transition={{ duration: 0.6 }}
              className="absolute w-full max-w-2xl"
            >
              <div className="bg-gradient-to-br from-[#E92252] to-yellow-400 p-1 rounded-2xl overflow-hidden shadow-lg">
                <div className="relative">
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={src}
                    className="w-full h-[400px] object-cover"
                    preload="metadata"
                  />

                  {/* Play / Pause */}
                  <button
                    onClick={() => togglePlay(i)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
                  >
                    {playingIndex === i ? (
                      <Pause className="w-12 h-12 text-white" />
                    ) : (
                      <Play className="w-12 h-12 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}