import { useEffect, useState } from "react";
import { useBetween } from "use-between";

export const useStateVariables = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState("DRIVER");

  return {
    isLoading,
    setIsLoading,
    userType,
    setUserType,
  };
};

export const useSharedState = () => useBetween(useStateVariables);

export const useInit = () => {
  useEffect(() => {
    console.log("chamou useInit");
  }, []);
};
