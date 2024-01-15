import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import {
    Container,
    ScrollList,
    PointsLists
} from './styles';
import { HeaderApp } from "../../components/HeaderApp";
import { ListPoints } from "../../components/ListPoints";
import { UnidadePontoProps } from "../../types/UnidadePonto";
import api from "../../services/axios";
import { useAuth } from "../../hooks/auth";

import { Skeleton } from "../../components/Loaders/Skeleton";

export function PointListUnity() {

    const { user, handleLogOut } = useAuth();
    const [unityPoints, setUnityPoints] = useState<UnidadePontoProps>();
    const [unityPoint, setUnityPoint] = useState<Number>(0);

    useEffect(() => {
        async function getUnityPoints() {
            const { data: { list } } = await api.get(`pontounidade?unidade_id=${user.unidade_id}`).catch((err) => {
                console.log(err);
                handleLogOut();
                Alert.alert('Tivemos um problema ao carregar os dados');
            });

            const { data: { pontos } } = await api.get(`pontounidade/todospontos/${user.unidade_id}`).catch((err) => {
                console.log(err);
                Alert.alert('Tivemos um problema ao carregar os dados');
                handleLogOut();
            });

            setUnityPoints(list);
            setUnityPoint(pontos);

        }

        getUnityPoints();

    }, [user]);

    return (
        <Container>
            <HeaderApp
                title={`Pontos da unidade, Total: ${unityPoint}`}
            />
            <ScrollList>

                {
                    unityPoints ?
                        <PointsLists
                            data={unityPoints}
                            keyExtractor={(item: UnidadePontoProps) => String(item.id)}
                            renderItem={({ item }) => <ListPoints point={item} />}
                        />
                        :
                        <>
                            {
                                [...Array(6)].map(
                                    (x, i) => (
                                        <Skeleton
                                            height={80}
                                            width={`100%`}
                                            padding={10}
                                            margin_bottom={8}
                                        />
                                    )
                                )
                            }
                        </>

                }

            </ScrollList>
        </Container>
    );
}