import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.background_primary} ;
`;

/**
 * This is the view that take the blue box
 */

// Part where we show the points
export const PointsBox = styled.View`
    width: 100%;
    margin-top: 15;
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
    color: ${theme.colors.background_black_light};
    margin-left: ${RFValue(20)}px;
`;

/**
 * Part to build the menus
 */
export const MenuView = styled.View`
    width: 100%;
    padding-left: ${RFValue(20)}px;
    justify-content: space-between;
    /* border-width: 2; */
    flex-direction: row;
    flex-wrap: wrap;
    
`;

export const MenuButton = styled.TouchableOpacity`
    height: ${RFValue(80)}px;
    width: ${RFValue(80)}px;

    border-bottom-left-radius: 10;
    border-bottom-right-radius: 10;

    border-top-left-radius: 10;
    border-top-right-radius: 10;

    background-color: ${theme.colors.text_detail};

    margin-right: 30;
    margin-top: ${RFValue(30)}px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
