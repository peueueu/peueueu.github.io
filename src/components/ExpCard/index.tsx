import React from 'react';
import { IntroWrapper, Title, Role, ExtraInfo, Description } from './styled';

const ExpCard: React.FC<{ company: string, location: string, role: string, period: string }> = (props) => {
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


      <Description>{props.children}</Description>
    </>
  )
}

export default ExpCard;