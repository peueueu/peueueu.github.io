import React, { useState } from 'react';
import { IntroWrapper, Title, Role, ExtraInfo, DescriptionToggler, Description } from './styled';

const ExpCard: React.FC<{ company: string, location: string, role?: string, period?: string, course?: string }> = (props) => {

  const [description, showDescription] = useState({ show: false });

  function toggleDescription() {
    showDescription({
      show: !description.show
    })
  }


  return (
    <>
      <IntroWrapper>
        <div>
          <Title>{props.company}</Title>
          <Role>{props.role}</Role>
        </div>

        <div>
          <ExtraInfo>{props.period}</ExtraInfo>
          <ExtraInfo>{props.location}</ExtraInfo>
        </div>
      </IntroWrapper>
      <DescriptionToggler href="#" onClick={toggleDescription} style={{ color: description.show ? '#03bd4e' : '#b2b2b2' }}>
        Principais atividades <span>➕</span>
      </DescriptionToggler>
      <Description style={{ display: description.show ? 'block' : 'none' }}>{props.children}</Description>
    </>
  )
}

export default ExpCard;