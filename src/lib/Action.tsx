import React from 'react';
import {
  Delete,
  ContentCut,
  ContentCopy,
  EditOutlined,
  DescriptionOutlined,
  InfoOutlined,
  CardMembership,
  Cached,
} from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import { theme } from '../theme';

interface ActionProps {
  icon?: string;
  text: string;
  green?: boolean;
}

const Action: React.FC<ActionProps> = ({ icon, text, green }) => {
  const getIconByName = (icon: string) => {
    switch (icon) {
      case 'delete':
        return (
          <Delete sx={{ fontSize: 16, color: theme.palette.primary.main }} />
        );
      case 'cut':
        return (
          <ContentCut
            sx={{ fontSize: 16, color: theme.palette.primary.main }}
          />
        );
      case 'copy':
        return (
          <ContentCopy
            sx={{ fontSize: 16, color: theme.palette.primary.main }}
          />
        );
      case 'edit':
        return (
          <EditOutlined
            sx={{ fontSize: 16, color: theme.palette.primary.main }}
          />
        );
      case 'file':
        return (
          <DescriptionOutlined
            sx={{ fontSize: 16, color: theme.palette.primary.main }}
          />
        );
      case 'info':
        return (
          <InfoOutlined
            sx={{ fontSize: 16, color: theme.palette.primary.main }}
          />
        );
      case 'card':
        return (
          <CardMembership
            sx={{ fontSize: 16, color: theme.palette.primary.main }}
          />
        );
      case 'repeat':
        return (
          <Cached sx={{ fontSize: 16, color: theme.palette.secondary.main }} />
        );
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      {icon && getIconByName(icon)}
      <Typography
        sx={{
          textDecoration: 'underline',
          margin: '0 20px 0 6px',
          fontSize: '13px',
          fontWeight: 600,
          color: green
            ? theme.palette.secondary.main
            : theme.palette.primary.dark,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Action;
