import React from 'react';
import Header from './Header';

const App = (props) => {
  return (
    <div className="App">
      <Header message="hello react" />
      <div>content</div>
    </div>
  );
};

export default App;
