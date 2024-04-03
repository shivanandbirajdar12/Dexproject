import React from 'react'
import pharrow from "../Assets/images2/ph_arrow-down.png";
import phquestion from "../Assets/images2/ph_question.png";
import plus from "../Assets/images2/tdesign_swap.png";
import MyNavbar from '../Component/MyNavbar';
import { Link } from 'react-router-dom';

const ImportPool = () => {

    
    return (
        <>
            <MyNavbar/>
            <div className="d-flex col-md-4 col-sm-4 mx-auto mt-4  py-3 glassmorphism  align-items-center flex-column" style={{ border: " 1px solid #646464",boxShadow:'7px 66px 57.900001525878906px 0px rgba(0, 0, 0, 0.2)'}}>
                <div className="swapoption d-flex justify-content-between mt-3 align-items-center">

                <Link to='/pool'> <img src={pharrow} style={{ height: "20px", width: "20px" }} alt="" /></Link>
                    <button className="swaptext">Import Pool</button>
                    <img
                        src={phquestion}
                        style={{ height: "20px", width: "20px" }}
                        alt=""
                    />
                </div>
                <div className='swapoption import-pool-parent morphism d-flex justify-content-between align-items-center px-3 mt-2'>
                    <div>
                        <img src="./images/sprint.png" height="23px" width="23px" alt="" />
                        <span className="text-light ms-2">ETH</span>
                    </div>
                    <img
                        src="/images/dropdown.png"
                        height="23px"
                        width="23px"
                        alt=""
                    />
                </div >
                <div className='swapoption d-flex justify-content-center align-items-center'>
                    <button className="px-1">
                        <img
                            src={plus}
                            className="p-1"
                            height="36px"
                            width="36px"
                            alt=""
                        />
                    </button>
                </div>
                <div className='swapoption import-pool-parent morphism d-flex justify-content-between align-items-center px-3 '>
                    <div>
                        <span className="text-light ms-2">Select a Token</span>
                    </div>
                    <img
                        src="/images/dropdown.png"
                        height="23px"
                        width="23px"
                        alt=""
                    />
                </div >
                <div className='swapoption mb-4 import-pool-parent d-flex justify-content-center morphism mt-2 p-4 align-items-center'>
                    <span className='select-a-token'>Select a token to find your liquidity</span>
                </div>
            </div>
        </>
    )
}

export default ImportPool
