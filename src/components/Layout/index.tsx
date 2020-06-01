import React from 'react';
import GlobalStyles from '../../styles/global';
import Sidebar from '../Sidebar';
import { LayoutWrapper, LayoutMain } from './styled';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

export default Layout;