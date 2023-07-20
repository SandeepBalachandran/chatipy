

import React from 'react';
import Header from './Header';
import { Button, TextField } from '../../helpers/MatImports';
import useStore from '../../store/store';
import { useNavigate } from 'react-router-dom';
import SimpleSnackbar from '../widgets/Snackbar';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const currentToken = useStore((state: any) => state.token);
  const [token, setToken] = React.useState<string>(
    currentToken ? currentToken : '',
  );
  const [snackBarOpen, setSnackBarOpen] = React.useState<boolean>(false);
  const modifyToken = useStore((state: any) => state.modifyToken);
  const handleButtonClick = () => {
    modifyToken(token); // Update the store with the new token value
    setSnackBarOpen(true);
    // navigate("/main");
  };
  const onSnackBarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    console.log(event);
    setSnackBarOpen(false);
    navigate("/main");
    // setSnackBarOpen(event)
  };
  return (
    <React.Fragment>
      <Header title="Home" />
      <div className="flex content-center justify-center w-full h-screen">
        <div className="flex flex-col justify-center gap-5 p-5 text-center">
          <div className="w-100">Enter your Open AI API key</div>
          <div className="w-100">
            <TextField
              id="outlined-basic"
              label="API Key"
              variant="outlined"
              value={token}
              onChange={e => setToken(e.target.value)} // Update the token state with the latest input value
            />
          </div>
          <div>
            <Button variant="contained" onClick={handleButtonClick}>
              Ready
            </Button>
          </div>
        </div>
      </div>
      <SimpleSnackbar
        snackBarStatus={snackBarOpen}
        onSnackBarClose={onSnackBarClose}
        hideDuration={2000}
        message={'Token Saved'}
      />
    </React.Fragment>
  );
};

export default Home;








