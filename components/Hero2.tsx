"use client";
import { motion } from "framer-motion";
import {
  bounce,
  fadeIn,
  flipText,
  lightSpeed,
  zoomIn,
  zoomOut,
} from "./motion/variants";

export default function Hero2() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 p-5 text-center">
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit
          assumenda natus, modi nisi esse porro, possimus fugit optio reiciendis
          ipsa consequatur dicta ipsam omnis tempora incidunt molestiae eveniet!
          Necessitatibus!
        </motion.p>
      </div>

      <div className="flex flex-row justify-center items-center gap-5">
        <motion.button
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="btn btn-primary"
        >
          click here
        </motion.button>
        <motion.button
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="btn btn-primary"
        >
          click here
        </motion.button>
        <motion.button
          variants={zoomIn("default", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="btn btn-primary"
        >
          zoom in
        </motion.button>
        <motion.button
          variants={zoomOut()}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="btn btn-primary"
        >
          zoom in
        </motion.button>
        <motion.button
          variants={zoomIn("left")}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="btn btn-primary"
        >
          zoom in
        </motion.button>
        <motion.button
          variants={bounce("down")}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="btn btn-primary"
        >
          bounce button
        </motion.button>
        <motion.h1
          variants={flipText()}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-6xl"
        >
          This is heading text
        </motion.h1>
        <motion.h2
          variants={lightSpeed("right")}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-7xl uppercase"
        >
          light speed text
        </motion.h2>
      </div>
    </div>
  );
}
