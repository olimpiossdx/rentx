import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelarationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { Container, Header, CarImages, Content, Details, Description, Brand, Name, Rent, Period, Price, Acessories, About, Footer } from './styles';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

export function CarDetails() {
  const navigation = useNavigation();

  function HandleConfirmRental() {
    navigation.navigate('Scheduling');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$500 </Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name='380Km/h' icon={speedSvg} />
          <Acessory name='3.2s' icon={accelarationSvg} />
          <Acessory name='800 HP' icon={forceSvg} />
          <Acessory name='Gasoline' icon={gasolineSvg} />
          <Acessory name='Auto' icon={exchangeSvg} />
          <Acessory name='2 pessoas' icon={peopleSvg} />
        </Acessories>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title='Confirmar' color={''} onPress={HandleConfirmRental} />
      </Footer>

    </Container>
  )
}
