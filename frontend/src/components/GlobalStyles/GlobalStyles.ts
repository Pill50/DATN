import React, { ReactNode } from 'react';
import './GlobalStyles.scss';

interface GlobalStyles {
  children?: ReactNode;
}

const GlobalStyles: React.FC<GlobalStyles> = ({ children }) => {
  return children;
};

export default GlobalStyles;
