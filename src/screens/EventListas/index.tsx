import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { Alert } from "react-native";

import { HeaderApp } from "../../components/HeaderApp";
import { EventoProps } from "../../types/EventoProps";
import api from "../../services/axios";
import { useAuth } from "../../hooks/auth";

import { EventCard } from "../../components/EventCard";
import { Skeleton } from "../../components/Loaders/Skeleton";

import {
    Container,
    ScrollList,
    EventBox,
    EventFlatLists
} from './styles';

export function EventListas() {
    const { user, handleLogOut } = useAuth();
    const [events, setEvents] = useState<EventoProps>();

    useEffect(() => {
        async function getEvents() {
            const { data: { list } } = await api.get(`/evento`).catch((err) => {
                console.log(err);
                handleLogOut();
                Alert.alert('Tivemos um problema ao carregar os dados');
            });

            setEvents(list);
        }

        getEvents();
    }, [user]);

    return (
        <Container>
            <HeaderApp
                title={`Eventos`}
            />
            <ScrollList>
                <EventCard />
            </ScrollList>
        </Container>
    );
}