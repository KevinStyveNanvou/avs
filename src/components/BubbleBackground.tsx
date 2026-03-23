// components/BubbleBackground.tsx
import { useTheme } from '../contexts/ThemeContext';

export default function BubbleBackground() {
  const { theme } = useTheme();
  const bubbleCount = 15;

  const bubbles = Array.from({ length: bubbleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 30,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 8 + 12,
    opacity: Math.random() * 0.3 + 0.15,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`bubble ${theme === 'dark' ? 'bubble-dark' : 'bubble-light'}`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
            opacity: bubble.opacity,
          }}
        />
      ))}
    </div>
  );
}