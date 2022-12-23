import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBody from './AppBody';
import Section from './Section';
import { Client, Employee, Gender, RichDate, Service } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Backdrop, Box, CircularProgress } from '@mui/material';
import Action from '../lib/Action';
import ServiceSection from '../components/ServiceSection';
import DateSection from '../components/DateSection';
import ClientSection from '../components/ClientSection';
import AddServiceButton from '../components/AddServicesButton';
import { Moment } from 'moment';
import { emptyClient, emptyService } from '../utils';

const AppContainer: React.FC = () => {
  const [client, setClient] = useState<Client>(emptyClient);
  const [selectedServices, setSelectedServices] = useState<Service[]>([
    emptyService,
  ]);
  const [date, setDate] = useState<Moment | null>();
  const [isWholeDay, setIsWholeDay] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalDuration, setTotalDuration] = useState<number>(0);

  useEffect(() => {
    let totalPrice: number = 0;
    let totalDuration: number = 0;
    for (let i = 0; i < selectedServices.length; i++) {
      totalPrice = totalPrice + selectedServices[i].price;
      totalDuration = totalDuration + selectedServices[i].duration;
    }
    setTotalPrice(totalPrice);
    setTotalDuration(totalDuration);
  }, [selectedServices]);

  const addService = () => {
    setSelectedServices([
      ...selectedServices,
      { name: '', price: 0, duration: 0, employee: '', index: 0 },
    ]);
  };

  const updateService = (service: Service, index: number) => {
    let newArray = [...selectedServices];
    newArray[index] = service;
    setSelectedServices(newArray);
  };

  const updateEmployee = (employee: Employee, index: number) => {
    let newArray = [...selectedServices];
    newArray[index].employee = employee.name;
    setSelectedServices(newArray);
  };

  const handlePriceChange = (value: number, index: number) => {
    let newArray = [...selectedServices];
    newArray[index].price = value;
    setSelectedServices(newArray);
  };

  const handleDurationChange = (value: number, index: number) => {
    let newArray = [...selectedServices];
    newArray[index].duration = value;
    setSelectedServices(newArray);
  };

  const deleteService = (index: number) => {
    if (selectedServices.length === 1) {
      setSelectedServices([
        { name: '', price: 0, duration: 0, employee: '', index: 0 },
      ]);
    } else {
      const newArray = [...selectedServices];
      newArray.splice(index, 1);
      setSelectedServices(newArray);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box sx={{ width: '1100px' }}>
          <Header />
          <form onSubmit={(e) => handleSubmit(e)}>
            <AppBody>
              <Section icon='avatar'>
                <ClientSection
                  client={client}
                  updateClient={(c: Client) => setClient(c)}
                />
              </Section>
              <Section icon='calendar'>
                <DateSection
                  isWholeDay={isWholeDay}
                  selectWholeDay={(isWholeDay: boolean) =>
                    setIsWholeDay(!isWholeDay)
                  }
                  totalDuration={totalDuration}
                  updateDate={(date: Moment | null) => setDate(date)}
                />
              </Section>
              {selectedServices.map((service, index) => {
                return (
                  <Section key={index} icon='file'>
                    <ServiceSection
                      service={{ ...service, index }}
                      index={index}
                      updateService={updateService}
                      updateEmployee={updateEmployee}
                      updatePrice={handlePriceChange}
                      updateDuration={handleDurationChange}
                      deleteService={deleteService}
                      isWholeDay={isWholeDay}
                    />
                  </Section>
                );
              })}

              <AddServiceButton addService={addService} />
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Action text='Ajouter un titre' icon='file' />
                <Action text='Ajouter une note' icon='edit' />
              </Box>
            </AppBody>
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isLoading}
              onClick={() => setIsLoading(false)}
            >
              <CircularProgress color='inherit' />
            </Backdrop>
            <Footer isLoading={isLoading} totalPrice={totalPrice} />
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AppContainer;
