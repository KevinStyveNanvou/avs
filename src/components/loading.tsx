// components/Loading.tsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BubbleBackground from './BubbleBackground';

// ── Bulles de savon iridescentes ──────────────────────────────────────────────
const BUBBLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size:  28 + Math.random() * 80,
  left:  Math.random() * 100,
  delay: Math.random() * 6,
  dur:   10 + Math.random() * 12,
  drift: (Math.random() - 0.5) * 60,
}));

// ── Messages rotatifs pendant le chargement ───────────────────────────────────
const MESSAGES_FR = [
  'Préparation de vos espaces...',
  'Chargement des offres...',
  'Mise en place de l\'équipe...',
  'Presque prêt...',
];

// ── Composant logo AVS animé ──────────────────────────────────────────────────
function AVSLogo() {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Halo pulsant derrière le logo */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(91,196,240,0.25) 0%, rgba(233,34,82,0.10) 60%, transparent 80%)',
          filter: 'blur(18px)',
        }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cercle de fond */}
      <motion.div
        className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #E9E9E9 0%, #b0b8b0 100%)',
          boxShadow: '0 0 40px rgba(233,34,82,0.4), 0 8px 32px rgba(0,0,0,0.3)',
        }}
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Texte AVS */}
        <img
          src="/img/loghho.png"
          alt="AVS Logo"
          className="w-16 h-16 z-10"
        />


        {/* Reflet shine */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <div
            className="absolute top-0 left-[-40%] w-[80%] h-full"
            style={{
              background:
                'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
              transform: 'skewX(-20deg)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Sous-titre */}
      <motion.p
        className="mt-4 text-xs font-semibold tracking-[0.35em] uppercase text-[#5BC4F0] dark:text-[#5BC4F0]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        À Votre Service
      </motion.p>
    </motion.div>
  );
}

// ── Barre de progression liquide ─────────────────────────────────────────────
function LiquidBar({ progress }: { progress: number }) {
  return (
    <div className="w-64 h-2 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
      <motion.div
        className="h-full rounded-full relative overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #5BC4F0 0%, #E92252 60%, #FFE600 100%)',
        }}
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Shimmer animé sur la barre */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)',
          }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </div>
  );
}

// ── Gouttes d'eau tombantes ───────────────────────────────────────────────────
function WaterDrop({ delay, left }: { delay: number; left: number }) {
  return (
    <motion.div
      className="absolute top-0 pointer-events-none"
      style={{ left: `${left}%` }}
      initial={{ y: -20, opacity: 0, scaleY: 1 }}
      animate={{ y: ['0vh', '110vh'], opacity: [0, 0.7, 0.7, 0], scaleY: [1, 1.4, 1] }}
      transition={{
        duration: 2.5 + Math.random(),
        delay,
        repeat: Infinity,
        ease: 'easeIn',
      }}
    >
      <div
        className="w-1.5 rounded-full"
        style={{
          height: '18px',
          background: 'linear-gradient(180deg, rgba(91,196,240,0.9) 0%, rgba(91,196,240,0.2) 100%)',
          filter: 'blur(0.5px)',
        }}
      />
    </motion.div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
//  COMPOSANT PRINCIPAL
// ══════════════════════════════════════════════════════════════════════════════
interface LoadingProps {
  onComplete?: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [progress,    setProgress]    = useState(0);
  const [msgIndex,    setMsgIndex]    = useState(0);
  const [done,        setDone]        = useState(false);

  // ── Avancement de la barre ────────────────────────────────────────────────
  useEffect(() => {
    const steps = [
      { target: 30,  delay: 300  },
      { target: 55,  delay: 800  },
      { target: 78,  delay: 600  },
      { target: 92,  delay: 500  },
      { target: 100, delay: 400  },
    ];

    let elapsed = 0;
    steps.forEach(({ target, delay }) => {
      elapsed += delay;
      setTimeout(() => setProgress(target), elapsed);
    });

    // Fin du loading
    setTimeout(() => {
      setDone(true);
      setTimeout(() => onComplete?.(), 700);
    }, elapsed + 500);
  }, [onComplete]);

  // ── Rotation des messages ─────────────────────────────────────────────────
  useEffect(() => {
    const iv = setInterval(
      () => setMsgIndex((p) => (p + 1) % MESSAGES_FR.length),
      700
    );
    return () => clearInterval(iv);
  }, []);

  // Gouttes d'eau fixes
  const drops = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.4,
    left:  5 + i * 8,
  }));

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, #daf4fd 0%, #f0fbff 40%, #fff5f7 70%, #fffbe6 100%)',
          }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* ── Bulles de savon en fond ──────────────────────────────────── */}
          <BubbleBackground />

          {/* ── Gouttes d'eau tombantes ──────────────────────────────────── */}
          {drops.map((d) => (
            <WaterDrop key={d.id} delay={d.delay} left={d.left} />
          ))}

          {/* ── Vague décorative basse ───────────────────────────────────── */}
          <div className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden leading-none">
            <motion.svg
              viewBox="0 0 1440 120"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              style={{ height: '120px' }}
              animate={{ x: [0, -40, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
                fill="rgba(91,196,240,0.12)"
              />
              <path
                d="M0,80 C240,40 480,100 720,70 C960,40 1200,90 1440,70 L1440,120 L0,120 Z"
                fill="rgba(233,34,82,0.07)"
              />
            </motion.svg>
          </div>

          {/* ── Contenu central ──────────────────────────────────────────── */}
          <div className="relative z-10 flex flex-col items-center gap-8">

            {/* Logo */}
            <AVSLogo />

            {/* Titre principal */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h1
                className="font-black text-[#0D1B2A] leading-none"
                style={{ fontSize: 'clamp(1.6rem, 5vw, 2.8rem)', letterSpacing: '-0.03em' }}
              >
                Nettoyage{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #E92252, #5BC4F0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Professionnel
                </span>
              </h1>
              <p className="text-gray-500 text-sm mt-1 tracking-wide">
                Yaoundé, Cameroun
              </p>
            </motion.div>

            {/* Barre de progression */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <LiquidBar progress={progress} />

              {/* Pourcentage */}
              <div className="flex items-center gap-3">
                <motion.span
                  className="text-xs font-bold text-[#E92252] tabular-nums"
                  key={progress}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {progress}%
                </motion.span>
                <span className="text-gray-300 text-xs">—</span>
                {/* Message rotatif */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={msgIndex}
                    className="text-xs text-gray-500 italic"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {MESSAGES_FR[msgIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Trois points pulsants */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ background: i === 0 ? '#E92252' : i === 1 ? '#5BC4F0' : '#FFE600' }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>

          </div>

          {/* ── Mention bas de page ──────────────────────────────────────── */}
          <motion.p
            className="absolute bottom-6 text-xs text-gray-400 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            avotreservice · yaoundé
          </motion.p>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
