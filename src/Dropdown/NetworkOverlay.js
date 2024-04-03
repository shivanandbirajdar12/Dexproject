import React, { useRef, useEffect } from 'react';
import './network.css';
import tennisicon from '../Assets/images2/teenyicons_tick-solid.png';
 import ts2 from '../Assets/images2/ts2.png';
 import ts3 from '../Assets/images2/ts3.png';
 import ts4 from '../Assets/images2/ts4.png';
 import ts5 from '../Assets/images2/ts5.png';
 import ts6 from '../Assets/images2/ts6.png';
 import ts7 from '../Assets/images2/ts7.png';
const Option = ({ networkName, networkIcon, isSelected, onSelect }) => {
    return (
        <div className="network-overlay-inner" onClick={() => onSelect({ name: networkName, icon: networkIcon })}>
            <div className="networks-parent">
                <img className="networks-icon" alt="" src={networkIcon} />
                <div className={isSelected ? "ethereum selected" : "ethereum"}>{networkName}</div>
            </div>
            {isSelected && (
                <img className="teenyiconstick-solid" alt="" src={tennisicon} />
            )}
        </div>
    );
};

const NetworkOverlay = ({ selectedNetwork, onSelectNetwork }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = useRef(null);
    const networkOverlayRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                isOpen &&
                networkOverlayRef.current &&
                !networkOverlayRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const imageStyles = {
                height: '23px',
                width: '23px',
            };

    const options = [
        { key: 1, networkName: 'Ethereum', networkIcon: './images/sprint.png' },
        { key: 2, networkName: 'Arbitrum', networkIcon: ts2 },
        { key: 3, networkName: 'Optimism', networkIcon: ts3 },
        { key: 4, networkName: 'Polygon', networkIcon: ts4 },
        { key: 5, networkName: 'BNB Chain', networkIcon: ts5 },
        { key: 6, networkName: 'Avalanche', networkIcon: ts6 },
        { key: 7, networkName: 'Celo', networkIcon: ts7 }
    ].map(option => ({
        ...option,
        propName: option.networkName === selectedNetwork.name
    }));

    return (
        <>
            <button
                id="selectedOptionBtn"
                ref={networkOverlayRef}
                type="button"
                className="btnGroupDrop1"
                onClick={toggleDropdown}
            >
                {selectedNetwork.icon && (
                    <img src={selectedNetwork.icon} className="ms-2 networks-icon" alt="" style={imageStyles} />
                )}
                <img
                    src="/images/dropdown.png"
                    className={`icons ${isOpen ? 'rotated' : ''}`}
                    alt=""
                    style={imageStyles}
                />
                {isOpen && (
                    <div className="network-overlay" ref={dropdownRef}>
                        {options.map((option, index) => (
                            <Option
                                key={index}
                                networkName={option.networkName}
                                networkIcon={option.networkIcon}
                                isSelected={option.propName}
                                onSelect={onSelectNetwork}
                            />
                        ))}
                    </div>
                )}
            </button>
        </>
    );
};

export default NetworkOverlay;

