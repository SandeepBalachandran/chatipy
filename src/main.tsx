import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
// import "./assets/style/colors.scss";
import './index.scss';
import store from './app/store';
import { Provider } from 'react-redux';
import Routes from './core/Routes.tsx';

const routes = Routes();

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement,
// );
// root.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
// );

ReactDOM.render(
  routes,
  document.getElementById('root')
);
