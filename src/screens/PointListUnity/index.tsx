import React from "react";

import {
    Container,
    ScrollList
} from './styles';
import { HeaderApp } from "../../components/HeaderApp";
import { ListPoints } from "../../components/ListPoints";

export function PointListUnity() {
    return (
        <Container>
            <HeaderApp
                title="Pontos da unidade, Total: 600"
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