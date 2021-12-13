import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";

import BackButton from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import speedSvg from "../../assets/speed.svg";
import accelarationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceTotal,
  RentalPriceDetails,
  RentalPriceQuota,
  Footer,
} from "./styles";

import { Acessory } from "../../components/Acessory";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { Alert, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";
import { CarDTO } from "../../dtos/CarDTO";
import { format } from "date-fns";
import { getPlatFormDate } from "../../utils/getPlatformDate";
import api from "../../services/api";

interface Parms {
  car: CarDTO;
  dates: string[];
}
interface RentalPeriod {
  start: string;
  end: string;
};

export function SchedulingDetails() {
  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Parms;
  const rentTotal = Number(dates.length * car.rent.price);

  async function handleSchedulingCompleteAsync() {
    setLoading(true)
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post(`schedules_byuser`, {
      user_id: 1,
      car,
      startDate: format(getPlatFormDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlatFormDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    });

    api.put(`/schedules_bycars/${car.id}`, { id: car.id, unavailable_dates })
      .then(() => navigation.navigate("SchedulingComplete"))
      .catch(() => {
        Alert.alert('Não foi possível confirmar o agendamento.');
        setLoading(false);
      })
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatFormDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatFormDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map(acessory =>
            <Acessory key={acessory.type} name={acessory.name} icon={getAcessoryIcon(acessory.type)} />)}
        </Accessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(15)}
            color={theme.colors.shape}
          />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Alugar agora" color={theme.colors.success} onPress={handleSchedulingCompleteAsync} loading={loading} enabled={!loading} />
      </Footer>
    </Container>
  );
}
