import { useEffect, useState } from "react";
import { useBetween } from "use-between";
import { getPictures } from "../../../services/pictures";

export const useStateVariables = () => {
  const [hasImg, setHasImg] = useState<boolean[]>([]);
  const [img, setImg] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  return {
    hasImg,
    setHasImg,
    img,
    setImg,
    searchValue,
    setSearchValue,
  };
};

export const useSharedState = () => useBetween(useStateVariables);

export const useInit = () => {
  //const IDTYPE = "SCHEDULINGID";
  const IDTYPE = "LOADID";
  const amountOfPictures = 5;
  const { setHasImg, setImg } = useSharedState();
  useEffect(() => {
    const LoadImage = async () => {
      for (let i = 0; i < amountOfPictures; i++) {
        console.log("IDTYPE = ", typeof IDTYPE);
        console.log("i = ", typeof i);
        const result = await getPictures(IDTYPE, i);
        if (result?.success) {
          console.log("result = ", result);
          setHasImg((prevHasImg) => [...prevHasImg, true]);
          console.log("result data = ", result.data);
          console.log(
            "@@@ typeof @ result.data.IMGBASE64 = ",
            typeof result.data.IMGBASE64
          );

          if (typeof result.data.IMGBASE64 === "string") {
            setImg((prevImg) => [...prevImg, result.data.IMGBASE64]);
          } else {
            console.log("ImageBase64 AMOUNT = ", result.data.IMGBASE64);
            setImg((prevImg) => [...prevImg, result.data.IMGBASE64[0]]);
          }
        } else {
          setHasImg((prevHasImg) => [...prevHasImg, false]);
          setImg((prevImg) => [...prevImg, ""]);
        }
      }
    };
    LoadImage();
  }, [setHasImg, setImg]);
};
