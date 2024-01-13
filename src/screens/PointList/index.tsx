import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { Alert } from "react-native";

import {
    Container,
    ScrollList,
    PointsLists
} from './styles';

import { HeaderApp } from "../../components/HeaderApp";
import { ListPoints } from "../../components/ListPoints";
import { UsuarioPontoProps } from "../../types/UsuarioPonto";
import api from "../../services/axios";
import { useAuth } from "../../hooks/auth";

import { Skeleton } from "../../components/Loaders/Skeleton";

export function PointList() {

    const { user, handleLogOut } = useAuth();
    const [userPoints, setUserPoints] = useState<UsuarioPontoProps>();
    const [userPoint, setUserPoint] = useState<Number>(0);

    useEffect(() => {
        async function getUserPoints() {

            const { data: { list } } = await api.get(`pontoindividual?usuario_id=${user.id}`).catch((err) => {
                console.log(err);
                handleLogOut();
                Alert.alert('Tivemos um problema ao carregar os dados');
            });

            const { data: { pontos } } = await api.get(`pontoindividual/todospontos/${user.id}`).catch((err) => {
                console.log(err);
                Alert.alert('Tivemos um problema ao carregar os dados');
                handleLogOut();
            });

            setUserPoints(list);
            setUserPoint(pontos);
        }

        getUserPoints();
    }, [user]);

    return (
        <Container>
            <HeaderApp
                title={`Total: ${userPoint}`}
            />
            <ScrollList>



                {
                    userPoints ?
                        <PointsLists
                            data={userPoints}
                            keyExtractor={(item: UsuarioPontoProps) => String(item.id)}
                            renderItem={({ item }) => <ListPoints point={item} />}
                        />

                        :
                        <>
                            <Skeleton
                                height={80}
                                width={`100%`}
                                padding={10}
                                margin_bottom={8}
                            />
                            <Skeleton
                                height={80}
                                width={`100%`}
                                padding={10}
                                margin_bottom={8}
                            />
                            <Skeleton
                                height={80}
                                width={`100%`}
                                padding={10}
                                margin_bottom={8}
                            />
                            <Skeleton
                                height={80}
                                width={`100%`}
                                padding={10}
                                margin_bottom={8}
                            />
                            <Skeleton
                                height={80}
                                width={`100%`}
                                padding={10}
                                margin_bottom={8}
                            />
                        </>
                }

            </ScrollList>
        </Container>
    );
}