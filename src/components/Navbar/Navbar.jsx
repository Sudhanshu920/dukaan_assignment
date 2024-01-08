import React from 'react';
import './Navbar.css';

const links = [
  {
    name: 'Home',
    icon: '/01.png',
  },
  {
    name: 'Orders',
    icon: '/02.png',
  },
  {
    name: 'Products',
    icon: '/03.png',
  },
  {
    name: 'Delivery',
    icon: '/04.png',
  },
  {
    name: 'Marketing',
    icon: '/05.png',
  },
  {
    name: 'Analytics',
    icon: '/06.png',
  },
  {
    name: 'Payments',
    icon: '/07.png',
  },
  {
    name: 'Tools',
    icon: '/08.png',
  },
  {
    name: 'Discounts',
    icon: '/09.png',
  },
  {
    name: 'Audience',
    icon: '/10.png',
  },
  {
    name: 'Appearance',
    icon: '/11.png',
  },
  {
    name: 'Plugins',
    icon: '/12.png',
  },
];

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Wrapper">
        <div className="Upper">
          <div className="Icon">
            <img src="/2.png" alt="companyIcon" className="Image1" />
            <div className="companyName">
              <span>Nishyan</span>
              <span>Visit Store</span>
            </div>
            <img src="/1.png" alt="down-mark" className="Image2" />
          </div>

          <div className="Links">
            {links.map((link) => (
              <div className="linkItem" key={link.icon}>
                <img src={link.icon} alt="icon" />
                <span>{link.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="Bottom">
          <div className="walletImg">
            <img src="/wallet.png" alt="wallet" />
          </div>
          <div className="walletInfo">
            <span>Available credits</span>
            <span>222.10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
