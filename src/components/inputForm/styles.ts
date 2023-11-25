import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

import theme from "../../styles/theme";

export const Container = styled.View`
    width: 100%;
`;

export const Error = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.main};
`
