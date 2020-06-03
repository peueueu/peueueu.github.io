import React from 'react';
import { CardWrapper, Course, Institution, Period } from './styled';


const EducationCard: React.FC<{ course: string, institution: string, period: string }> = (props) => {
  return (
    <CardWrapper>
      <Course>{props.course}</Course>
      <Institution>{props.institution}</Institution>
      <Period>Conclusão: {props.period}</Period>
    </CardWrapper>
  )
}
export default EducationCard;