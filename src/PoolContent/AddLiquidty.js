import React from "react";
import pharrow from "../Assets/images2/ph_arrow-down.png";
import phquestion from "../Assets/images2/ph_question.png";
import { Link } from "react-router-dom";
import MyNavbar from "../Component/MyNavbar";
import SwapComponent2 from "../Dropdown/SwapComponent2";


const AddLiquidty = (props) => {
  return (
    <>
    <MyNavbar/>
      <div className="jRlUBU mt-4" >
        <div className="khwJOa glassmorphism mt-2 ">
          <div className="swapoption d-flex justify-content-between mt-3 align-items-center">
            <Link to='/pool'>  <img src={pharrow} style={{ height: "20px", width: "20px" }} alt="" /></Link>
            <button className="swaptext">Add Liquidity</button>
            <img
              src={phquestion}
              style={{ height: "20px", width: "20px" }}
              alt=""
            />
          </div>
          <SwapComponent2/>
          <button className="invalid-pair morphism mt-2 " style={{ width: "100%" }}>
            <p className="invalid-pair-text" >Enter an amount</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddLiquidty;
