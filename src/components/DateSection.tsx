import React, { useState, useEffect } from 'react';
import { Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import moment, { Moment } from 'moment';
import TextField from '@mui/material/TextField';
import Action from '../lib/Action';

interface DateSectionProps {
  isWholeDay: boolean;
  selectWholeDay: (isWholeDay: boolean) => void;
  totalDuration: number;
  updateDate: Function;
}

const DateSection: React.FC<DateSectionProps> = ({
  isWholeDay,
  selectWholeDay,
  totalDuration,
  updateDate,
}) => {
  const [date, setDate] = React.useState<Moment | null>(moment(Date.now()));
  const [hourStart, setHourStart] = useState(14);
  const [minuteStart, setMinuteStart] = useState(30);
  const [hourEnd, setHourEnd] = useState(15);
  const [minuteEnd, setMinuteEnd] = useState(30);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const x = moment(Date.now());
    const y = moment(Date.now());
    x.hours(hourStart).minutes(minuteStart);
    y.hours(hourEnd).minutes(minuteEnd);
    const dur = moment.duration(y.diff(x));
    setDuration(
      dur.hours() !== 0 ? dur.hours() + dur.minutes() / 60 : dur.minutes() / 60
    );
  }, [
    hourStart,
    setHourStart,
    minuteStart,
    setMinuteStart,
    hourEnd,
    setHourEnd,
    minuteEnd,
    setMinuteEnd,
  ]);

  useEffect(() => {
    if (totalDuration !== duration * 60) {
      const hourNumber = Math.floor(totalDuration / 60);
      const minuteNumber = totalDuration % 60;

      const x = moment(Date.now());
      x.hours(hourStart).minutes(minuteStart);
      x.add(hourNumber, 'hour').add(minuteNumber, 'minute');
      setHourEnd(x.hours());
      setMinuteEnd(x.minutes());
    }
  }, [totalDuration, duration]);

  const handleChangeDate = (value: any) => {
    setDate(value);
  };

  useEffect(() => {
    updateDate(date);
  }, [date]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Box sx={{ ml: '16px' }} />
          <DesktopDatePicker
            label='Choisir une date'
            inputFormat='dddd Do MMMM'
            value={date}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />

          {!isWholeDay && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ ml: '16px' }}>de</Typography>
              <TextField
                value={hourStart}
                onChange={(e) => setHourStart(Number(e.target.value))}
                variant='outlined'
                type='number'
                sx={{
                  width: 55,
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
                value={minuteStart}
                onChange={(e) => setMinuteStart(Number(e.target.value))}
                variant='outlined'
                type='number'
                sx={{
                  width: 55,
                  '& .MuiInputBase-root': { borderRadius: '0 4px 4px 0' },
                }}
              />
              <Typography sx={{ ml: '16px' }}>à</Typography>
              <TextField
                value={hourEnd}
                onChange={(e) => setHourEnd(Number(e.target.value))}
                variant='outlined'
                type='number'
                sx={{
                  width: 55,
                  ml: '16px',
                  '& .MuiInputBase-root': {
                    borderRadius: '4px 0 0 4px',
                    '& fieldset': {
                      borderRight: 'none',
                    },
                  },
                }}
              />
              <TextField
                value={minuteEnd}
                onChange={(e) => setMinuteEnd(Number(e.target.value))}
                variant='outlined'
                type='number'
                sx={{
                  width: 55,
                  '& .MuiInputBase-root': { borderRadius: '0 4px 4px 0' },
                }}
              />
              <Typography sx={{ fontWeight: '600', ml: '16px' }}>
                ({duration}h)
              </Typography>
            </Box>
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={isWholeDay}
                onChange={(e, checked) => selectWholeDay(isWholeDay)}
                sx={{ ml: '16px' }}
                size='small'
                color='primary'
              />
            }
            label=''
          />
          <Typography
            sx={{ fontWeight: '600', position: 'relative', right: '20px' }}
          >
            Jour entier
          </Typography>
        </Box>
        <Box>
          <Action green icon='repeat' text='Répéter' />
        </Box>
      </Box>
    </>
  );
};

export default DateSection;
