import React, { FC } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';
import { Container, Name } from './styles';

interface Props {
  name: string;
  icon: FC<SvgProps>;
};

export function Acessory({ name, icon: Icon }: Props) {
  return (
    <Container>
      <Icon width={RFValue(32)} height={RFValue(32)} />
      <Name>{name}</Name>
    </Container>
  );
};
