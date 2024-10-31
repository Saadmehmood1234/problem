"use client";

import { Typewriter } from "react-simple-typewriter";

const Tanimation = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-center text-black drop-shadow-lg">
        <span className="text-blue-500">Solve</span>{" "}
        <Typewriter
          words={[
            "Challenging Problems with Confidence",
            "Elevate Your Coding Skills",
            "Master Complex Algorithms",
          ]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={30}
             delaySpeed={1200}
     
     />
      </h1>

      <p className="text-md md:text-lg lg:text-xl font-light text-center max-w-3xl mt-6 px-4">
        Engage with our exclusive{" "}
        <span className="text-blue-500 font-bold drop-shadow-lg">
          problem-solving challenges
        </span>{" "}
        that are designed to boost your coding capabilities and deepen your technical knowledge.
      </p>
    </div>
  );
};

export default Tanimation;
