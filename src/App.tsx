import React from 'react';

import Layout from './components/Layout';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import ExpContainer from './components/ExpContainer';

function App() {
  return (
    <>
      <Layout>
        <About />
        <ExpContainer>
          <Experience />
          <Education />
        </ExpContainer>
      </Layout>
    </>
  );
}

export default App;
