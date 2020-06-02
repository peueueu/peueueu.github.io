import React from 'react';
import { AboutWrapper, Title, AboutContent } from './styled';

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <Title>About Me</Title>
      <AboutContent>
        {/* My name is Pedro Silva, and i'm a passionate front end developer with a constant aspiration to learn new technologies.
        The purpose of this page is to show a little of my perspective, and where have I been so far. */}
        Meu nome é Pedro Silva, nasci em Recife/PE e sou desenvolvedor front end, além de gostar bastante de games e cultura pop. Já estagiei na Prefeitura do Recife e no Jornal do Commercio, Atualmente sou desenvolvedor front end jr na melhor comunicação, sou aluno do curso de  Engenharia da Computação, cursando o 10° período, na UNINASSAU. Sou apaixonado por desenvolvimento web em geral e a possibilidade de aprender uma coisa nova a cada dia, me deixa extremamente feliz com a escolha que fiz.
      </AboutContent>
    </AboutWrapper>
  )
}

export default About;