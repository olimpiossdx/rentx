import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps extends RectButtonProps {
  color: string;
};

export const Container = styled(RectButton) <ButtonProps>`
  width: 100%;

  padding: ${RFValue(19)}px;
  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme }) => color};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;