import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBack, Check } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6px 28px',
          background: '#FFFFFF',
          borderBottom: '1px solid #ECEEED',
          borderRadius: '12px 12px 0px 0px',
          height: '52px',
        }}
      >
        <Typography>Rendez-vous</Typography>
        <Box>
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
          >
            <ArrowBack />
          </Button>
          <Button
            variant='contained'
            aria-label='save'
            sx={{
              minWidth: '40px',
              height: '40px',
              padding: '0',
              marginLeft: '12px',
              backgroundColor: '#48BB78',
            }}
          >
            <Check />
          </Button>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
