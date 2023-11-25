import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
    Container,
    Title
} from './styles';

interface Props {
    title: string;
    color?: string;
    onPress: () => void;
}

export function Button(
    {
        title,
        color,
        onPress,
        ...rest
    }: Props
) {
    const theme = useTheme();

    return (
        <Container onPress={onPress} {...rest} color={color ? color : theme.colors.main} >
            <Title>{title}</Title>
        </Container>
    );
}