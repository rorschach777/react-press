import React from 'react';

import LayoutMain from './components/Layouts/LayoutMain';
import Hero from './components/Hero';
import './App.css';
import './styles/index.scss';
import 'antd/dist/antd.css';
import AppicationContainer from './containers/AppContainer';

function App() {
  return (
    <div className="App">
      <AppicationContainer>
        <LayoutMain/>
      </AppicationContainer>
    </div>
  );
}

export default App;
