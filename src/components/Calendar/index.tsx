import React from "react";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { useTheme } from "styled-components";
import { ptBR } from "./localeConfig";
import { DateData } from "react-native-calendars/src/types";
import { generateInterval } from "./generateInterval";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

interface IMarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledToucEvent?: boolean;
  };
}

interface IDayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface ICalendar {
  markedDates: IMarkedDateProps;
  onDayPress?: (date: DateData) => void;
}

function Calendar({ markedDates, onDayPress }: ICalendar) {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => {
        return (
          <Feather
            size={RFValue(24)}
            color={theme.colors.text}
            name={direction == "left" ? "chevron-left" : "chevron-right"}
          />
        );
      }}
      headerStyle={{
        backgroundColor: theme.colors.background.secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: RFValue(10),
        marginBottom: RFValue(10),
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary.regular_400,
        textDayHeaderFontFamily: theme.fonts.primary.medium_500,
        textDayHeaderFontSize: RFValue(10),
        textMonthFontFamily: theme.fonts.secondary.semiBold_600,
        textMonthFontSize: RFValue(20),
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginVertical: -RFValue(15),
        },
      }}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export { Calendar, IMarkedDateProps, IDayProps, generateInterval };
