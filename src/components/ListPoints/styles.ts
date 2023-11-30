import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import theme from "../../styles/theme";

export const Container = styled.View`
    width: 100%;
`;

export const ViewCard = styled.View`
    flex-direction: column;
    /* border-width: 2; */
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    border-bottom-width: 2;
    border-bottom-color: ${theme.colors.dark_middle_blue};
`;

export const ViewPoint = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const PointNumber = styled.Text`
    font-size: ${RFValue(40)}px;
    font-weight: 600;
    font-family: ${theme.fonts.primary_500};
`;

export const RegisterDate = styled.Text`
    font-size: ${RFValue(20)}px;
    font-weight: 500;
    color: ${theme.colors.middle_blue};
    margin-top: ${RFValue(10)}px;
`;

export const DescriptionEvent = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.title};
    margin-bottom: 5;
`;