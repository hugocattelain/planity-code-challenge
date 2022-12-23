import React from 'react';
import {
  AccountCircleOutlined,
  CalendarToday,
  DescriptionOutlined,
} from '@mui/icons-material';

interface GenericIconProps {
  iconName: string;
}

const GenericIcon: React.FC<GenericIconProps> = ({ iconName }) => {
  const getIconByName = (name: string) => {
    switch (name) {
      case 'avatar':
        return <AccountCircleOutlined fontSize='small' />;
      case 'calendar':
        return <CalendarToday fontSize='small' />;
      case 'file':
        return <DescriptionOutlined fontSize='small' />;
      default:
        return <AccountCircleOutlined fontSize='small' />;
    }
  };

  return getIconByName(iconName);
};

export default GenericIcon;
