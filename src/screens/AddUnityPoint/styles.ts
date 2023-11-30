import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../styles/theme";

export const Container = styled.View`
    flex: 1;
`;

export const Fields = styled.View``;

export const WrapperContent = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background_primary};
    /* padding-top: 40%; */
`;


export const Form = styled.View`
    flex: 1;
    justify-content: space-between;
    width: 100%;

    padding: 24px;
`;

export const TextInput = styled.Text`
    font-family: ${theme.fonts.primary_500}
    color: ${theme.colors.shape_dark};
    font-size: 20px;
    margin-bottom: 10px;
`;

export const WrapeprButton = styled.View`
    margin-top: ${RFValue(10)}px;
`;