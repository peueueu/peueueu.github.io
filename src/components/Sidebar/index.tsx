import React from 'react';
import { SidebarWrapper } from './styled';

import Avatar from '../Avatar';
import SocialLinks from '../SocialLinks';

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <Avatar />
      <SocialLinks />
    </SidebarWrapper>
  )
}

export default Sidebar;