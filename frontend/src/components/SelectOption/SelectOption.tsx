import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectOptionProps {
  label: string;
  options: any;
}

const SelectOption: React.FC<SelectOptionProps> = ({ label, options }) => {
  const [optionValue, setOptionValue] = React.useState(options[0]);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setOptionValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 150, fontSize: 16 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{ fontSize: 14, marginTop: -6 }}>
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={optionValue}
          label={label}
          style={{ fontSize: 16, height: 40, padding: 10 }}
          onChange={handleChange}
        >
          {options.map((option: any, index: number) => {
            return (
              <MenuItem key={index} style={{ fontSize: 16 }} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectOption;
