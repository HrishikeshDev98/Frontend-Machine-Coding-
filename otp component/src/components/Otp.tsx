import { useEffect, useRef, useState } from "react";

const Otp = ({ numberOfInputs = 6 }) => {
  const [values, setValues] = useState(Array(numberOfInputs).fill(""));

  const itemsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    itemsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const pastedData = e.clipboardData?.getData("text") ?? "";
      if (pastedData.length === numberOfInputs && /^\d+$/.test(pastedData)) {
        const chars = pastedData.split("");
        setValues(chars);
        itemsRef.current[numberOfInputs - 1]?.focus();
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, [numberOfInputs]);

  useEffect(() => {
    const handleNavigation = (e: KeyboardEvent) => {
      const index = itemsRef.current.findIndex(
        (item) => item === document.activeElement,
      );

      if (index === -1) return;

      if (e.key === "ArrowLeft" && index > 0) {
        itemsRef.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < numberOfInputs - 1) {
        itemsRef.current[index + 1]?.focus();
      }
    };

    window.addEventListener("keydown", handleNavigation);
    return () => {
      window.removeEventListener("keydown", handleNavigation);
    };
  }, []);

  const handleInputChange = ({
    e,
    index,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    index: number;
  }) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      setValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index] = value;
        return newValues;
      });
      itemsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Backspace") return;

    const index = itemsRef.current.findIndex((item) => item === e.target);
    if (index === -1) return;

    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = "";
      return newValues;
    });

    if (index > 0) {
      itemsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-center items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 max-w-fit mx-auto">
      {Array.from({ length: numberOfInputs }).map((_, index) => (
        <input
          key={index}
          type="text"
          value={values[index]}
          maxLength={1}
          onKeyDown={handleKeyDown}
          ref={(el) => {
            itemsRef.current[index] = el;
          }}
          onChange={(e) => handleInputChange({ e, index })}
          className="w-12 h-14 text-center text-xl font-semibold text-gray-800 bg-gray-50 border-2 border-gray-200 rounded-xl transition-all duration-200 ease-in-out focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none"
        />
      ))}
    </div>
  );
};

export default Otp;
