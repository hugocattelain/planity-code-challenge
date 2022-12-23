import React from 'react';
import Box from '@mui/material/Box';
import GenericIcon from '../lib/GenericIcon';
import { Button } from '@mui/material';
import { DeleteOutlineOutlined } from '@mui/icons-material';

interface SectionProps {
  children: React.ReactNode;
  icon: string;
  onClickDelete?: Function;
}

const Section: React.FC<SectionProps> = ({ children, icon, onClickDelete }) => {
  return (
    <Box
      sx={{
        bgcolor: '#ffffff',
        border: '1px solid #ECEEED',
        padding: '20px',
        marginBottom: '16px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <GenericIcon iconName={icon} />
      {onClickDelete && (
        <Button
          variant='outlined'
          aria-label='delete'
          onClick={() => onClickDelete()}
          sx={{ minWidth: '40px', height: '40px', padding: '0' }}
        >
          <DeleteOutlineOutlined />
        </Button>
      )}
      {children}
    </Box>
  );
};

export default Section;
