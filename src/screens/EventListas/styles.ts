import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';
import { FlatList } from 'react-native-gesture-handler';
import { EventoProps } from '../../types/EventoProps';

export const Container = styled.View`
    flex: 1;
`;

export const ScrollList = styled.ScrollView`    
`;

export const EventBox = styled.View`
    flex-direction: column;
    width: 100%;
    height: ${RFValue(90)}px;
    justify-content: center;
    align-items: center;
    
`;

export const EventFlatLists = styled(FlatList<EventoProps>)
    .attrs(
        {
            contentContainerStyle: {

            },
            showVerticalScrollIndicator: false
        }
    )
    ``;