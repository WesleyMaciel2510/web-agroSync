import { useEffect, useState } from "react";
import { useBetween } from "use-between";

export const useStateVariables = () => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading,
    setIsLoading,
  };
};

export const useSharedState = () => useBetween(useStateVariables);

export const useInit = () => {
  useEffect(() => {
    console.log("chamou useInit");
  }, []);
};
