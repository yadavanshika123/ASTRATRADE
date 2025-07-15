import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider, GeneralContext } from "./GeneralContext";
import BuyActionWindow from "./BuyActionWindow"; 

const BuySellWrapper = () => {
  const { showBuyWindow, showSellWindow, selectedStock } = useContext(GeneralContext);
  return (
    <>
      {showBuyWindow && <BuyActionWindow uid={selectedStock} mode="BUY" />}
      {showSellWindow && <BuyActionWindow uid={selectedStock} mode="SELL" />}
    </>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />

        {/* 👇 Add here, just after WatchList */}
        <BuySellWrapper />

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;
