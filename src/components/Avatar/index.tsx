import React from 'react';
import profileFoto from '../../assets/peueueu.jpeg';
import { AvatarWrapper, ImageWrapper, Title, Subtitle, Description, ContentWrapper } from './styled';

const Avatar: React.FC<{ title: string, subtitle: string, description?: string }> = (props) => {

  return (
    <>
      <AvatarWrapper>
        <ImageWrapper>
          <img src={profileFoto} alt="profile-pic" />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
          <Description>{props.description}</Description>
          {/* However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. */}
          {/* <Description>Diretamente da borda mais estranha da zona oeste do Recife.</Description> */}
          {/* <Description>Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods.</Description> */}
        </ContentWrapper>
      </AvatarWrapper>
    </>
  )
}

export default Avatar;