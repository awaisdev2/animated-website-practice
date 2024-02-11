import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import chatImgGif from "./media/speech-bubble.gif";
import chatImg from "./media/speech-bubble.png";
import FbImgGif from "./media/letter-f.gif";
import FbImg from "./media/letter-f.png";
import catImgGif from "./media/cat.gif";
import catImg from "./media/cat.png";
import avatar from "./media/avatar3.png";

const HeroSection = () => {
  const [isHoverChat, setIsHoverChat] = React.useState(false);
  const [isHoverFb, setIsHoverFb] = React.useState(false);
  const [isHoverCat, setIsHoverCat] = React.useState(false);
  return (
    <div>
      <section className="bg-[#474F7A]">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <AnimatePresence>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ x: -100, opacity: 0 }}
              className="mr-auto place-self-center lg:col-span-7"
            >
              <h1 className="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                My name is Muhammad Awais
              </h1>
              <p className="max-w-2xl font-light text-gray-200 md:text-lg lg:text-xl">
                I'm a Frontend Developer with two years of experience in creating modern, animated and
                responsive web pages I'm an expert in HTML, CSS, JS/TS,
                Bootstrap, Tailwind CSS, Semantic UI and React.
              </p>
              <div className="flex mt-6">
                <a
                  href="https://instagram.com/awais_dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="font-medium h-12 flex items-center justify-center flex-col bg-[#FFD0EC] m-2 px-4 py-3 cursor-pointer rounded text-gray-800"
                    onMouseEnter={() => setIsHoverChat(true)}
                    onMouseLeave={() => setIsHoverChat(false)}
                  >
                    {isHoverChat ? (
                      <img
                        className="h-9"
                        style={{ mixBlendMode: "multiply" }}
                        src={chatImgGif}
                        alt="img"
                      />
                    ) : (
                      <img className="h-8" src={chatImg} alt="img" />
                    )}
                  </motion.div>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100084660172027"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="font-medium bg-[#FFD0EC] h-12 flex items-center justify-center m-2 px-4 py-3 cursor-pointer rounded text-gray-800"
                    onMouseEnter={() => setIsHoverFb(true)}
                    onMouseLeave={() => setIsHoverFb(false)}
                  >
                    {isHoverFb ? (
                      <img
                        className="h-9"
                        style={{ mixBlendMode: "multiply" }}
                        src={FbImgGif}
                        alt="img"
                      />
                    ) : (
                      <img className="h-8" src={FbImg} alt="img" />
                    )}
                  </motion.div>
                </a>
                <a
                  href="https://github.com/awaisdev2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="font-medium bg-[#FFD0EC] h-12 flex items-center justify-center m-2 px-4 py-3 cursor-pointer rounded text-gray-800"
                    onMouseEnter={() => setIsHoverCat(true)}
                    onMouseLeave={() => setIsHoverCat(false)}
                  >
                    {isHoverCat ? (
                      <img
                        className="h-9"
                        style={{ mixBlendMode: "multiply" }}
                        src={catImgGif}
                        alt="img"
                      />
                    ) : (
                      <img className="h-8" src={catImg} alt="img" />
                    )}
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={avatar}
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
