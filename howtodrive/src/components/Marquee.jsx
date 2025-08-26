import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ speed = 20 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full p-3 rounded-lg">
      <motion.div
        className="text-4xl font-semibold text-primary py-10 uppercase"
        animate={{ x: ["100%", "-100%"] }}  // move left
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed, // control speed
          ease: "linear",
        }}
      >
        It is not only getting Driving Licence. It is every thing about Vehicles!
      </motion.div>
    </div>
  );
};

export default Marquee;
