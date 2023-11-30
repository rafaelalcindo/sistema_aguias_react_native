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
    Fields,
    SpaceButton
} from "./styles";
import { InputForm } from "../../components/inputForm";
import { Button } from "../../components/Button";

interface FormData {
    login: string;
    senha: string;
}

export function Login() {

    const schema = Yup.object().shape({
        login: Yup
            .string()
            .required('Login é obrigatório'),
        senha: Yup
            .string()
            .required('A Senha é obrigatório')
    });

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleLogin(form: FormData) {
        console.log(form);
    }

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

                        <TextInput>Senha:</TextInput>
                        <InputForm
                            name="senha"
                            control={control}
                            placeholder='Senha'
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.senha && errors.senha.message}
                        />

                        <SpaceButton>
                            <Button
                                title="Entrar"
                                color={theme.colors.success}
                                onPress={handleSubmit(handleLogin)}
                            />
                        </SpaceButton>
                    </Fields>
                </Form>

            </WrapperContent>

        </Container>
    );
}