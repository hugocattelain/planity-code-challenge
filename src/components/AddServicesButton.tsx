import React from 'react';
import { Button, Typography } from '@mui/material';
import { AddCircleOutlineRounded } from '@mui/icons-material';

interface AddServiceButtonProps {
  addService: Function;
}

const AddServiceButton: React.FC<AddServiceButtonProps> = ({ addService }) => {
  return (
    <Button
      onClick={() => addService()}
      sx={{
        border: '1px dashed #98A29F',
        borderRadius: '6px',
        width: '100%',
        padding: '18px 0 18px',
        marginBottom: '20px',
        color: '#5F706A',
        textTransform: 'none',
        fontWeight: 600,
      }}
      disableRipple
    >
      <AddCircleOutlineRounded />
      <Typography sx={{ paddingLeft: '10px' }}>
        Ajouter une prestation à la suite
      </Typography>
    </Button>
  );
};

export default AddServiceButton;
