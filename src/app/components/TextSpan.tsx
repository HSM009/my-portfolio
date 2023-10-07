import React, { PropsWithChildren } from "react";
import { motion, transform, useAnimationControls } from "framer-motion";

const TextSpan = ({ children }: PropsWithChildren) => {
  const controls = useAnimationControls();
  const rubberBand = () => {
    controls.start({
      transform: ["scale3d(1,1,1)"],
    });
  };
  return;
  // <motion.span whileHover={rubberBand}>{children}</motion.span>;
};

export default TextSpan;
