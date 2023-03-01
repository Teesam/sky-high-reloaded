import TopNavbar from './components/layouts/TopNavbar';
import Dashboard from './pages/Dashboard';
import React from 'react';
import ChartsLayout from './components/layouts/Charts';

function App() {
  return (
    <>
      <TopNavbar />
      <Dashboard />
      {/* <ChartsLayout /> */}
    </>
  )
}

export default App;
