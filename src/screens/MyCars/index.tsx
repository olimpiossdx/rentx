import React, { useState, useEffect } from 'react'
import { Container } from './styles'

import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';

export const MyCars = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
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

  return (
    <Container>
    </Container>
  )
}

