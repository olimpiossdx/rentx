import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface DateValueProps {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;

  background-color: ${({ theme }) => theme.colors.header};
  
  justify-content: center;
  padding: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary.semiBold_600};
  font-size: ${RFValue(34)}px;

  margin-top: ${RFValue(24)}px;
`;

export const DateInfo = styled.View`
  width: 100%;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPeriod = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary.medium_500};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary.medium_500};
  font-size: ${RFValue(15)}px;
`;
