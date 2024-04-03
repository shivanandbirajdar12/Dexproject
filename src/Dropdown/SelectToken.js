// import React, { useState } from 'react';
// import cross from '../Assets/images2/radix-icons_cross-2.svg';
// import PopularToken from './PopularToken';
// import tokensData from '../Dropdown/ChainAddresses.json'; 
// const SelectToken = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     // const tokens80001 = tokensData[0]['80001'].tokens;
//     const tokens43113 = tokensData[1]['43113'].tokens;



//     const filteredTokens = tokens43113.filter(token => token.name.includes(searchQuery));

//     return (
//         <>

//             <div className='gnwYND bFCsHr'>
//                 <div className='hfXcaM kMkmMS'>
//                     <div className='cPCYrp'>
//                         <div style={{ fontSize: '20px', color: '#b1b1b1' }}>Select a token</div>
//                         <img src={cross} style={{ height: '24px', width: '24px' }}  alt='' />
//                     </div>
//                     <div className='kdYshZ dKubqp'>
//                         <div className=" hTynGq" style={{ display: 'flex', justifyContent: 'space-between' }}>
//                             <img
//                                 src="/images/search.png"
//                                 className="ms-3"
//                                 style={{ height: '20px', width: '20px' }}
//                                 alt=""
//                             />
//                             <input type="text" id="token-search-input" className='w-100 hTynGqr' placeholder="Search name or paste address" onChange={(e) => setSearchQuery(e.target.value)} />
//                         </div>
//                         <button className="sc-aXZVg bbWEFp lmdAXV kjpUwf">
//                             <img
//                                 src="./images/sprint.png"
//                                 height="23px"
//                                 width="23px"
//                                 alt=""
//                             />
//                             <img
//                                 src="/images/dropdown.png"
//                                 height="23px"
//                                 width="23px"
//                                 alt=""
//                             />
//                         </button>
//                     </div>
//                     <div className='fxVDAj kdYshZ dKubqp'>
//                         <div className='crYogb'>
//                             <img src='./images/sprint.png' height="23px" width="23px" alt="" />
//                             <span>ETH</span>
//                         </div>
//                         <div className='crYogb'>
//                             <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png" height="23px" width="23px" alt="" />
//                             <span>WETH</span>
//                         </div>
//                         <div className='crYogb'>
//                             <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png" height="23px" width="23px" alt="" />
//                             <span>USDC</span>
//                         </div>
//                     </div>
//                     <div className='fxVDAj kdYshZ dKubqp'>
//                         <div className='crYogb'>
//                             <img src='https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png' height="23px" width="23px" alt="" />
//                             <span>DAI</span>
//                         </div>
//                         <div className='crYogb'>
//                             <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png" style={{borderRadius:'50%'}} height="23px" width="23px" alt="" />
//                             <span>USDT</span>
//                         </div>
//                         <div className='crYogb'>
//                             <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png" height="23px" width="23px" alt="" />
//                             <span>WBTC</span>
//                         </div>
//                     </div>
//                 </div>              
//                 <div className='hfXcaM kMkmMS scrollbar' >                  
//                     <div className=' text-light'>
//                     {searchQuery ? 'Searched tokens' : 'Popular tokens'}
//                    </div>
//                     <div>
//                         {filteredTokens.length === 0 && (
//                             <div className='text-light'>No tokens found</div>
//                         )}
//                         {filteredTokens.map((token, index) => (
//                             <PopularToken option={token.name} imageSrc={token.img} ticker={token.ticker} key={index} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SelectToken;

import React, { useState } from 'react';
import cross from '../Assets/images2/radix-icons_cross-2.svg';
import PopularToken from './PopularToken';
import tokensData from '../Dropdown/ChainAddresses.json';

const SelectToken = ({ onSelectToken }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const tokens43113 = tokensData[1]['43113'].tokens;
    const [selected , setSelected]= useState('');

    const filteredTokens = tokens43113.filter(
        (token) =>
            token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            token.ticker.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleTokenSelect = (token) => {
        setSelected(onSelectToken(token.img, token.ticker));
        alert(token.ticker);

    };
   console.log(selected);
    return (
        <>
            <div className='gnwYND bFCsHr'>
                <div className='hfXcaM kMkmMS'>
                    <div className='cPCYrp'>
                        <div style={{ fontSize: '20px', color: '#b1b1b1' }}>Select a token</div>
                        <img src={cross} style={{ height: '24px', width: '24px' }} alt='' />
                    </div>
                    <div className='kdYshZ dKubqp'>
                        <div className=' hTynGq' style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <img
                                src='/images/search.png'
                                className='ms-3'
                                style={{ height: '20px', width: '20px' }}
                                alt=''
                            />
                            <input
                                type='text'
                                id='token-search-input'
                                className='w-100 hTynGqr'
                                placeholder='Search name or paste address'
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className='sc-aXZVg bbWEFp lmdAXV kjpUwf'>
                            <img src='./images/sprint.png' height='23px' width='23px' alt='' />
                            <img src='/images/dropdown.png' height='23px' width='23px' alt='' />
                        </button>
                    </div>
                    <div className='fxVDAj kdYshZ dKubqp'>
                        <div className='crYogb'>
                            <img src='./images/sprint.png' height="23px" width="23px" alt="" />
                            <span>ETH</span>
                        </div>
                        <div className='crYogb'>
                            <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png" height="23px" width="23px" alt="" />
                            <span>WETH</span>
                        </div>
                        <div className='crYogb'>
                            <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png" height="23px" width="23px" alt="" />
                            <span>USDC</span>
                        </div>
                    </div> 
                    <div className='fxVDAj kdYshZ dKubqp'>
                        <div className='crYogb'>
                            <img src='https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png' height="23px" width="23px" alt="" />
                            <span>DAI</span>
                        </div>
                        <div className='crYogb'>
                            <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png" style={{borderRadius:'50%'}} height="23px" width="23px" alt="" />
                            <span>USDT</span>
                        </div>
                        <div className='crYogb'>
                            <img src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png" height="23px" width="23px" alt="" />
                            <span>WBTC</span>
                        </div>
                    </div>     
                    </div>                        
                    <div className='hfXcaM kMkmMS scrollbar '>
                    <div className=' text-light'>
                      {searchQuery ? 'Searched tokens' : 'Popular tokens'}
                     </div>
                     {filteredTokens.length === 0 && (
                             <div className='text-light'>No tokens found</div>
                         )}
                        {filteredTokens.map((token, index) => (
                            <div class="cPCYrp dKubqp bIFEzi cFvOnL alertdiv" key={index} onClick={() => handleTokenSelect(token)}>
                                <div  className="bFCsHr"><img src={token.img}  style={{height:'24px',width:'24px',borderRadius:'50%'}} alt='' /></div>
                                <div className="eENUcJ" >
                                <div class="dKubqp dKubqptext cPCYrp" >{token.name}</div>
                                <div class="css-1m0dqmt  jgbRhf" value={selected}>{token.ticker}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                     
                </div>
        </>
    );
};

export default SelectToken;




