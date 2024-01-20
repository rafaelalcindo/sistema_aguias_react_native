import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';
import { FlatList } from 'react-native-gesture-handler';
import { EventoProps } from '../../types/EventoProps';

export const Container = styled.View`
    width: 100%;
`;
export const ScrollList = styled.ScrollView`
    
`;

export const ViewCard = styled.View`
    flex-direction: column;
    /* border-width: 2; */
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    background-color: ${theme.colors.background_secondary}

    height: ${RFValue(110)}px;
    width: 90%;

    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;

    border-bottom-left-radius: 10;
    border-bottom-right-radius: 10;
    border-top-left-radius: 10;
    border-top-right-radius: 10;

        /* shadow-color: "#000";
        shadow-offset-width: 0;
        shadow-offset-height: 0;
        shadow-opacity: 0.52;
        shadow-radius: 4.22;
        elevation: 6; */

    /* border-bottom-width: 2;
    border-bottom-color: ${theme.colors.dark_middle_blue}; */
`;