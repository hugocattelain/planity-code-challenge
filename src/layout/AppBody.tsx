import React from 'react';
import Container from '@mui/material/Container';

interface AppBodyProps {
  children: React.ReactNode;
}

const AppBody: React.FC<AppBodyProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Container
        fixed
        sx={{ bgcolor: '#F6F7F8', padding: '20px 28px', minWidth: '1100px' }}
      >
        {children}
      </Container>
    </React.Fragment>
  );
};

export default AppBody;
