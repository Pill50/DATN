import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelectOption = () => {
  const [area, setArea] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setArea(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 150, fontSize: 16 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{ fontSize: 14, marginTop: -6 }}>
          Area
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={area}
          label="Area"
          style={{ fontSize: 16, height: 40, padding: 10 }}
          onChange={handleChange}
        >
          <MenuItem style={{ fontSize: 16 }} value={10}>
            Ten
          </MenuItem>
          <MenuItem style={{ fontSize: 16 }} value={20}>
            Twenty
          </MenuItem>
          <MenuItem style={{ fontSize: 16 }} value={30}>
            Thirty
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectOption;
