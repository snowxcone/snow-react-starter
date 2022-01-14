import React from 'react';
import ReactDOM from 'react-dom';
import './static/styles/style.scss';

const App = () => (
  <div className="test">Using React woot woot</div>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('main')
);
