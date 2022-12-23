import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  InputAdornment,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { PermIdentity, CakeOutlined, InfoOutlined } from '@mui/icons-material';
import { Client, Gender } from '../types';
import { clients } from '../data';
import SquaredButton from '../lib/SquaredButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Flag from '../icons/flag.svg';
import Action from '../lib/Action';
import { emptyClient } from '../utils';

interface ClientSectionProps {
  client: Client;
  updateClient: Function;
}

const ClientSection: React.FC<ClientSectionProps> = ({
  client,
  updateClient,
}) => {
  const [localClient, setLocalClient] = useState<Client>(client);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const [showCreateButton, setShowCreateButton] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const createNewClient = () => {
    setLocalClient({ ...emptyClient, name: inputValue });
  };

  const resetClient = () => {
    setLocalClient({
      name: '',
      phone: '',
      email: '',
      dayOfBirth: 0,
      monthOfBirth: '',
      gender: Gender.Undefined,
      enableMarketingSms: true,
      enableReminderSms: true,
    });
  };

  const handleGenderChange = (
    event: React.MouseEvent<HTMLElement>,
    newGender: Gender
  ) => {
    if (localClient && newGender !== undefined) {
      setLocalClient({ ...localClient, gender: newGender });
    }
  };

  const handleReminderSmsChange = (checked: boolean) => {
    if (localClient) {
      setLocalClient({ ...localClient, enableReminderSms: checked });
    }
  };

  const handleMarketingSmsChange = (checked: boolean) => {
    if (localClient) {
      setLocalClient({ ...localClient, enableMarketingSms: checked });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (localClient && event.target.value !== undefined) {
      setLocalClient({
        ...localClient,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleChange = (newValue: string | null) => {
    if (newValue === null) {
      setLocalClient(emptyClient);
    } else {
      const foundClient = clients.find((client) => client.name === newValue);
      if (foundClient) {
        setLocalClient(foundClient);
      }
    }
  };

  useEffect(() => {
    updateClient(localClient);
  }, [localClient]);

  useEffect(() => {
    if (inputValue === '' || localClient.name !== '') {
      setShowCreateButton(false);
    } else {
      setShowCreateButton(true);
    }
  }, [inputValue, localClient]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          ml: '13px',
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '984px',
        }}
      >
        {/* Name */}
        <Autocomplete
          disablePortal
          value={localClient?.name || ''}
          onChange={(_, newValue) => {
            handleChange(newValue);
          }}
          options={clients.map((client) => client.name)}
          sx={{ width: 356 }}
          freeSolo
          onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
          inputValue={inputValue}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ minWidth: 356, width: 356 }}
              label='Choisir un client'
            />
          )}
        />
        {showCreateButton && (
          <Button
            onClick={createNewClient}
            variant='contained'
            sx={{
              color: 'white',
              position: 'relative',
              right: '73px',
              top: '8px',
              height: '32px',
              width: '51px',
              boxShadow: 'none',
              textTransform: 'capitalize',
              padding: '8px',
            }}
            color='secondary'
          >
            Créer
          </Button>
        )}
        {/* Phone */}
        <Box
          sx={{
            position: 'relative',
            right: showCreateButton ? '64px' : 0,
            width: '628px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <TextField
            sx={{
              width: 240,
              ml: '16px',
              '& .MuiInputBase-root.Mui-disabled': {
                backgroundColor: '#f0f0f0',
              },
            }}
            label='Téléphone'
            value={localClient?.phone}
            disabled={localClient?.name === '' || localClient === undefined}
            name='phone'
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <img alt='flag' src={Flag} />
                </InputAdornment>
              ),
            }}
          ></TextField>

          {/* Email */}
          <TextField
            sx={{
              width: 356,
              minWidth: 301,
              ml: '16px',
              '& .MuiInputBase-root.Mui-disabled': {
                backgroundColor: '#f0f0f0',
              },
            }}
            InputLabelProps={{ shrink: true }}
            label='Email'
            name='email'
            value={localClient?.email}
            disabled={localClient?.name === '' || localClient === undefined}
            onChange={handleInputChange}
          ></TextField>

          {/* Delete button */}
          {localClient && localClient?.name !== '' && (
            <>
              <Box sx={{ ml: '16px' }} />
              <SquaredButton
                clickMethod={resetClient}
                icon={<DeleteOutlineOutlinedIcon />}
              />
            </>
          )}
        </Box>
      </Box>
      {localClient && localClient?.name !== '' && (
        <>
          <Box
            sx={{
              ml: '13px',
              mt: '16px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              maxWidth: '984px',
            }}
          >
            {/* Gender */}
            <PermIdentity sx={{ mr: '11px', width: 16 }} />
            <ToggleButtonGroup
              value={localClient?.gender}
              exclusive
              onChange={handleGenderChange}
              aria-label='Gender selection'
            >
              <ToggleButton value={Gender.Male} aria-label='Male'>
                {Gender.Male}
              </ToggleButton>
              <ToggleButton value={Gender.Female} aria-label='Female'>
                {Gender.Female}
              </ToggleButton>
              <ToggleButton value={Gender.Child} aria-label='Child'>
                {Gender.Child}
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Date of birth */}
            <CakeOutlined sx={{ ml: '18px', mr: '11px', width: 16 }} />
            <TextField
              value={localClient.dayOfBirth}
              name='dayOfBirth'
              onChange={handleInputChange}
              variant='outlined'
              type='number'
              sx={{
                width: 108,
                ml: '16px',
                border: 'none',
                '& .MuiInputBase-root': {
                  borderRadius: '4px 0 0 4px',
                  '& fieldset': {
                    borderRight: 'none',
                  },
                },
              }}
            />
            <TextField
              value={localClient.monthOfBirth}
              name='monthOfBirth'
              onChange={handleInputChange}
              variant='outlined'
              type='text'
              sx={{
                width: 108,
                textAlign: 'center',
                '& .MuiInputBase-root': { borderRadius: '0 4px 4px 0' },
              }}
            />

            {/* SMS */}

            <Switch
              checked={localClient.enableReminderSms}
              focusVisibleClassName='.Mui-focusVisible'
              disableRipple
              sx={{ ml: '16px', mr: '8px' }}
              onChange={(e) => handleReminderSmsChange(e.target.checked)}
            />
            <Typography>SMS de rappel</Typography>

            <Switch
              checked={localClient.enableMarketingSms}
              focusVisibleClassName='.Mui-focusVisible'
              disableRipple
              sx={{ ml: '16px', mr: '8px' }}
              onChange={(e) => handleMarketingSmsChange(e.target.checked)}
            />
            <Typography>SMS marketing</Typography>
          </Box>

          {/* Client info */}
          <Box
            sx={{
              ml: '13px',
              mt: '16px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              maxWidth: '984px',
            }}
          >
            {!showInfo ? (
              <div onClick={() => setShowInfo((showInfo) => !showInfo)}>
                <Action icon='info' text='Info client' />
              </div>
            ) : (
              <>
                <InfoOutlined sx={{ fontSize: '16px', mr: '9px' }} />
                <TextField
                  value={localClient.clientInfo}
                  name='clientInfo'
                  onChange={handleInputChange}
                  variant='outlined'
                  type='text'
                  fullWidth
                />
              </>
            )}
          </Box>
          <Box
            sx={{
              ml: '13px',
              mt: '16px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              maxWidth: '984px',
            }}
          >
            <Action icon='card' text='Carte de fidélité' />
            <Typography sx={{ ml: '-15px', mr: '21px' }}>
              : Points: 42 - Gains : 10,00€(+)
            </Typography>
            <Action
              icon='copy'
              text='Forfait brushing par 5 - cheveux courts'
            />
            <Typography sx={{ ml: '-15px' }}>(4)</Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ClientSection;
