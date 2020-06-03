import React from 'react';
import { CardWrapper, ExtraInfo, Course, Institution, Period } from './styled';


const EducationCard: React.FC<{ course: string, institution: string, period: string }> = (props) => {
  return (
    <CardWrapper>
      <Course>{props.course}</Course>
      <ExtraInfo>
        <Institution>{props.institution}</Institution>
        <Period>{props.period}</Period>
      </ExtraInfo>
    </CardWrapper>
  )
}
export default EducationCard;