
import ReactDOM from 'react-dom';
import './index.scss';
import Routes from './core/Routes.tsx';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { zhCN } from '@mui/material/locale';

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

// ReactDOM.render(
//   routes,
//   document.getElementById('root')
// );

const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  zhCN,
);

ReactDOM.render(
  <ThemeProvider theme={theme}>{routes}</ThemeProvider>,
  document.getElementById('root'),
);