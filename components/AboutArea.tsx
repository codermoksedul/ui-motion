import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import aboutImage from "../public/moksedul.webp";
import { fadeIn, lightSpeed, zoomIn } from "./motion/variants";

export default function AboutArea() {
  const features = [
    "Work simple and clean design",
    "Work simple and clean design",
    "Work simple and clean design",
    "Work simple and clean design",
  ];
  return (
    <>
      <div className="aboutArea min-h-[70vh] py-[50px]">
        <div className="container flex flex-col lg:flex-row justify-start items-start gap-10">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.7 }}
            className="w-full"
          >
            <Image
              placeholder="blur"
              className="rounded-md w-full"
              src={aboutImage}
              alt="placeholder"
            />
          </motion.div>
          <div>
            <motion.h2
              variants={lightSpeed("left")}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.7 }}
              className="headtingTitle text-lg"
            >
              About Us
            </motion.h2>
            <motion.h3
              variants={lightSpeed("right")}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-6xl font-semibold uppercase"
            >
              I can design and develop anything!
            </motion.h3>
            <motion.p
              variants={fadeIn("down")}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.7 }}
              className="my-5 text-xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
              luctus nunc. Sed nec purus in ante. Nulla facilisi. Nullam nec
              eros nec nulla sagittis fringilla. Aenean vel nulla eu sem
              tincidunt tincidunt. Donec nec felis sit amet metus aliquam
              aliquam. Nullam nec eros nec nulla sagittis fringilla. Aenean vel
              nulla eu sem tincidunt tincidunt. Donec nec felis sit amet metus
              aliquam aliquam.
            </motion.p>
            <ul className="grid my-5 grid-cols-1 lg:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn("down", 0.2 * index)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex flex-row justify-start items-center gap-3"
                >
                  <FaCheck className="bg-slate-700 text-white dark:text-slate-200 dark:bg-slate-800 rounded-full p-2 flex flex-col justify-center items-center w-6 h-6" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              variants={zoomIn("default", 0.7, 0.2)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.7 }}
              className="mt-5"
            >
              <Link className="btn btn-primary !rounded-full" href="/about">
                Download Resume{" "}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
