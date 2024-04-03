import React from "react";
import pharrow from "../Assets/images2/ph_arrow-down.png";
import phquestion from "../Assets/images2/ph_question.png";
import { Link } from "react-router-dom";
import MyNavbar from "../Component/MyNavbar";
import SwapComponent2 from "../Dropdown/SwapComponent2";
import PricesShare from "./PricesShare";
import TradePair from "./TradePair";


const CreatePair = () => {
  return (
    <>
      <MyNavbar />
      <div className="jRlUBU mt-4">
        <div className="khwJOa glassmorphism mt-2  p-4 py-3">
          <div className="swapoption d-flex justify-content-between mt-3 align-items-center">
            <Link to='/pool'>  <img src={pharrow} style={{ height: "20px", width: "20px" }} alt="" /></Link>
            <button className="swaptext">Create a Pair</button>
            <img
              src={phquestion}
              style={{ height: "20px", width: "20px" }}
              alt=""
            />
          </div>
          <SwapComponent2 />
          <PricesShare />
          <div className="d-flex mt-3" style={{ gap: '0px 10px' }}>
            <button className="connect-button" style={{ width: '225px' }}>
              Approve Token 1
            </button>
            <button className="connect-button " style={{ width: '225px' }}>
              Approve Token 2
            </button>
          </div>

          <button className="invalid-pair morphism mt-2 mb-2 " style={{ width: "100%" }}>
            <p className="invalid-pair-text " >Invalid Pair</p>
          </button>
        </div>
        <TradePair />
      </div>
    </>
  );
};

export default CreatePair;
