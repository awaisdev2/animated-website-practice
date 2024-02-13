import React from "react";
import Atropos from "atropos/react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCards = (props) => {
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
          <Atropos className="w-fit" shadowScale={1}>
            <div className="flex m-2 w-fit sm:w-[400px] h-80 overflow-y-scroll flex-col bg-[#81689D] border border-t-4 border-black shadow-sm rounded-xl">
              <div className="p-4 md:p-5">
                <h3 className="sm:text-2xl text-xl font-black text-white">
                  {props.cardTitle}
                </h3>
                <p className="mt-2 text-[#e5e7eb]">{props.cardSubTitle}</p>
              </div>
            </div>
          </Atropos>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectCards;
