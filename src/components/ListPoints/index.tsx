import React from 'react';
import moment from 'moment';

import {
    Container,
    ViewCard,
    ViewPoint,
    PointNumber,
    RegisterDate,
    DescriptionEvent
} from './styles';

import { UsuarioPontoProps } from '../../types/UsuarioPonto';

interface Point {
    point: UsuarioPontoProps
}

export function ListPoints(
    {
        point
    }: Point
) {
    return (
        <Container>
            <ViewCard>
                <ViewPoint>
                    <PointNumber>
                        {point.pontos}
                    </PointNumber>
                    <RegisterDate>
                        {moment.utc(point.created_at).format('DD/MM/YYYY hh:mm')}
                    </RegisterDate>
                </ViewPoint>

                <DescriptionEvent>
                    {point.descricao}
                </DescriptionEvent>
            </ViewCard>
        </Container>
    );
}