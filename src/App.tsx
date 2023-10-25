import React from 'react';
import MyRoute from './components/MyRoute';
import {BrowserRouter as Router} from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <div className="body-bg">

      <Router>
          <MyRoute  />
      </Router>

    </div>
  );
}

export default App;
