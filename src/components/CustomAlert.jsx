import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomAlert = ({ message, show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
        >
          <div className="bg-black border border-white p-6 rounded-lg w-80 text-center space-y-4">
            <p className="text-white font-semibold">{message}</p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-cyan-300 text-black rounded hover:bg-cyan-400 transition"
            >
              OK
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomAlert;
