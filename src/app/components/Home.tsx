import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React from 'react';
import { Button } from '@mui/material';
import Header from './Header';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
];
const Home = () => {
  return (
    <React.Fragment>
      <Header title="Home" />
      <div className="flex content-center justify-center w-full h-screen ">
        <div className="flex flex-col justify-center gap-5 p-5 text-center">
          <div className="w-100"> Enter your Open AI API key</div>
          <div className="w-100">
            <TextField id="outlined-basic" label="API Key" variant="outlined" />
          </div>
          <div>
            <Button variant="contained">Ok</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
