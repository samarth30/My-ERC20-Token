import React, { useState } from "react";
import tokenLogo from "../token-logo.png";
import ethLogo from "../eth-logo.png";

const BuyForm = ({ ethBalance, tokenBalance, buyTokens }) => {
  const [output, setOutput] = useState("0");
  const [etherAmount, setEtherAmount] = useState("0");

  const onChange = (e) => {
    e.preventDefault();
    setEtherAmount(e.target.value);
    setOutput(e.target.value * 100);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    buyTokens(window.web3.utils.toWei(etherAmount, "Ether"));
  };

  return (
    <form className="mb-3" onSubmit={onSubmit}>
      <div>
        <label className="float-left">
          <b>Input</b>
        </label>
        <span className="float-right text-muted">
          Balance: {window.web3.utils.fromWei(ethBalance, "Ether")}
        </span>
      </div>
      <div className="input-group mb-4">
        <input
          type="text"
          name="txt-input"
          onChange={onChange}
          className="form-control form-control-lg"
          placeholder="0"
          required
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <img src={ethLogo} height="32" alt="" />
            &nbsp;&nbsp;&nbsp; ETH
          </div>
        </div>
      </div>
      <div>
        <label className="float-left">
          <b>Output</b>
        </label>
        <span className="float-right text-muted">
          Balance: {window.web3.utils.fromWei(tokenBalance, "Ether")}
        </span>
      </div>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="0"
          value={output}
          disabled
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <img src={tokenLogo} height="32" alt="" />
            &nbsp; DApp
          </div>
        </div>
      </div>
      <div className="mb-5">
        <span className="float-left text-muted">Exchange Rate</span>
        <span className="float-right text-muted">1 ETH = 100 DApp</span>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-lg">
        SWAP!
      </button>
    </form>
  );
};

export default BuyForm;
