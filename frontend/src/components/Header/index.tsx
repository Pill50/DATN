import React from 'react';
import './Header.scss';

import Logo from '@assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <header>
      <img src={Logo} alt="HCMUT" />
    </header>
  );
};

export default Header;
