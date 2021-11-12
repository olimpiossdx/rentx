import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Content, Title, Message, Footer } from './styles';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { RFValue } from 'react-native-responsive-fontsize';
import { ConfirmButton } from '../../components/ConfirmButton';


export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  const theme = useTheme();

  return (
    <Container>
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={RFValue(80)} height={RFValue(80)} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessonária RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title='Ok'/>
      </Footer>
    </Container>
  );
}
