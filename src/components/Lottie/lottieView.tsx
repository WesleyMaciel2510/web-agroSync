/* import React from "react";
import Lottie from "react-lottie";

interface Props {
  animationData: any;
  loopingActive: boolean;
  width?: number;
  height?: number;
}

const LottieView: React.FC<Props> = ({
  animationData,
  loopingActive,
  height,
  width,
}) => {
  const defaultOptions = {
    loop: loopingActive,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={height ? height : 400}
        width={width ? width : 400}
      />
    </div>
  );
};

export default LottieView;
 */
