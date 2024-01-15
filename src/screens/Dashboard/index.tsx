import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { Alert, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from "../../styles/theme";

import {
    Container,
    PointsBox,
    ViewTextPont,
    TextPoint,
    MenuView,
    MenuButton
} from './styles';
import { HeaderApp } from "../../components/HeaderApp";
import { useAuth } from "../../hooks/auth";
import api from "../../services/axios";
import { Skeleton } from "../../components/Loaders/Skeleton";

export function Dashboard() {

    const navigation = useNavigation();

    const { user, handleLogOut } = useAuth();
    const [userPoint, setUserPoint] = useState<Number>(0);
    const [unityPoint, setUnityPoint] = useState<Number>(0);

    useEffect(() => {

        async function getUserPoints() {

            const { data: { pontos } } = await api.get(`pontoindividual/todospontos/${user.id}`).catch((err) => {
                console.log(err);
                Alert.alert('Tivemos um problema ao carregar os dados');
                handleLogOut();
            });

            setUserPoint(pontos);
        }

        async function getUnityPoints() {
            const { data: { pontos } } = await api.get(`pontounidade/todospontos/${user.unidade_id}`).catch((err) => {
                console.log(err);
                Alert.alert('Tivemos um problema ao carregar os dados');
                handleLogOut();
            });


            setUnityPoint(pontos);
        }

        getUserPoints();
        getUnityPoints();
    }, []);

    return (
        <Container>

            {/* Cabeçalho inicial que ira ter em todas as partes do app */}
            < HeaderApp
                title={`Olá ${user.nome}`}
            />

            {/* Points side */}

            < PointsBox >
                <ViewTextPont>
                    <TextPoint>Pontos</TextPoint>
                    {
                        userPoint ?
                            <TextPoint>R$ {String(userPoint)}</TextPoint>
                            :
                            <Skeleton
                                width={70}
                                height={40}
                                padding={0}
                                margin_bottom={0}
                            />
                    }

                </ViewTextPont>

                <ViewTextPont>
                    <TextPoint>P. Unidade</TextPoint>
                    {
                        unityPoint ?
                            <TextPoint>R$ {String(unityPoint)}</TextPoint>
                            :
                            <Skeleton
                                width={70}
                                height={40}
                                padding={0}
                                margin_bottom={0}
                            />
                    }

                </ViewTextPont>

            </PointsBox >

            {/* Part of menus */}

            < MenuView >
                <MenuButton>
                    <Icon2 name="qrcode" size={39} color={theme.colors.background_black} />
                </MenuButton>

                <MenuButton>
                    <Icon2 name="github" size={39} color={theme.colors.background_black} />
                </MenuButton>

                <MenuButton onPress={() => navigation.navigate('PointList')} >
                    <Icon2 name="piechart" size={39} color={theme.colors.background_black} />
                </MenuButton>

                <MenuButton onPress={() => navigation.navigate('PointListUnity')}>
                    <Icon2 name="idcard" size={39} color={theme.colors.background_black} />
                </MenuButton>

                <MenuButton>
                    <Icon2 name="profile" size={39} color={theme.colors.background_black} />
                </MenuButton>

                <MenuButton>
                    <Icon2 name="table" size={39} color={theme.colors.background_black} />
                </MenuButton>
            </MenuView >

        </Container >
    );
}