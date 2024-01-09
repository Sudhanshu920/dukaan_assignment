import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="info">
        <span>Payments</span>
        <div className="infoDetails">
          <img src="/Help.png" alt="help" />
          <span>How it works</span>
        </div>
      </div>

      <div className="Search">
        <img src="/search.png" alt="searchicon" />
        <span>Search features, tutorials, etc.</span>
      </div>

      <div className="headerIcons">
        <div className="headerIconsImage1">
          <img src="/002.png" alt="" />
        </div>
        <img src="/001.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
