import React from 'react';
import { CardWrapper, Course, Institution, Period } from './styled';


const EducationCard: React.FC<{ course: string, institution: string, period?: string, workload?: string }> = (props) => {
  return (
    <CardWrapper>
      <Course>{props.course}</Course>
      <Institution>{props.institution}</Institution>
      <Period>{props.period ? 'Conclusão: ' : 'Carga Horária: '}{props.period}{props.workload}</Period>
    </CardWrapper>
  )
}
export default EducationCard;