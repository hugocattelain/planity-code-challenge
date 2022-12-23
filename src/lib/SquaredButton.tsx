import React from 'react';
import { Button } from '@mui/material';

interface SquaredButtonProps {
  icon: any;
  clickMethod: Function;
  index?: number;
}

const SquaredButton: React.FC<SquaredButtonProps> = ({
  icon,
  clickMethod,
  index,
}) => {
  const onClick = () => {
    if (index) {
      clickMethod(index);
    } else {
      clickMethod();
    }
  };
  return (
    <Button
      variant='outlined'
      aria-label='back'
      sx={{
        minWidth: '40px',
        height: '40px',
        padding: '0',
        color: '#34423E',
        borderColor: '#34423E',
      }}
      onClick={() => onClick()}
    >
      {icon}
      {index}
    </Button>
  );
};

export default SquaredButton;
