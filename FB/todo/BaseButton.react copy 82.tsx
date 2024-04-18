__d("useGlobalKeyCommands", ["CometGlobalKeyCommandWidget"], (function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("CometGlobalKeyCommandWidget").useKeyCommands
}), 98);


import { useKeyCommands } from 'CometGlobalKeyCommandWidget';

const useGlobalKeyCommands = () => {
  return useKeyCommands();
};

export default useGlobalKeyCommands;