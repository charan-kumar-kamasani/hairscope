import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FingerPrintIcon, XCircleIcon } from "@heroicons/react/24/solid";
import {
  batterImg,
  cross,
  excerciseImage,
  projectsImage,
  time_spentImage,
} from "../assets";

const Modal = ({ show, onClose, onLogin, onUnlockComplete }) => {
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [password, setPassword] = useState("");

  const handleEnter = () => {
    const success = onLogin(password);
    if (success) {
      setIsUnlocking(true);
      setTimeout(() => {
        setIsUnlocking(false);
        onUnlockComplete();
      }, 1600);
    }
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-50 flex overflow-hidden"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          initial={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <AnimatePresence>
            {/* left door */}
            {!isUnlocking && (
              <motion.div
                key="left"
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-1/2"
              >
                <div className="w-full h-full border border-white/30 p-1">
                  <div className="flex items-center w-full h-full border border-white/20">
                    <div className="w-[80%] flex items-center justify-center mx-auto">
                      <div className="p-6 rounded-lg text-left w-full max-w-md ">
                        <h2 className="text-2xl font-bold text-white mb-2">
                          JAVA
                        </h2>
                        <p className="text-gray-500 mb-4 text-[14px] font-semibold">
                          This course is provisioned by{" "}
                          <span className="text-white font-bold text-xs">
                            Zicops Labs
                          </span>
                        </p>
                        <ul className="flex mb-6 list-disc list-inside text-sm text-gray-300 font-medium">
                          <li className="mr-6 ">Labs</li>
                          <li className="mr-6">Excercise</li>
                          <li>Do it Yourself</li>
                        </ul>

                        <div className="space-y-8 ml-4">
                          <div className="flex">
                            <div className="w-16 h-16 border border-white/30 p-1 flex items-center justify-center">
                              <img
                                src={excerciseImage}
                                alt="Exercise"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                            <div>
                              <h2 className="text-lg font-semibold text-white ml-4">
                                Exercise
                              </h2>
                              <div className="flex justify-end items-baseline">
                                <p className="text-cyan-300 ml-4 text-4xl font-bold">
                                  9
                                </p>
                                <p className="ml-2 text-[14px] text-gray-500">
                                  Completed out of 84
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex">
                            <div className="w-16 h-16 border border-white/30 p-1 flex items-center justify-center">
                              <img
                                src={projectsImage}
                                alt="Projects"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                            <div>
                              <h2 className="text-lg font-semibold text-white ml-4">
                                Projects
                              </h2>
                              <div className="flex justify-end items-baseline">
                                <p className="text-cyan-300 ml-4 text-4xl font-bold">
                                  2
                                </p>
                                <p className="ml-2 text-[14px] text-gray-500">
                                  Completed out of 84
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex">
                            <div className="w-16 h-16 border border-white/30 p-1 flex items-center justify-center">
                              <img
                                src={time_spentImage}
                                alt="Time Spent"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                            <div>
                              <h2 className="text-lg font-semibold text-white ml-4">
                                Time Spent
                              </h2>
                              <div className="flex justify-end items-baseline">
                                <p className="text-cyan-300 ml-4 text-4xl font-bold">
                                  5
                                </p>
                                <p className="ml-2 text-[14px] text-gray-500">
                                  Completed out of 84
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* right door */}
            {!isUnlocking && (
              <motion.div
                key="right"
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-1/2 relative"
              >
                <div className="w-full h-full border border-white/30 p-1">
                  <div className="flex items-center justify-center w-full h-full border border-white/20 relative">
                    {/* Close (Cross) Icon */}
                    <button
                      onClick={onClose}
                      className="absolute top-8 right-13 z-50"
                    >
                      <img
                        src={cross}
                        alt="Close"
                        className="w-16 h-12 cursor-pointer hover:opacity-80 transition"
                      />
                    </button>

                    <div className="w-[80%] flex flex-col items-center justify-center text-center mx-auto">
                      <img src={batterImg} className="h-72 mb-4" />
                      <p className="text-cyan-300 text-3xl font-bold">
                        50 mins left
                      </p>
                      <p className="text-[14px] text-gray-500">out of 60</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            initial={{ scale: 1, opacity: 1, rotate: 0 }}
            animate={
              isUnlocking
                ? { scale: 0.5, opacity: 0, rotate: 720 }
                : { scale: 1, opacity: 1, rotate: 0 }
            }
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="w-72 h-72 rounded-full bg-black border-4 border-white shadow-2xl flex flex-col items-center justify-center px-6 py-4 space-y-2 overflow-hidden text-center">
              <FingerPrintIcon className="w-12 h-12 text-cyan-300" />
              <label htmlFor="password" className="text-cyan-200 text-sm mt-2">
                Enter your zicops password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 px-3 py-1.5 text-sm border text-cyan-200 border-cyan-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <button
                onClick={handleEnter}
                className="w-3/4 h-10 px-3 py-1.5 text-sm bg-cyan-300 text-black rounded"
              >
                Enter Lab
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
