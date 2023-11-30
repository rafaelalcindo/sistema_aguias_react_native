import React from "react";
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/AntDesign';

import {
    Container,
    ScrollList
} from './styles';
import { HeaderApp } from "../../components/HeaderApp";
import { ListPoints } from "../../components/ListPoints";

export function PointList() {

    return (
        <Container>
            <HeaderApp
                title="Total: 600"
            />
            <ScrollList>


                <ListPoints />

                <ListPoints />

                <ListPoints />

                <ListPoints />
                <ListPoints />
                <ListPoints />
                <ListPoints />
                <ListPoints />
                <ListPoints />
                <ListPoints />
                <ListPoints />
            </ScrollList>
        </Container>
    );
}