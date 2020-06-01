import React from 'react';
import CrocodileIcon from '../../assets/crocodile';
import { AvatarWrapper, ImageWrapper } from './styled';

const Avatar: React.FC = () => {

  return (
    <>
      <AvatarWrapper>
        <ImageWrapper>
          <CrocodileIcon />
        </ImageWrapper>
        <div>
          <h1>Peu Silva</h1>
          <span>Front-end Developer</span>
          <p>However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.</p>
        </div>
      </AvatarWrapper>
    </>
  )
}

export default Avatar;