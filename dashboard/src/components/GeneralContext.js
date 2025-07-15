import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [actionMode, setActionMode] = useState("BUY");

  const handleOpenBuyWindow = (uid) => {
    setIsWindowOpen(true);
    setSelectedStockUID(uid);
    setActionMode("BUY");
  };

  const handleOpenSellWindow = (uid) => {
    setIsWindowOpen(true);
    setSelectedStockUID(uid);
    setActionMode("SELL");
  };

  const handleCloseWindow = () => {
    setIsWindowOpen(false);
    setSelectedStockUID("");
    setActionMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeBuyWindow: handleCloseWindow,
      }}
    >
      {props.children}
      {isWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} mode={actionMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
export { GeneralContext };
