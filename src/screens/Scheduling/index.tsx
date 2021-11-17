import React from "react";
import { useTheme } from "styled-components";
import BackButton from "../../components/BackButton";

import {
  Container,
  Header,
  Title,
  DateInfo,
  RentalPeriod,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { useNavigation } from "@react-navigation/native";

interface Props {
  dateValue: string;
}

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleSchedulingDetails() {
    navigation.navigate("SchedulingDetails");
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"}
          data de início e{"\n"}
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
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleSchedulingDetails} />
      </Footer>
    </Container>
  );
}
