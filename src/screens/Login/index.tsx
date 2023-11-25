import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import theme from "../../styles/theme";

import {
    Container,
    WrapperContent,
    Form,
    TextInput,
    Fields
} from "./styles";
import { InputForm } from "../../components/inputForm";
import { Button } from "../../components/Button";

interface FormData {
    login: string;
    senha: string;
}

const schema = Yup.object().shape({
    login: Yup
        .string()
        .required('Login é obrigatório'),
    senha: Yup
        .number()
        .required('A Senha é obrigatório')
});

async function handleLogin() {

}


export function Login() {

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <Container>
            <WrapperContent>
                <Image
                    source={require('../../assets/logo/aguias.png')}
                    style={{ height: 140, width: 100 }}
                />

                <Form>
                    <Fields>
                        <TextInput>Login:</TextInput>
                        <InputForm
                            name="login"
                            control={control}
                            placeholder='Login'
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.login && errors.login.message}
                        />

                        <TextInput>Login:</TextInput>
                        <InputForm
                            name="senha"
                            control={control}
                            placeholder='Senha'
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.senha && errors.senha.message}
                        />

                        <Button
                            title="Entrar"
                            color={theme.colors.success}
                            onPress={() => handleLogin()}
                        />
                    </Fields>
                </Form>

            </WrapperContent>

        </Container>
    );
}