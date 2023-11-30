import React from 'react';

import {
    Container,
    ViewCard,
    ViewPoint,
    PointNumber,
    RegisterDate,
    DescriptionEvent
} from './styles';

export function ListPoints() {
    return (
        <Container>
            <ViewCard>
                <ViewPoint>
                    <PointNumber>
                        250
                    </PointNumber>
                    <RegisterDate>
                        12/12/2023
                    </RegisterDate>
                </ViewPoint>

                <DescriptionEvent>
                    Ponto de chegada no Clube
                </DescriptionEvent>
            </ViewCard>
        </Container>
    );
}