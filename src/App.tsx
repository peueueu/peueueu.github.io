import React from 'react';

import Layout from './components/Layout';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import ExpContainer from './components/ExpContainer';
import Skills from './components/Skills';
import Courses from './components/Courses';

function App() {
  return (
    <>
      <Layout>
        <About />
        <Skills />
        <ExpContainer>
          <Experience />
          <Education title="Formação Acadêmica" />
        </ExpContainer>
        <Courses title="Cursos" />
      </Layout>
    </>
  );
}

export default App;
