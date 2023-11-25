import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';

export const Container = styled.View`
    flex: 1;
`;

/**
 * This is the view that take the blue box
 */
export const ProfileBox = styled.View`
    flex-direction: column;
    width: 100%;
    height: ${RFValue(200)}px;
    background-color: ${theme.colors.dark_middle_blue};
`;

export const ImageProfile = styled.View`
    width: 100%;
    height: ${RFValue(100)}px;
    
    justify-content: center;
`;

export const EmptyImage = styled.View`
    margin-left: ${RFValue(20)}px;
    height: ${RFValue(50)}px;
    width: ${RFValue(50)}px;
    border-width: 1px;
    border-bottom-left-radius: 30;
    border-bottom-right-radius: 30;

    border-top-left-radius: 30;
    border-top-right-radius: 30;

    background-color: ${theme.colors.darkLight_blue};
    padding-left: ${RFValue(10)}px;
    padding-top:${RFValue(10)}px;
    border-color: ${theme.colors.darkLight_blue};
`;

export const ProfileNameUser = styled.View`
    width: 100%;    
    height: ${RFValue(100)}px;
    justify-content: center;
`;

export const TextName = styled.Text`
    color: ${theme.colors.main_light};
    font-family: ${theme.fonts.primary_500};
    font-size: 23;
    margin-left: ${RFValue(20)}px;
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

export const MenuButton = styled.View`
    height: ${RFValue(70)}px;
    width: ${RFValue(70)}px;

    border-bottom-left-radius: 60;
    border-bottom-right-radius: 60;

    border-top-left-radius: 60;
    border-top-right-radius: 60;

    background-color: ${theme.colors.text_detail};

    padding-top: ${RFValue(20)}px;
    padding-left: ${RFValue(20)}px;

    margin-right: 30;
    margin-top: ${RFValue(30)}px;
`;
