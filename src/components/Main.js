import React, { useState } from "react";
import BuyForm from "./BuyForm";
import SellForm from "./SellForm";

const Main = ({ ethBalance, tokenBalance, buyTokens, sellTokens }) => {
  const [currentForm, setcurrentForm] = useState("buy");

  let content;
  if (currentForm === "buy") {
    content = (
      <BuyForm
        ethBalance={ethBalance}
        tokenBalance={tokenBalance}
        buyTokens={buyTokens}
      />
    );
  } else {
    content = (
      <SellForm
        ethBalance={ethBalance}
        tokenBalance={tokenBalance}
        sellTokens={sellTokens}
      />
    );
  }

  return (
    <div id="content" className="mt-3">
      <div className="d-flex justify-content-between mb-3">
        <button
          className="btn btn-light"
          onClick={(event) => {
            setcurrentForm("buy");
          }}
        >
          Buy
        </button>
        <span className="text-muted">&lt; &nbsp; &gt;</span>
        <button
          className="btn btn-light"
          onClick={(event) => {
            setcurrentForm("sell");
          }}
        >
          Sell
        </button>
      </div>

      <div className="card mb-4">
        <div className="card-body">{content}</div>
      </div>
    </div>
  );
};

export default Main;
