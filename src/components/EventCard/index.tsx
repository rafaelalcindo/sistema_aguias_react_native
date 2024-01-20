import React from 'react';
import moment from 'moment';

import { EventoProps } from '../../types/EventoProps';

import {
    Container,
    ViewCard
} from './styles';

interface Event {
    event_register?: EventoProps
}

export function EventCard(
    {
        event_register
    }: Event
) {
    return (
        <Container>
            <ViewCard
                style={
                    {
                        shadowColor: "#47474D",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.41,
                        shadowRadius: 9.11,

                        elevation: 14,
                    }
                }
            />

            <ViewCard
                style={
                    {
                        shadowColor: "#47474D",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.41,
                        shadowRadius: 9.11,

                        elevation: 14,
                    }
                }
            />

            <ViewCard
                style={
                    {
                        shadowColor: "#47474D",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.41,
                        shadowRadius: 9.11,

                        elevation: 14,
                    }
                }
            />

            <ViewCard
                style={
                    {
                        shadowColor: "#47474D",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.41,
                        shadowRadius: 9.11,

                        elevation: 14,
                    }
                }
            />

            <ViewCard
                style={
                    {
                        shadowColor: "#47474D",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.41,
                        shadowRadius: 9.11,

                        elevation: 14,
                    }
                }
            />

        </Container>
    );
}