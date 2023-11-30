import React from "react";
import Icon from 'react-native-vector-icons/Octicons';


import {
    Container,
    ProfileBox,
    ImageProfile,
    EmptyImage,
    ProfileNameUser,
    TextName
} from './styles';

interface Props {
    title: string;
}


export function HeaderApp(
    {
        title
    }: Props
) {

    return (
        <ProfileBox>
            <ImageProfile>
                {/* View from profile Picture */}
                <EmptyImage>
                    <Icon name="image" size={31} color={'#fff'} />
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