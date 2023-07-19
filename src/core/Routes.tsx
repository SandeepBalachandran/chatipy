// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../app/components/Home';
import Main from '../app/components/Main';



const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;


