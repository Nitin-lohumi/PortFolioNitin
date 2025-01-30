import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MoveText({heading,duration}) {
  const letters = heading?.split("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1); 
    }, duration);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <motion.div
        key={key} 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              repeat: Infinity,
              repeatType: "loop",
              duration: 5, 
            },
          },
        }}
        style={{fontSize:"3rem",paddingLeft:"17px",textAlign:"center"}}
      >
        {letters?.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
