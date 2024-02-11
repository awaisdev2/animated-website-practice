import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#1F2544] text-sm py-4">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <a className="flex-none text-gray-300 text-xl font-semibold" href="/">
            Animated Website
          </a>
          <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="font-medium bg-[#81689D] px-4 py-3 cursor-pointer rounded text-gray-300 hover:text-gray-50"
            >
              Home
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="font-medium hover:bg-[#81689D] px-4 py-3 cursor-pointer rounded text-gray-300 hover:text-gray-50"
            >
              Account
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="font-medium hover:bg-[#81689D] px-4 py-3 cursor-pointer rounded text-gray-300 hover:text-gray-50"
            >
              Work
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="font-medium hover:bg-[#81689D] px-4 py-3 cursor-pointer rounded text-gray-300 hover:text-gray-50"
            >
              Blog
            </motion.div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
