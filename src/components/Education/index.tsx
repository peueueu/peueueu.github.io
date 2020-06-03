import React from 'react';
import EducationCard from '../EducationCard';
import { EducationTitle, EducationWrapper, EducationListWrapper, EducationList, EducationItem } from './styled'


const Experience: React.FC = () => {
  return (
    <EducationWrapper>
      <EducationTitle>Formação Acadêmica</EducationTitle>
      <EducationListWrapper>
        <EducationList>
          <EducationItem>
            <EducationCard course="Bacharelado em Engenharia da Computação" institution="UNINASSAU" period="2021.1(previsto)" />
          </EducationItem>
        </EducationList>
      </EducationListWrapper>
    </EducationWrapper>
  )
}

export default Experience;