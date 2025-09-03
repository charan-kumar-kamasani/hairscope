import { useState, useEffect, useRef } from "react";
import Modal from "../components/Modal";
import CustomAlert from "../components/CustomAlert";

const LabAccessPortal = () => {
  const [showModal, setShowModal] = useState(true);
  const [isInsideLab, setIsInsideLab] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(6);
  const [hasExhausted, setHasExhausted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const timerRef = useRef(null);

  const correctPassword = "Because@2025";

  useEffect(() => {
    if (isInsideLab && !hasExhausted) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);

            if (!hasExhausted) {
              setHasExhausted(true);
              setIsInsideLab(false);
              setError("Your allocated time has been exhausted.");
              setShowAlert(true);
            }

            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isInsideLab, hasExhausted]);

  const handleLogin = (password) => {
    if (hasExhausted) {
      setError("Your allocated time has been exhausted.");
      setShowAlert(true);
      return false;
    }

    if (password === correctPassword) {
      setError("");
      return true;
    } else {
      setError("Incorrect password.");
      setShowAlert(true);
      return false;
    }
  };

  const handleUnlockComplete = () => {
    setIsInsideLab(true);
    setShowModal(false);
  };

  const handleExit = () => {
    clearInterval(timerRef.current);
    setIsInsideLab(false);
    setShowModal(true);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center text-white bg-black">
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onLogin={handleLogin}
        error={error}
        disabled={hasExhausted}
        onUnlockComplete={handleUnlockComplete}
      />

      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome to the Lab</h1>
        <p className="text-xl text-cyan-300">
          Time Remaining: {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </p>
        <button
          onClick={handleExit}
          className="px-6 py-2 bg-red-500 rounded hover:bg-red-600 transition"
        >
          Exit
        </button>
      </div>

      <CustomAlert
        message={error}
        show={showAlert}
        onClose={() => {
          setShowAlert(false);
          if (hasExhausted) setShowModal(true);
        }}
      />
    </div>
  );
};

export default LabAccessPortal;
