import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Employee, Service } from '../types';

interface GenericSelectProps {
  options: Employee[] | Service[];
  label: string;
  selected: Service | Employee;
  index: number;
  updateSelection: Function;
}

const GenericSelect: React.FC<GenericSelectProps> = ({
  options,
  label,
  selected,
  index,
  updateSelection,
}) => {
  const [localSelection, setLocalSelection] = useState<Service | Employee>(
    selected
  );

  const handleChange = (event: SelectChangeEvent) => {
    setLocalSelection(
      options.filter((item) => item.name === event.target.value)[0]
    );
  };

  useEffect(() => {
    updateSelection(localSelection, index);
  }, [localSelection, index]);

  useEffect(() => {
    if (selected.name !== localSelection.name) {
      setLocalSelection(selected);
    }
  }, [selected]);

  return (
    <>
      <FormControl sx={{ minWidth: '200px', ml: '16px' }}>
        <InputLabel id='generic-select'>{label}</InputLabel>
        <Select
          labelId='generic-select'
          value={localSelection.name ? localSelection.name : ''}
          label={label}
          onChange={handleChange}
        >
          {options.map((item) => (
            <MenuItem value={item.name} key={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default GenericSelect;
