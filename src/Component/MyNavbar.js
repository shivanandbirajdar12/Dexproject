import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import OffcanvasComponent from '../Dropdown/OffcanvasComponent';
import Logo from '../Assets/images2/logo ts.png';
import '../Assets/CSS/nav.css';
import '../Assets/CSS/offcanvas.css';
import NetworkOverlay from '../Dropdown/NetworkOverlay';
import NavDropdown from '../Dropdown/NavDropdown';


const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState({ name: 'Ethereum', icon: './images/sprint.png' });
  const dropdownRef = useRef(null);
  const imageRef = useRef(null);
  const networkOverlayRef = useRef(null);
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const handleConnectWallet = () => {
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen1(false);
        setIsDropdownOpen(false);
      }
      if (
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
  }, [isOpen, isOpen1, isDropdownOpen]);


  const handleSelectNetwork = (network) => {
      setSelectedNetwork(network);
  };
  
  return (
    <div className="header_wrapper sticky-top">
      <Navbar bg=" px-5" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} height="30px" width="30px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/swap" className="nav-link ms-2" activeClassName="active">
              Swap
            </NavLink>
            <NavLink to="/explore" className="nav-link ms-2" activeClassName="active">
              Explore
            </NavLink>
            <NavLink to="/analytics" className="nav-link ms-2" activeClassName="active">
              Analytics
            </NavLink>
            <NavLink to="/pool" className="nav-link ms-2" activeClassName="active">
              Pool
            </NavLink>
            <div ref={dropdownRef}>
              <Link to="#" className="nav-link ms-2" onClick={toggleDropdown1}>
                <img
                  src="/images/dropdown.png"
                  ref={imageRef}
                  className={`icons image ${isDropdownOpen ? 'rotated' : ''}`}
                  alt=""
                />
              </Link>
              {isOpen1 && <NavDropdown />}
            </div>
          </Nav>
          <form className="d-flex ">
            <div className="searchbar text-center">
              <img
                src="/images/search.png"
                className="color-change-image ms-3"
                style={{ height: '23px', width: '23px' }}
                alt=""
              />
              <input type="search" placeholder="Search Tokens and NFTs Collections" aria-label="Search" />
              <img src="/images/forward.png" style={{ height: '20px', width: '20px' }} className="me-3" alt="" />
            </div>
          </form>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <NetworkOverlay selectedNetwork={selectedNetwork} onSelectNetwork={handleSelectNetwork} />

          <button className="connect-button1 px-4 ms-3" onClick={handleConnectWallet}>
            <b className="connect1">Connect</b>
          </button>
        </div>
      </Navbar>
      <OffcanvasComponent show={showOffcanvas} onHide={handleCloseOffcanvas} />
    </div>
  );
};

export default MyNavbar;
