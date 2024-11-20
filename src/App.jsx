import React from 'react'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page1Bottom from './components/Page1Bottom';
import Header from './components/Header';

function App() {
  return (
    <>
      <div id="main">
          <Page1Bottom />
          <Header/>
          <Page1 />
          <Page2 />
      </div>
    </>
  )
}

export default App