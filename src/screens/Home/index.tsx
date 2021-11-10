import React from 'react'
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Container, HeaderContent, Header, TotalCars, CarList } from './styles';

export function Home() {
  const carOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120
    },
    tumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  };

  const carTwo = {
    brand: 'Porche',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 340
    },
    tumbnail: 'https://img2.gratispng.com/20180830/xzi/kisspng-2-17-porsche-panamera-car-2-18-porsche-panamera-e-el-masria-5b88414c003bb0.678806641535656268001.jpg'
  };

  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[carOne, carTwo, carOne, carTwo, carOne, carTwo, carOne, carTwo]}
        keyExtractor={item => String(item)}
        renderItem={({ item }: any) => <Car data={item} />}
      />
      {/* <Car data={carOne} />
      <Car data={carTwo} /> */}
    </Container>
  );
}