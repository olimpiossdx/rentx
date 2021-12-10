import React, { useState, useEffect } from 'react'
import { FlatList, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import BackButton from '../../components/BackButton';

import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';

import { Container, Header, Title, SubTitle, Content, Appointments, AppointmentsTitle, AppointmentsQuantity } from './styles'
import { Car } from '../../components/Car';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
}

export const MyCars = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fecthCars() {
      try {
        const response = await api.get(`/sechedules_byuser?user_id=${1}`);
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fecthCars()
  }, []);


  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de início e{"\n"}
          fim do aluguel
        </Title>
        <SubTitle>
          Conforto, segurança e privacidade.
        </SubTitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>05</AppointmentsQuantity>
        </Appointments>
        <FlatList
          data={cars}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Car key={item.car.id} data={item.car} />
          )}
        />

      </Content>
    </Container>
  )
}

