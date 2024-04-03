// import React, { useState } from 'react';
// import swapbutton from '../Assets/images2/swapbutton1.png';
// import PlusComponent from './PlusComponent';
// import { Modal } from 'react-bootstrap';
// import SelectToken from './SelectToken';

// const SwapComponent = (props) => {
//     const [showModal, setShowModal] = useState(false);
//     const [selectedButtonId, setSelectedButtonId] = useState(null);

//     // States for the first button
//     const [selectedTokenImage1, setSelectedTokenImage1] = useState('');
//     const [selectedTokenTicker1, setSelectedTokenTicker1] = useState('');

//     // States for the second button
//     const [selectedTokenImage2, setSelectedTokenImage2] = useState('');
//     const [selectedTokenTicker2, setSelectedTokenTicker2] = useState('');

//     const openModal = (buttonId) => {
//         setShowModal(true);
//         setSelectedButtonId(buttonId);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     const handleTokenSelect = (image, ticker) => {
//         if (selectedButtonId === 1) {
//             setSelectedTokenImage1(image);
//             setSelectedTokenTicker1(ticker);
//         } else if (selectedButtonId === 2) {
//             setSelectedTokenImage2(image);
//             setSelectedTokenTicker2(ticker);
//         }
//         closeModal(); 
//     };

//     const isTokenSelectedForButton = (buttonId) => {
//         return buttonId === 1 ? !!selectedTokenImage1 && !!selectedTokenTicker1 : !!selectedTokenImage2 && !!selectedTokenTicker2;
//     };

//     return (
//         <div>
//             <div id='swap-page' className='mt-3'>
//                 <div className='enpFfZ '>
//                     <div className='iUsjHb mt-3 hhoFBL1 p-2 morphism'>
//                         <div className='d-flex' style={{ gap: '0 140px' }}>
//                             <div className='hhoFBL p-2'>
//                                 <p className='m-0 text-light ms-2'>You pay</p>
//                                 <input type='text' className='currency-input' placeholder='0' />
//                             </div>
//                             <div className='text-light d-flex flex-column align-item-center justify-content-center'>
//                                 <button className='max-parent max-parent-swap my-0'>
//                                     <p className='max my-0'>MAX</p>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='me-2 mt-2'>
//                             <button className='we' type='button' onClick={() => openModal(1)} disabled={isTokenSelectedForButton(1)}>
//                                 <img
//                                     src={selectedTokenImage1}
//                                     style={{ height: '24px', width: '24px', borderRadius: '50%' }}
//                                     alt=''
//                                 />
//                                 <span className='text-light ms-2'>{selectedTokenTicker1}</span>
//                                 <img src='/images/dropdown.png' height='23px' width='23px' alt='' />
//                             </button>
//                             <p className='ms-4 mt-2 mb-0 text-light '>balance: 0</p>
//                         </div>
//                     </div>
//                     <PlusComponent img={swapbutton} />
//                     <div className='iUsjHb morphism hhoFBL1 p-2' id='swapbottom'>
//                         <div className='d-flex' style={{ gap: '0 130px' }}>
//                             <div className='hhoFBL p-2'>
//                                 <p className='m-0 text-light ms-2'>You receive</p>
//                                 <input type='text' className='currency-input' placeholder='0' />
//                             </div>
//                             <div className='text-light d-flex flex-column align-item-center justify-content-center'>
//                                 <button className='max-parent max-parent-swap my-0'>
//                                     <p className='max my-0'>MAX</p>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='me-2 mt-2'>
//                             <button className='ws' type='button' onClick={() => openModal(2)} disabled={isTokenSelectedForButton(2)}>
//                                 <img
//                                     src={selectedTokenImage2}
//                                     style={{ height: '24px', width: '24px', borderRadius: '50%' }}
//                                     alt=''
//                                 />
//                                 <span className='text-light ms-2'>{selectedTokenTicker2}</span>
//                                 <img
//                                     src='/images/dropdown.png'
//                                     height='23px'
//                                     width='23px'
//                                     alt=''
//                                     className='image'
//                                     id='myImage'
//                                 />
//                             </button>
//                             <p className='ms-4 mt-2 mb-0 text-light'>balance: 0</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Modal
//                 show={showModal}
//                 onHide={closeModal}
//                 style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
//                 dialogClassName='modal-dialog-centered'>
//                 <Modal.Body className='p-0 modal-body'>
//                     <SelectToken onSelectToken={handleTokenSelect} />
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default SwapComponent;

// import React, { useState } from 'react';
// import swapbutton from '../Assets/images2/swapbutton1.png';
// import PlusComponent from './PlusComponent';
// import { Modal } from 'react-bootstrap';
// import SelectToken from './SelectToken';

// const SwapComponent = (props) => {
//     const [showModal1, setShowModal1] = useState(false);
//     const [showModal2, setShowModal2] = useState(false);
//     const [selectedTokenImage1, setSelectedTokenImage1] = useState('');
//     const [selectedTokenTicker1, setSelectedTokenTicker1] = useState('');
//     const [selectedTokenImage2, setSelectedTokenImage2] = useState('');
//     const [selectedTokenTicker2, setSelectedTokenTicker2] = useState('');
    

//     const openModal = (buttonId) => {
//         if (buttonId === 1) {
//             setShowModal1(true);
//         } else if (buttonId === 2) {
//             setShowModal2(true);
//         }
//     };

//     const closeModal = (buttonId) => {
//         if (buttonId === 1) {
//             setShowModal1(false);
//         } else if (buttonId === 2) {
//             setShowModal2(false);
//         }
//     };

//     const handleTokenSelect = (image, ticker, buttonId) => {
//         if (buttonId === 1) {
//             if (ticker === selectedTokenTicker2) {
//                 return;
//             }
//             setSelectedTokenTicker1(ticker);
//             setSelectedTokenImage1(image);

//             closeModal(1);
//         } else if (buttonId === 2) {
//             if (ticker === selectedTokenTicker1) {
//                 return;
//             }
//             setSelectedTokenTicker2(ticker);
//             setSelectedTokenImage2(image);

//             closeModal(2);
//         }
//     };

//     const isTokenSelectedForButton = (buttonId) => {
//         if (buttonId === 1) {
//             return !!selectedTokenImage1 && !!selectedTokenTicker1;
//         } else if (buttonId === 2) {
//             return !!selectedTokenImage2 && !!selectedTokenTicker2;
//         }
//     };
    
//     return (
//         <div>
//             <div id='swap-page' className='mt-3'>
//                 <div className='enpFfZ '>
//                     <div className='iUsjHb mt-3 hhoFBL1 p-2 morphism'>
//                         <div className='d-flex' style={{ gap: '0 140px' }}>
//                             <div className='hhoFBL p-2'>
//                                 <p className='m-0 text-light ms-2'>You pay</p>
//                                 <input type='text' className='currency-input' placeholder='0' />
//                             </div>
//                             <div className='text-light d-flex flex-column align-item-center justify-content-center'>
//                                 <button className='max-parent max-parent-swap my-0'>
//                                     <p className='max my-0'>MAX</p>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='me-2 mt-2'>
//                             <button className='we' type='button' onClick={() => openModal(1)} disabled={isTokenSelectedForButton(1)}>
//                                 <img
//                                     src={selectedTokenImage1}
//                                     style={{ height: '24px', width: '24px', borderRadius: '50%' }}
//                                     alt=''
//                                 />
//                                 <span className='text-light ms-2'>{selectedTokenTicker1}</span>
//                                 <img src='/images/dropdown.png' height='23px' width='23px' alt='' />
//                             </button>
//                             <p className='ms-4 mt-2 mb-0 text-light '>balance: 0</p>
//                         </div>
//                     </div>
//                     <PlusComponent img={swapbutton} />
//                     <div className='iUsjHb morphism hhoFBL1 p-2' id='swapbottom'>
//                         <div className='d-flex' style={{ gap: '0 130px' }}>
//                             <div className='hhoFBL p-2'>
//                                 <p className='m-0 text-light ms-2'>You receive</p>
//                                 <input type='text' className='currency-input' placeholder='0' />
//                             </div>
//                             <div className='text-light d-flex flex-column align-item-center justify-content-center'>
//                                 <button className='max-parent max-parent-swap my-0'>
//                                     <p className='max my-0'>MAX</p>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='me-2 mt-2'>
//                             <button className='ws' type='button' onClick={() => openModal(2)} disabled={isTokenSelectedForButton(2)}>
//                                 <img
//                                     src={selectedTokenImage2}
//                                     style={{ height: '24px', width: '24px', borderRadius: '50%' }}
//                                     alt=''
//                                 />
//                                 <span className='text-light ms-2'>{selectedTokenTicker2}</span>
//                                 <img
//                                     src='/images/dropdown.png'
//                                     height='23px'
//                                     width='23px'
//                                     alt=''
//                                     className='image'
//                                     id='myImage'
//                                 />
//                             </button>
//                             <p className='ms-4 mt-2 mb-0 text-light'>balance: 0</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Modal
//                 show={showModal1}
//                 onHide={() => closeModal(1)}
//                 style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
//                 dialogClassName='modal-dialog-centered'>
//                 <Modal.Body className='p-0 modal-body'>
//                     <SelectToken onSelectToken={(image, ticker) => handleTokenSelect(image, ticker, 1)} />
//                 </Modal.Body>
//             </Modal>

//             <Modal
//                 show={showModal2}
//                 onHide={() => closeModal(2)}
//                 style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
//                 dialogClassName='modal-dialog-centered'>
//                 <Modal.Body className='p-0 modal-body'>
//                     <SelectToken onSelectToken={(image, ticker) => handleTokenSelect(image, ticker, 2)} />
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default SwapComponent;
// import React, { useState } from 'react';
// import swapbutton from '../Assets/images2/swapbutton1.png';
// import PlusComponent from './PlusComponent';
// import { Modal } from 'react-bootstrap';
// import SelectToken from './SelectToken';

// const SwapComponent = (props) => {
//     const [showModal1, setShowModal1] = useState(false);
//     const [showModal2, setShowModal2] = useState(false);
//     const [selectedTokenImage1, setSelectedTokenImage1] = useState('');
//     const [selectedTokenTicker1, setSelectedTokenTicker1] = useState('');
//     const [selectedTokenImage2, setSelectedTokenImage2] = useState('');
//     const [selectedTokenTicker2, setSelectedTokenTicker2] = useState('');

//     const openModal = (buttonId) => {
//         if (buttonId === 1) {
//             setShowModal1(true);
//         } else if (buttonId === 2) {
//             setShowModal2(true);
//         }
//     };

//     const closeModal = (buttonId) => {
//         if (buttonId === 1) {
//             setShowModal1(false);
//         } else if (buttonId === 2) {
//             setShowModal2(false);
//         }
//     };

//     const handleTokenSelect = (image, ticker, buttonId) => {
//         if (buttonId === 1) {
//             if (ticker === selectedTokenTicker2) {
//                 return;
//             }
//             setSelectedTokenTicker1(ticker);
//             setSelectedTokenImage1(image);

//             closeModal(1);
//         } else if (buttonId === 2) {
//             if (ticker === selectedTokenTicker1) {
//                 return;
//             }
//             setSelectedTokenTicker2(ticker);
//             setSelectedTokenImage2(image);

//             closeModal(2);
//         }
//     };

//     const isTokenSelectedForButton = (buttonId) => {
//         if (buttonId === 1) {
//             return !!selectedTokenImage1 && !!selectedTokenTicker1;
//         } else if (buttonId === 2) {
//             return !!selectedTokenImage2 && !!selectedTokenTicker2;
//         }
//     };

//     return (
//         <div>
//             <div id='swap-page' className='mt-3'>
//                 <div className='enpFfZ '>
//                     <div className='iUsjHb mt-3 hhoFBL1 p-2 morphism'>
//                         <div className='d-flex' style={{ gap: '0 140px' }}>
//                             <div className='hhoFBL p-2'>
//                                 <p className='m-0 text-light ms-2'>You pay</p>
//                                 <input type='text' className='currency-input' placeholder='0' />
//                             </div>
//                             <div className='text-light d-flex flex-column align-item-center justify-content-center'>
//                                 <button className='max-parent max-parent-swap my-0'>
//                                     <p className='max my-0'>MAX</p>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='me-2 mt-2'>
//                             <button className='we' type='button' onClick={() => openModal(1)} disabled={isTokenSelectedForButton(1)}>
//                                 {selectedTokenImage1 ? (
//                                     <>
//                                         <img
//                                             src={selectedTokenImage1}
//                                             style={{ height: '24px', width: '24px', borderRadius: '50%' }}
//                                             alt=''
//                                         />
//                                         <span className='text-light ms-2'>{selectedTokenTicker1}</span>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <img
//                                             src='./images/sprint.png'
//                                             style={{ height: '24px', width: '24px', borderRadius: '50%' }}
//                                             alt=''
//                                         />
//                                         <span className='text-light ms-2'>ETH</span>
//                                     </>
//                                 )}
//                                 <img src='/images/dropdown.png' height='23px' width='23px' alt='' />
//                             </button>
//                             <p className='ms-4 mt-2 mb-0 text-light '>balance: 0</p>
//                         </div>
//                     </div>
//                     <PlusComponent img={swapbutton} />
//                     <div className='iUsjHb morphism hhoFBL1 p-2' id='swapbottom'>
//                         <div className='d-flex' style={{ gap: '0 130px' }}>
//                             <div className='hhoFBL p-2'>
//                                 <p className='m-0 text-light ms-2'>You receive</p>
//                                 <input type='text' className='currency-input' placeholder='0' />
//                             </div>
//                             <div className='text-light d-flex flex-column align-item-center justify-content-center'>
//                                 <button className='max-parent max-parent-swap my-0'>
//                                     <p className='max my-0'>MAX</p>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className='me-2 mt-2'>
//                             <button className='ws' type='button' onClick={() => openModal(2)} disabled={isTokenSelectedForButton(2)}>
//                                 {selectedTokenImage2 ? (
//                                     <>
//                                         <img
//                                             src={selectedTokenImage2}
//                                             style={{ height: '24px', width: '24px', borderRadius: '50%' }}
//                                             alt=''
//                                         />
//                                         <span className='text-light ms-2'>{selectedTokenTicker2}</span>
//                                     </>
//                                 ) : (
//                                     <>
//                                         Select token
//                                     </>
//                                 )}
//                                 <img
//                                     src='/images/dropdown.png'
//                                     height='23px'
//                                     width='23px'
//                                     alt=''
//                                     className='image'
//                                     id='myImage'
//                                 />
//                             </button>
//                             <p className='ms-4 mt-2 mb-0 text-light'>balance: 0</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Modal
//                 show={showModal1}
//                 onHide={() => closeModal(1)}
//                 style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
//                 dialogClassName='modal-dialog-centered'>
//                 <Modal.Body className='p-0 modal-body'>
//                     <SelectToken onSelectToken={(image, ticker) => handleTokenSelect(image, ticker, 1)} />
//                 </Modal.Body>
//             </Modal>

//             <Modal
//                 show={showModal2}
//                 onHide={() => closeModal(2)}
//                 style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
//                 dialogClassName='modal-dialog-centered'>
//                 <Modal.Body className='p-0 modal-body'>
//                     <SelectToken onSelectToken={(image, ticker) => handleTokenSelect(image, ticker, 2)} />
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default SwapComponent;
import React, { useState } from 'react';
import swapbutton from '../Assets/images2/swapbutton1.png';
import PlusComponent from './PlusComponent';
import { Modal } from 'react-bootstrap';
import SelectToken from './SelectToken';

const SwapComponent = (props) => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [selectedTokenImage1, setSelectedTokenImage1] = useState('');
    const [selectedTokenTicker1, setSelectedTokenTicker1] = useState('');
    const [selectedTokenImage2, setSelectedTokenImage2] = useState('');
    const [selectedTokenTicker2, setSelectedTokenTicker2] = useState('');
    const [button1Style, setButton1Style] = useState({});
    const [button2Style, setButton2Style] = useState({});

    const openModal = (buttonId) => {
        if (buttonId === 1) {
            setShowModal1(true);
        } else if (buttonId === 2) {
            setShowModal2(true);
        }
    };

    const closeModal = (buttonId) => {
        if (buttonId === 1) {
            setShowModal1(false);
        } else if (buttonId === 2) {
            setShowModal2(false);
        }
    };

    const handleTokenSelect = (image, ticker, buttonId) => {
        if (buttonId === 1) {
            if (ticker === selectedTokenTicker2) {
                return;
            }
            setSelectedTokenTicker1(ticker);
            setSelectedTokenImage1(image);
            setButton1Style({ backgroundColor: '#1f3c4a' });

            closeModal(1);
        } else if (buttonId === 2) {
            if (ticker === selectedTokenTicker1) {
                return;
            }
            setSelectedTokenTicker2(ticker);
            setSelectedTokenImage2(image);
            setButton2Style({ backgroundColor: '#1f3c4a' });

            closeModal(2);
        }
    };

    const isTokenSelectedForButton = (buttonId) => {
        if (buttonId === 1) {
            return !!selectedTokenImage1 && !!selectedTokenTicker1;
        } else if (buttonId === 2) {
            return !!selectedTokenImage2 && !!selectedTokenTicker2;
        }
    };

    return (
        <div>
            <div id='swap-page' className='mt-3'>
                <div className='enpFfZ '>
                    <div className='iUsjHb mt-3 hhoFBL1 p-2 morphism'>
                        <div className='d-flex' style={{ gap: '0 140px' }}>
                            <div className='hhoFBL p-2'>
                                <p className='m-0 text-light ms-2'>You pay</p>
                                <input type='text' className='currency-input' placeholder='0' />
                            </div>
                            <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                                <button className='max-parent max-parent-swap my-0' style={button1Style}>
                                    <p className='max my-0'>MAX</p>
                                </button>
                            </div>
                        </div>
                        <div className='me-2 mt-2'>
                            <button className='we' type='button' onClick={() => openModal(1)} disabled={isTokenSelectedForButton(1)} style={button1Style}>
                                {selectedTokenImage1 ? (
                                    <>
                                        <img
                                            src={selectedTokenImage1}
                                            style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            alt=''
                                        />
                                        <span className='text-light ms-2'>{selectedTokenTicker1}</span>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src='./images/sprint.png'
                                            style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            alt=''
                                        />
                                        <span className='text-light ms-2'>ETH</span>
                                    </>
                                )}
                                <img src='/images/dropdown.png' height='23px' width='23px' alt='' />
                            </button>
                            <p className='ms-4 mt-2 mb-0 text-light '>balance: 0</p>
                        </div>
                    </div>
                    <PlusComponent img={swapbutton} />
                    <div className='iUsjHb morphism hhoFBL1 p-2' id='swapbottom'>
                        <div className='d-flex' style={{ gap: '0 130px' }}>
                            <div className='hhoFBL p-2'>
                                <p className='m-0 text-light ms-2'>You receive</p>
                                <input type='text' className='currency-input' placeholder='0' />
                            </div>
                            <div className='text-light d-flex flex-column align-item-center justify-content-center'>
                                <button className='max-parent max-parent-swap my-0' style={button2Style}>
                                    <p className='max my-0'>MAX</p>
                                </button>
                            </div>
                        </div>
                        <div className='me-2 mt-2'>
                            <button className='ws' type='button' onClick={() => openModal(2)} disabled={isTokenSelectedForButton(2)} style={button2Style}>
                                {selectedTokenImage2 ? (
                                    <>
                                        <img
                                            src={selectedTokenImage2}
                                            style={{ height: '24px', width: '24px', borderRadius: '50%' }}
                                            alt=''
                                        />
                                        <span className='text-light ms-2'>{selectedTokenTicker2}</span>
                                    </>
                                ) : (
                                    <>
                                       Select Token
                                    </>
                                )}
                                <img
                                    src='/images/dropdown.png'
                                    height='23px'
                                    width='23px'
                                    alt=''
                                    className='image'
                                    id='myImage'
                                />
                            </button>
                            <p className='ms-4 mt-2 mb-0 text-light'>balance: 0</p>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={showModal1}
                onHide={() => closeModal(1)}
                style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
                dialogClassName='modal-dialog-centered'>
                <Modal.Body className='p-0 modal-body'>
                    <SelectToken onSelectToken={(image, ticker) => handleTokenSelect(image, ticker, 1)} />
                </Modal.Body>
            </Modal>

            <Modal
                show={showModal2}
                onHide={() => closeModal(2)}
                style={{ maxWidth: '400px', marginLeft: '35%', borderRadius: '15px' }}
                dialogClassName='modal-dialog-centered'>
                <Modal.Body className='p-0 modal-body'>
                    <SelectToken onSelectToken={(image, ticker) => handleTokenSelect(image, ticker, 2)} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SwapComponent;
