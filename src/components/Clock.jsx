import { defaultTransformValue } from "framer-motion";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update tiap detik

    return () => clearInterval(interval); // bersihkan interval saat komponen unmount
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <span className="font-normal text-md text-gray-600">{formattedTime}</span>
  );
};

export default Clock;
