import React from "react";
import { Text } from "react-native";
import { FaRegImage } from 'react-icons/fa';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/AntDesign';

import theme from "../../styles/theme";

import {
    Container,
    ProfileBox,
    ImageProfile,
    EmptyImage,
    ProfileNameUser,
    TextName,
    PointsBox,
    ViewTextPont,
    TextPoint,
    MenuView,
    MenuButton
} from './styles';

export function Dashboard() {
    return (
        <Container>
            <ProfileBox>
                <ImageProfile>
                    {/* View from profile Picture */}
                    <EmptyImage>
                        <Icon name="image" size={31} color={'#fff'} />
                    </EmptyImage>


                </ImageProfile>
                <ProfileNameUser>
                    <TextName>
                        Olá, Roberto Costa
                    </TextName>
                </ProfileNameUser>

            </ProfileBox>

            {/* Points side */}

            <PointsBox>
                <ViewTextPont>
                    <TextPoint>Pontos</TextPoint>
                    <TextPoint>R$ 300</TextPoint>
                </ViewTextPont>

                <ViewTextPont>
                    <TextPoint>P. Unidade</TextPoint>
                    <TextPoint>R$ 120</TextPoint>
                </ViewTextPont>

            </PointsBox>

            {/* Part of menus */}

            <MenuView>
                <MenuButton>
                    <Icon2 name="qrcode" size={32} color={theme.colors.background_black} />
                </MenuButton>

                <MenuButton>
                    <Icon2 name="github" size={32} color={theme.colors.background_black} />
                </MenuButton>

                <MenuButton>
                    <Icon2 name="piechart" size={32} color={theme.colors.background_black} />
                </MenuButton>

                <MenuButton>
                    <Icon2 name="idcard" size={32} color={theme.colors.background_black} />
                </MenuButton>

                <MenuButton>
                    <Icon2 name="profile" size={32} color={theme.colors.background_black} />
                </MenuButton>

                <MenuButton>
                    <Icon2 name="table" size={32} color={theme.colors.background_black} />
                </MenuButton>
            </MenuView>

        </Container>
    );
}