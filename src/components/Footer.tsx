import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Action from '../lib/Action';

interface FooterProps {
  isLoading: boolean;
  totalPrice: number;
}

const Footer: React.FC<FooterProps> = ({ isLoading, totalPrice }) => {
  return (
    <footer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#F6F7F8',
          borderTop: '1px solid #ECEEED',
          borderRadius: ' 0px 0px 12px 12px',
          height: '80px',
          padding: '0 28px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Action text='Choisi(e)' />
            <Action text='Venu' />
            <Action text='Pas venu' />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              height: '36px',
              borderLeft: '1px solid #ECEEED',
              paddingLeft: '27px',
            }}
          >
            <Action text='Copier' icon='copy' />
            <Action text='Couper' icon='cut' />
            <Action text='Supprimer' icon='delete' />
          </Box>
        </Box>
        <Box>
          <Button
            variant='outlined'
            sx={{
              height: '56px',
              textTransform: 'none',
              color: '#34423E',
              borderColor: '#34423E',
              fontWeight: '600',
              fontSize: '13px',
            }}
          >
            Plus d’options (produits, remises, ...)
          </Button>
          <Button
            variant='contained'
            type='submit'
            sx={{
              height: '56px',
              marginLeft: '12px',
              textTransform: 'none',
              backgroundColor: '#48BB78',
              fontWeight: '600',
              fontSize: '13px',
            }}
          >
            <Typography>Encaisser {totalPrice},00€</Typography>
          </Button>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
