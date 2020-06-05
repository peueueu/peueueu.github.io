import React, { useState } from 'react';
import { IntroWrapper, Title, Role, ExtraInfo, DescriptionToggler, Description } from './styled';

const ExpCard: React.FC<{ company: string, location: string, role?: string, period?: string, course?: string }> = (props) => {

  const [description, showDescription] = useState({ show: false });

  function toggleDescription() {
    showDescription({
      show: !description.show,
    })
  };


  return (
    <>
      <IntroWrapper>
        <div>
          <Title>{props.company}</Title>
          <Role>{props.role}</Role>
        </div>

        <div>
          <ExtraInfo>{props.location}</ExtraInfo>
          <ExtraInfo>{props.period}</ExtraInfo>
        </div>
      </IntroWrapper>
      <DescriptionToggler onClick={toggleDescription} style={{ color: description.show ? '#F25252' : '#b2b2b2' }}>
        {description.show ? 'Fechar' : 'Principais Atividades'}<span style={{ transition: description.show ? 'transform .3s ease' : 'none', transform: description.show ? 'rotate(45deg)' : 'none', marginLeft: '10px' }} role="img"><svg fill="#b2b2b2" height="12px" viewBox="0 0 469.33333 469.33333" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0" /></svg></span>
      </DescriptionToggler>
      <Description style={{ display: description.show ? 'block' : 'none' }}>{props.children}</Description>
    </>
  )
}

export default ExpCard;