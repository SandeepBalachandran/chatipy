

import React from 'react';
import {
  AppBar,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '../../helpers/MatImports';
import { SelectChangeEvent } from '@mui/material/Select';
import useStore from '../../store/store';

export default function ButtonAppBar({ title }: { title: string }) {
  const selectedModel = useStore((state:any) => state.selectedModel)
  const [model, setModel] = React.useState<string>('');
  const handleChange = (event: SelectChangeEvent) => {
    setModel(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Model</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={model}
              label="Model"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="gpt-3.5-turbo">gpt-3.5-turbo</MenuItem>
              <MenuItem value="text-davinci-003">text-davinci-003</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}






