import React    from 'react';
import ReactDOM from 'react-dom';
import Step     from './pages';
import './styles/index.css';
import 'rsuite/dist/rsuite.min.css'; 

ReactDOM.render(
  <React.StrictMode>
    <Step />
  </React.StrictMode>,
  document.getElementById('root')
);
