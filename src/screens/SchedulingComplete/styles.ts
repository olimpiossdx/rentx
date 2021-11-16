import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface DateValueProps {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  
  padding-top: ${RFValue(Dimensions.get('screen').height*.0005)}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-bottom: ${RFValue(Dimensions.get('screen').height*.08)}px;
`;


export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary.semiBold_600};

  margin-top: ${RFValue(Dimensions.get('screen').height*.002)}px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary.regular_400};
  line-height: ${RFValue(25)}px;
  text-align: center;

  margin-top: ${RFValue(6)}px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin: ${RFValue(20)}px 0px; 
`;