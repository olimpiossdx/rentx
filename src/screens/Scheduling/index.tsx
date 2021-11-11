import React from 'react';
import { useTheme } from 'styled-components';
import BackButton from '../../components/BackButton';

import { Container, Header, Title, DateInfo, RentalPeriod, DateTitle, DateValue, Content, Footer } from './styles';
import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';

interface Props {
  dateValue: string;

};

export function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
        <BackButton onPress={() => { }} color={theme.colors.shape} />

        <Title>
          Escolha uma {'\n'}
          data de início e{'\n'}
          fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>10/10/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>10/10/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>

      </Content>
      <Footer>
        <Button title='Confirmar' />
      </Footer>
    </Container>
  );
}
