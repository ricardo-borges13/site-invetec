import { motion, useReducedMotion } from 'framer-motion';

type MotionRevealProps = {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
};

export const MotionReveal = ({
  children,
  delay = 0,
  distance = 32,
  direction = 'up',
  duration = 0.55,
}: MotionRevealProps) => {
  const shouldReduceMotion = useReducedMotion();
  const axis =
    direction === 'left' || direction === 'right'
      ? { x: direction === 'left' ? distance : -distance, y: 0 }
      : { x: 0, y: direction === 'up' ? distance : -distance };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { ...axis, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        ease: [0.22, 1, 0.36, 1],
        delay: shouldReduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
};
