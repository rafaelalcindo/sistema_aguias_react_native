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