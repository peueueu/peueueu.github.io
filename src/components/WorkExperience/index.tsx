import React from 'react';
import ExpCard from '../ExpCard';
import { WorkExpTitle, WorkExpWrapper, WorkExpListWrapper, WorkExpList, WorkExpItem } from './styled'


const WorkExperience: React.FC = () => {
  return (
    <WorkExpWrapper>
      <WorkExpTitle>Experiência Profissional</WorkExpTitle>
      <WorkExpListWrapper>
        <WorkExpList>
          <WorkExpItem>
            <ExpCard company="Prefeitura do Recife" location="Recife, PE" role="Intern" period="abr/19 - outubro/19">
              Auxiliar no desenvolver e manter aplicativos em linguagem de programação(Java e PHP). Criar e manter objetos em bancos de dados(MySQL, ORACLE E DB2). Trabalhar utilizando metodologia ágil no desenvolvimento de sistemas. Configurar estações de trabalho de usuário. Testar as aplicações desenvolvidas, e orientar usuários na utilização das aplicações desenvolvidas.
          </ExpCard>
          </WorkExpItem>

          <WorkExpItem>
            <ExpCard company="Jornal do Commercio" location="Recife, PE" role="Intern" period="out/19 - fev/20">
              Auxiliar no desenvolver e manter aplicativos em linguagem de programação(Java e PHP). Criar e manter objetos em bancos de dados(MySQL, ORACLE E DB2). Trabalhar utilizando metodologia ágil no desenvolvimento de sistemas. Configurar estações de trabalho de usuário. Testar as aplicações desenvolvidas, e orientar usuários na utilização das aplicações desenvolvidas.
          </ExpCard>
          </WorkExpItem>

        </WorkExpList>
        <WorkExpList>
          <WorkExpItem>
            <ExpCard company="Melhor Comunicação" location="Recife, PE" role="Full Time" period="mar/20 - atualmente">
              Auxiliar no desenvolver e manter aplicativos em linguagem de programação(Java e PHP). Criar e manter objetos em bancos de dados(MySQL, ORACLE E DB2). Trabalhar utilizando metodologia ágil no desenvolvimento de sistemas. Configurar estações de trabalho de usuário. Testar as aplicações desenvolvidas, e orientar usuários na utilização das aplicações desenvolvidas.
          </ExpCard>
          </WorkExpItem>
        </WorkExpList>
      </WorkExpListWrapper>
    </WorkExpWrapper>
  )
}

export default WorkExperience;