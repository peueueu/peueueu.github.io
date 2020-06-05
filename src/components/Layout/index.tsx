import React from 'react';
import GlobalStyles from '../../styles/global';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { LayoutWrapper, LayoutMain } from './styled';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <Sidebar />
      </Header>
      <GlobalStyles />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

export default Layout;