import { TextField } from '@mui/material';
import React from 'react';

interface GenericNumberInputProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  unit: string;
  value: number;
}

const GenericNumberInput: React.FC<GenericNumberInputProps> = ({
  unit,
  handleChange,
  value,
}) => {
  return (
    <>
      <TextField
        value={value}
        onChange={handleChange}
        variant='outlined'
        type='number'
        sx={{
          width: 71,
          border: 'none',
          '& .MuiInputBase-root': {
            borderRadius: '4px 0 0 4px',
          },
        }}
      />
      <TextField
        value={unit}
        variant='outlined'
        type='text'
        disabled
        sx={{
          width: 48,
          mr: '16px',
          '& .Mui-disabled': {
            paddingRight: 0,
          },
          '& .MuiInputBase-root': {
            borderRadius: '0 4px 4px 0',
            '& fieldset': {
              borderLeft: 'none',
            },
          },
        }}
      />
    </>
  );
};

export default GenericNumberInput;
