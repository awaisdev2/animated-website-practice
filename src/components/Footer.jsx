import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "./media/logo.png";

const Footer = () => {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ x: -100, opacity: 0 }}
          className="mr-auto place-self-center lg:col-span-7"
        >
          <footer className="bg-[#1F2544] shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/">
                  <img src={logo} className="h-8" alt="Flowbite Logo" />
                </a>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center">
                © 2023{" "}
                <a href="/" className="hover:underline">
                  Awais Dev™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </footer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Footer;
