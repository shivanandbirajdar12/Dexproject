import React, { useState } from 'react';
import '../Assets/CSS/overview.css';
import OverviewTable1 from './OverviewTable1';
import sampleImage from '../Assets/Exploregraph1.png'
import sampleImage1 from '../Assets/Exploregraph2.png'
import OverviewTable2 from './OverviewTable2';
import forwardarrow from '../Assets/images2/iconamoon_arrow-up-2-thin (3).png'
const Overview = () => {
    const [timeFrameClass, setTimeFrameClass] = useState({
        D: 'd-wrapper',
        W: 'w-wrapper',
        p: 'd-wrapper',
        q: 'w-wrapper',
        r: 'w-wrapper',
        s: 'w-wrapper',
        t: 'w-wrapper',

    });

    const handleTimeFrameClick = (timeFrame) => {
        const updatedClass = Object.fromEntries(
            Object.entries(timeFrameClass).map(([key, value]) => [key, key === timeFrame ? 'd-wrapper' : 'w-wrapper'])
        );

        setTimeFrameClass(updatedClass);
    };
    return (
        <div>
            <div className='container mt-3  d-flex  '>
                <div className='row justify-content-between  '>
                    <div className='col glassmorphism m-3'>
                        <div className='d-flex align-items-start justify-content-between  '>
                            <div >
                                <p className='m-0 p-0' style={{ fontSize: '16px', color: '#C7CAD9' }}>Liquidity</p>
                                <div className='d-flex align-items-center'>
                                    <b className="m" >$104.8M</b>
                                    <div className="parent1 ms-2 px-2">
                                        <b className="b">1.313%</b>
                                    </div>
                                </div>
                                <p className='m-0 p-0' style={{ fontSize: '16px', color: '#C7CAD9' }}>Feb 28 2024</p>
                            </div>
                            <div className="parent-frame ">
                                <button className={timeFrameClass.p} onClick={() => handleTimeFrameClick('p')}>
                                    1M
                                </button>
                                <button className={timeFrameClass.q} onClick={() => handleTimeFrameClick('q')}>
                                    3M
                                </button>
                                <button className={timeFrameClass.r} onClick={() => handleTimeFrameClick('r')}>
                                    5M
                                </button>
                                <button className={timeFrameClass.s} onClick={() => handleTimeFrameClick('s')}>
                                    1Y
                                </button>
                                <button className={timeFrameClass.t} onClick={() => handleTimeFrameClick('t')}>
                                    All
                                </button>
                            </div>
                        </div>
                        <img src={sampleImage} alt="Sample Alt Text" className="img-fluid " />
                    </div>
                    <div className='col glassmorphism m-3   '>

                        <div className='d-flex align-items-start justify-content-between  px-3'>
                            <p className='mb-0 align-items-center ' style={{ fontSize: '16px', color: '#C7CAD9' }}>Volume(24hr)</p>
                            <div className="parent-frame ">
                                <button className={timeFrameClass.D} onClick={() => handleTimeFrameClick('D')}>
                                    D
                                </button>
                                <button className={timeFrameClass.W} onClick={() => handleTimeFrameClick('W')}>
                                    W
                                </button>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-between m-0 px-3'>
                            <div className='d-flex align-items-center m-0 p-0'>
                                <b className="m ">$104.8M</b>
                                <div className="parent2 ms-2  px-2">
                                    <b className="b">1.313%</b>
                                </div>
                            </div>
                            <div className="parent-frame ">
                                <button className={timeFrameClass.p} onClick={() => handleTimeFrameClick('p')}>
                                    1M
                                </button>
                                <button className={timeFrameClass.q} onClick={() => handleTimeFrameClick('q')}>
                                    3M
                                </button>
                                <button className={timeFrameClass.r} onClick={() => handleTimeFrameClick('r')}>
                                    5M
                                </button>
                                <button className={timeFrameClass.s} onClick={() => handleTimeFrameClick('s')}>
                                    1Y
                                </button>
                                <button className={timeFrameClass.t} onClick={() => handleTimeFrameClick('t')}>
                                    All
                                </button>
                            </div>
                        </div>

                        <img src={sampleImage1} style={{ marginTop: '80px' }} alt="Sample Alt Text" className="img-fluid " />
                    </div>
                </div>
            </div>
            <div className=' container d-flex  mt-3 align-items-center justify-content-start' style={{ backgroundColor: 'rgba(15, 39, 51, 0.7)', height: '46px', borderRadius: '15px' }}>
                <div className="d-flex ms-3 " style={{gap:'0px 40px'}}>
                    <div className="d-flex " style={{gap:'0px 8px'}}>
                        <p className="parent m-0">24H Volume: $118,403,423.497</p>
                        <div className="wrapper">
                            <b className="b">+0.962%</b>
                        </div>
                    </div>
                    <div className="d-flex  " style={{gap:'0px 8px'}}>
                        <p className="parent m-0">24h Fees: $78,608.634</p>
                        <div className="wrapper ">
                            <b className="b ">-9.894%</b>
                        </div>
                    </div>
                </div>


            </div>
            <div className='container d-flex align-items-center  justify-content-between mt-4' >
                <p className='m-0 top-tokens'>Top Tokens</p>
                <p className='m-0 see-all'>
                    See All
                    <span className='pagination-icon'><img src={forwardarrow} style={{ height: '16px', width: '16px' }} className='ms-2' alt='Pagination' /></span>
                </p>
            </div>
            <OverviewTable1 />
            <div className='container d-flex align-items-center justify-content-between mt-4' >
                <p className='m-0 top-tokens'>Top Pairs</p>
                <p className='m-0 see-all'>
                    See All
                    <span className='pagination-icon'><img src={forwardarrow} style={{ height: '16px', width: '16px' }} className='ms-2' alt='Pagination' /></span>
                </p>
            </div>

            < OverviewTable2 />

        </div>
    )
}

export default Overview
