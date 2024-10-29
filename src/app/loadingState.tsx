import React from "react";
import { Lottie } from "lottie-react";
import animationData from "./Animation.json"; // Update with your animation path

const Loading = () => {
  return (
    <div style={{ width: "200px", margin: "0 auto" }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Loading;
