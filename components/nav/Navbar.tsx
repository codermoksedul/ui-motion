import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "../motion/variants";
import ThemeController from "../ThemeController";
import { Menu } from "./Menu";

export default function Navbar() {
  return (
    <motion.header
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.7 }}
      className="h-[70px] relative z-50 border-b border-slate-100 dark:border-slate-800/50"
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link className="text-2xl font-medium" href="/">
              moksedul.dev
            </Link>
          </div>
          <Menu />
          <div className="flex flex-row jue items-center gap-3">
            <ThemeController />
            <Link
              className="border border-slate-100 dark:border-slate-700/50 px-5 py-1.5 rounded-md text-sm bg-primary-color text-white dark:text-slate-200 dark:bg-dark-bg/50"
              href="/login"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
