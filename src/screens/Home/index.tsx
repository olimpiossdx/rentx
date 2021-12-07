import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { CarDTO } from "../../dtos/CarDTO";
import api from "../../services/api";
import { Container, HeaderContent, Header, TotalCars, CarList, MyCardsButton } from "./styles";
import { Ionicons } from '@expo/vector-icons';

export function Home() {
  const navigation = useNavigation();

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function HandleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(`
          scrren: Home\n
          method: fetchCars\n
          error: ${error}\n
        `);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
    return () => {
      fetchCars();
    };
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => HandleCarDetails(item)} />
          )}
        />
      )}

      <MyCardsButton>
        <Ionicons name='ios-car-sport' />
      </MyCardsButton>
    </Container>
  );
}
