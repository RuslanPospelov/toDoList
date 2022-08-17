import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './views/App';
import '../src/views/styles/reset.scss';
import '../src/views/styles/common.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
  </>
)
