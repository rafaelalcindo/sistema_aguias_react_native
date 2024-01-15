import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../../styles/theme";
import { FlatList } from 'react-native-gesture-handler';
import { UnidadePontoProps } from "../../types/UnidadePonto";

export const Container = styled.View`
    flex: 1;
`;

export const ScrollList = styled.ScrollView`
    
`;

// Part where we show the points
export const PointsBox = styled.View`
    width: 100%;
    height: ${RFValue(90)}px;
    /* border-width: 3; */
    justify-content: center;
    flex-direction: row;
`;

export const ViewTextPont = styled.View`
    width: 50%;
    /* border-width: 3; */
`;

export const TextPoint = styled.Text`
    font-family: ${theme.fonts.primary_500};
    font-weight: 800;
    font-size: 23px;
    color: ${theme.colors.background_black};
    margin-left: ${RFValue(20)}px;
`;

export const PointsLists = styled(FlatList<UnidadePontoProps>)
    .attrs(
        {
            contentContainerStyle: {

            },
            showVerticalScrollIndicator: false
        }
    )
    `
`;