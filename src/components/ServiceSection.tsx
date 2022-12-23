import React, { useEffect, useState } from 'react';
import { Employee, Service } from '../types';
import { servicesList, employees } from '../data';
import GenericSelect from '../lib/GenericSelect';
import SquaredButton from '../lib/SquaredButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, Button } from '@mui/material';
import GenericNumberInput from '../lib/GenericNumberInput';

interface ServiceSectionProps {
  service: Service;
  index: number;
  updateService: (service: Service, index: number) => void;
  updateEmployee: (employee: Employee, index: number) => void;
  updatePrice: (value: number, index: number) => void;
  updateDuration: (value: number, index: number) => void;
  deleteService: (index: number) => void;
  isWholeDay: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  service,
  index,
  updateService,
  updateEmployee,
  updatePrice,
  updateDuration,
  deleteService,
  isWholeDay,
}) => {
  const [localService, setLocalService] = useState(service);

  useEffect(() => {
    setLocalService(service);
  }, [service]);

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
            maxWidth: '50%',
          }}
        >
          <GenericSelect
            options={servicesList}
            label='Choisir une prestation'
            selected={localService}
            index={index}
            updateSelection={updateService}
          />
          <GenericSelect
            options={employees}
            label='Choisir un collaborateur'
            selected={
              employees.filter((e) => e.name === service.employee)[0] || ''
            }
            index={index}
            updateSelection={updateEmployee}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {index === 0 && localService.name === '' ? (
            <div></div>
          ) : (
            <>
              {!isWholeDay && (
                <GenericNumberInput
                  unit='Min'
                  value={localService.duration}
                  handleChange={(e) =>
                    updateDuration(Number(e.target.value), index)
                  }
                />
              )}
              <GenericNumberInput
                unit='€'
                value={localService.price}
                handleChange={(e) => updatePrice(Number(e.target.value), index)}
              />
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
                onClick={() => deleteService(index)}
              >
                <DeleteOutlineOutlinedIcon />
              </Button>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ServiceSection;
