import React, { useState } from "react";
import useStable from "useStable";

const useIsPristineValue = (value, initialPristineValue) => {
  const [isPristine, setIsPristine] = useState(initialPristineValue);
  const currentValue = useStable(() => value);
  if (isPristine && value !== currentValue) {
    setIsPristine(false);
  }
  return isPristine;
};

export default useIsPristineValue;