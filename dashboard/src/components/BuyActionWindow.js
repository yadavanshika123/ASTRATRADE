import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleActionClick = async () => {
    if (mode === "SELL") {
      try {
        // 1. Get existing holdings for this stock
        const res = await axios.get("http://localhost:3002/allHoldings");
        const filteredHoldings = res.data.filter(item => item.name === uid);

        // 2. Calculate total qty available
        const totalQty = filteredHoldings.reduce((acc, curr) => acc + curr.qty, 0);

        // 3. Check if enough quantity is available
        if (stockQuantity > totalQty) {
          alert("Not enough quantity available to sell.");
          return;
        }

        // 4. Add SELL order
        await axios.post("http://localhost:3002/newOrder", {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        });

        // Done
        GeneralContext.closeBuyWindow();
      } catch (err) {
        console.error("Error while selling:", err);
        alert("Sell failed. Try again.");
      }
    } else {
      // mode === "BUY"
      try {
        // 1. Add BUY order
        await axios.post("http://localhost:3002/newOrder", {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        });

        // 2. Add new Holding (even if same name exists)
        await axios.post("http://localhost:3002/newHolding", {
          name: uid,
          qty: stockQuantity,
          avg: stockPrice,
          price: stockPrice,
          net: "+0.00%",
          day: "+0.00%",
          isLoss: false,
        });

        // Done
        GeneralContext.closeBuyWindow();
      } catch (err) {
        console.error("Error while buying:", err);
        alert("Buy failed. Try again.");
      }
    }
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0.01"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleActionClick}>
            {mode === "SELL" ? "Sell" : "Buy"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
