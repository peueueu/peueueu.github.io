import React from 'react';
import { SidebarWrapper } from './styled';

import Avatar from '../Avatar';
import SocialLinks from '../SocialLinks';

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <Avatar
        title="Peu Silva"
        subtitle="Front end Developer"
        description="However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends." />
      <SocialLinks />
    </SidebarWrapper>
  )
}

export default Sidebar;