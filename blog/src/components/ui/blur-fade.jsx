import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  maxBlur = "6px", // maximum blur amount
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;

  // Set up scroll-based blur effect
  const { scrollY } = useScroll();
  const blurValue = useTransform(scrollY, [0, 500], ["0px", maxBlur]);

  const defaultVariants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${maxBlur})` },
    visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
        style={{ filter: blurValue }} // Apply scroll-based blur
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
