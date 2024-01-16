import React from "react";
import { Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/Octicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { useAuth } from "../../hooks/auth";

import {
    Container,
    ProfileBox,
    ImageProfile,
    EmptyImage,
    ProfileNameUser,
    TextName
} from './styles';
import { UsuarioProps } from "../../types/Usuario";


interface Props {
    title: string;
}


export function HeaderApp(
    {
        title
    }: Props
) {
    const { handleLogOut, user } = useAuth();
    console.log(user.foto_perfil)

    return (
        <ProfileBox>
            <ImageProfile>
                {/* View from profile Picture */}
                {/* http://localhost:3001/profile/210a0aa6bb3ef3b1dfee-drone.JPG */}
                <EmptyImage>
                    {
                        user.foto_perfil ?
                            <Image
                                style={
                                    {
                                        width: 50,
                                        height: 50,
                                        borderBottomLeftRadius: 30,
                                        borderBottomRightRadius: 30,

                                        borderTopLeftRadius: 30,
                                        borderTopRightRadius: 30

                                    }
                                }
                                source={{
                                    // uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    uri: `http://10.0.2.2:3001/profile/${user.foto_perfil}`,
                                }}

                            />
                            :
                            <Icon name="image" size={31} color={'#fff'} />
                    }

                </EmptyImage>


                <EmptyImage>

                    <IconMaterial name="power-settings-new" size={31} color={'#fff'} onPress={() => handleLogOut()} />
                </EmptyImage>
            </ImageProfile>

            <ProfileNameUser>
                <TextName>
                    {title}
                </TextName>
            </ProfileNameUser>

        </ProfileBox>
    );
}