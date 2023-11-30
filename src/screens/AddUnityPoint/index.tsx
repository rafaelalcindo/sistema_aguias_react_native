import React, { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import { parse } from 'date-fns';

import { Alert } from 'react-native';

import {
    Container,
    WrapperContent,
    Form,
    Fields,
    TextInput,
    WrapeprButton
} from './styles';

import { HeaderApp } from '../../components/HeaderApp';
import { InputForm } from '../../components/inputForm';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';
import { InputDate } from '../../components/InputDate';

import { UnidadePontoProps } from '../../types/UnidadePonto';

export function AddUnityPoint() {

    const [selectUnidade, setSelectUnidade] = useState<any>();
    const [datePontos, setDatePontos] = useState("");

    const schema = Yup.object().shape({
        pontos: Yup
            .number()
            .required('Ponto é obrigatório'),
        descricao: Yup
            .string()
            .required('A Senha é obrigatório'),
        data_pontos: Yup
            .string(),
    });

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleFields(form: UnidadePontoProps) {

        if (selectUnidade == null || datePontos == '') {
            Alert.alert('por favor selecione a unidade e a data');
        }

        form.unidade_id = selectUnidade;
        form.data_pontos = parse(datePontos, "dd/MM/yyyy", new Date());
    }

    return (
        <Container>
            <HeaderApp
                title='Adicionar Ponto de Unidade'
            />
            <WrapperContent>
                <Form>
                    <Fields>
                        <TextInput>Pontos:</TextInput>
                        <InputForm
                            name="pontos"
                            control={control}
                            placeholder='Pontos'
                            autoCapitalize='sentences'
                            keyboardType='numeric'
                            autoCorrect={false}
                            error={errors.pontos && errors.pontos.message}
                        />

                        <TextInput>Descrição:</TextInput>
                        <InputForm
                            name="descricao"
                            control={control}
                            placeholder='Descrição'
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.descricao && errors.descricao.message}
                        />

                        <TextInput>Unidade:</TextInput>
                        <Picker
                            style={
                                {
                                    backgroundColor: theme.colors.shape,
                                    marginBottom: 15,
                                }
                            }
                            selectedValue={selectUnidade}
                            onValueChange={(itemValue, itemIndex) => setSelectUnidade(itemValue)}

                        >
                            <Picker.Item label="Selecione" value={null} />
                            <Picker.Item label="Águia de Fogo" value="1" />
                            <Picker.Item label="Águia Americana" value="2" />
                            <Picker.Item label="Águia Dourada" value="3" />
                            <Picker.Item label="Águia Real" value="4" />
                        </Picker>

                        <TextInput>Data:</TextInput>
                        <InputDate
                            control={control}
                            placeholder='Data'
                            autoCorrect={false}
                            value={datePontos}
                            name='data_pontos'
                            // onChangeText={setDatePontos}
                            error={errors.data_pontos && errors.data_pontos.message}
                            editable={false}
                            setDatePontos={setDatePontos}
                        />



                        <WrapeprButton>
                            <Button
                                title='Salvar'
                                color={theme.colors.light_blue}
                                onPress={handleSubmit(handleFields)}
                            />
                        </WrapeprButton>
                    </Fields>
                </Form>
            </WrapperContent>
        </Container>
    );
}