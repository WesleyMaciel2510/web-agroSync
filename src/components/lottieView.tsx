import React from "react";
import Lottie from "lottie-react";
//import animationData from "../assets/Animations/home.json";

interface Props {
  animationData: object | null;
  loopingActive: boolean;
  width?: number;
  height?: number;
}

const LottieView: React.FC<Props> = ({
  animationData,
  //loopingActive,
  height,
  width,
}) => {
  const rendererSettings = {
    preserveAspectRatio: "xMidYMid slice",
  };

  return (
    <div style={{ height: height || 200, width: width || 200 }}>
      <Lottie
        animationData={animationData}
        loop={false}
        //autoplay={true}
        rendererSettings={rendererSettings}
      />
    </div>
  );
};

export default LottieView;
