import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import AddYeezy from './components/Yeezy/AddYeezy';
import CardContext from './store/card-context';

const sidebar = document.getElementById('sidebar')

function App() {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Sidebar />, sidebar)}
      <CardContext.Provider>
        <Header />
        <AddYeezy />
      </CardContext.Provider>
    </React.Fragment>
  )
}

export default App;
