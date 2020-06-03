import React from 'react';
import Avatar from '../Avatar';
import { WrapperHeader, MobileHeader } from './styled';

const Header: React.FC = props => {
  return (
    <WrapperHeader>
      <MobileHeader>
        <Avatar title="Peu Silva" subtitle="Front end Developer" />
      </MobileHeader>
      {props.children}
    </WrapperHeader>
  )
}

export default Header;