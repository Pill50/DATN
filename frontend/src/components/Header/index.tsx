import React from 'react';
import Logo from '@assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-[#e0e8f7] w-full h-[80px] flex justify-center items-center drop-shadow-lg z-10">
      <img src={Logo} alt="HCMUT" />
    </header>
  );
};

export default Header;
