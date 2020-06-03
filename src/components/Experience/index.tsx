import React from 'react';
import ExpCard from '../ExpCard';
import { WorkExpTitle, WorkExpWrapper, WorkExpListWrapper, WorkExpList, WorkExpItem } from './styled'


const Experience: React.FC = () => {
  return (
    <WorkExpWrapper>
      <WorkExpTitle>Experiência Profissional</WorkExpTitle>
      <WorkExpListWrapper>
        <WorkExpList>
          <WorkExpItem>
            <ExpCard company="Melhor Comunicação" location="Recife, PE" role="Full Time" period="mar/20 • atualmente">
              Atuação no desenvolvimento de produtos digitais.
          </ExpCard>
          </WorkExpItem>
          <WorkExpItem>
            <ExpCard company="Jornal do Commercio" location="Recife, PE" role="Intern" period="out/19 • fev/20">
              Produzir e atualizar (diariamente) páginas do JC OnLine / Portal NE10, dentro dos padrões definidos pela sua Editoria de Conteúdo e pelo Webdesigner/Webmaker. Desenvolver soluções tecnológicas para páginas do site. Pesquisar e selecionar softwares e soluções na mídia digital (Internet). Operar softwares de fechamento e atualização de websites. Auxiliar o trabalho do Webdesigner e Webmaker, sugerindo soluções e desenvolvendo tarefas a ele determinadas.
            </ExpCard>
          </WorkExpItem>
          <WorkExpItem>
            <ExpCard company="Prefeitura do Recife" location="Recife, PE" role="Intern" period="abr/19 • out/19">
              Auxiliar no desenvolver e manter aplicativos em linguagem de programação(Java e PHP). Criar e manter objetos em bancos de dados(MySQL, ORACLE E DB2). Trabalhar utilizando metodologia ágil no desenvolvimento de sistemas. Configurar estações de trabalho de usuário. Testar as aplicações desenvolvidas, e orientar usuários na utilização das aplicações desenvolvidas.
          </ExpCard>
          </WorkExpItem>
        </WorkExpList>
      </WorkExpListWrapper>
    </WorkExpWrapper>
  )
}

export default Experience;