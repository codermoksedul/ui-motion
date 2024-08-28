"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { fadeIn, lightSpeed, zoomIn } from "../motion/variants";
import { FlipWords } from "../ui/flip-words";
import { HeroHighlight } from "../ui/hero-highlight";

export default function Hero() {
  const words = ["Design", "Development", "Strategy", "Marketing"];
  return (
    <BackgroundBeamsWithCollision className="-mt-[140px] w-full pt-[70px]">
      <HeroHighlight>
        <div className="flex container flex-col justify-center items-center">
          <motion.p
            variants={lightSpeed("left")}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="text-2xl tracking-widest"
          >
            Welcome to my World!
          </motion.p>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            <FlipWords className="text-9xl uppercase" words={words} /> <br />
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.2, 0.2)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="text-center my-5 text-xl w-full max-w-[768px] mx-auto"
          >
            Transform your online presence with our professional web design and
            development services. Specializing in WordPress, Shopify.
          </motion.p>
          <motion.div
            variants={zoomIn("default", 0.2, 0.4)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.7 }}
          >
            <Link
              className="border mt-5 border-slate-200 flex flex-row justify-center items-center gap-4 dark:border-slate-700 dark:bg-slate-700/40 rounded-full px-7 py-3 text-lg hover:dark:bg-slate-900 bg-white hover:scale-110 transition-all duration-300 font-medium"
              href="/contact"
            >
              Get Started{" "}
              <FiArrowRight className="dark:bg-white bg-slate-800 text-white dark:text-slate-700 p-2 rounded-full flex flex-col justify-center items-center w-7 h-7" />
            </Link>
          </motion.div>
        </div>
      </HeroHighlight>
    </BackgroundBeamsWithCollision>
  );
}
