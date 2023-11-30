import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInputProps, Pressable, Platform } from "react-native";
import { Control, Controller } from 'react-hook-form';

import { InputForm } from "../inputForm";

interface Props extends TextInputProps {
    control: Control;
    name: string;
    error: string;
    setDatePontos: (currentDate: string) => void
}

export function InputDate(
    {
        control,
        name,
        error,
        setDatePontos,
        ...rest
    }: Props
) {

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    const onChange = ({ type }: any, selectedDate: Date) => {
        if (type == "set") {
            toggleDatePicker();
            const currentDate = selectedDate;
            setDate(currentDate);
            console.log(currentDate)

            if (Platform.OS === 'android') {
                console.log('entrou')
                // toggleDatePicker();
                // setDatePontos(currentDate.toDateString());
                setDatePontos(formatDate(currentDate));

            }
        } else {
            toggleDatePicker();
        }
    };

    const formatDate = (rawDate: Date) => {
        let date = new Date(rawDate);

        let year = rawDate.getFullYear();
        let month = rawDate.getMonth() + 1;
        let day = rawDate.getDate();

        month = (month < 10 ? `0${month}` : month) as any;
        day = (day < 10 ? `0${day}` : day) as any;

        console.log(`${day}/${month}/${year}`);

        return `${day}/${month}/${year}`;
    }

    return (
        <Pressable
            onPress={toggleDatePicker}
        >
            <InputForm
                control={control}
                name={name}
                error={error}
                {...rest}
            />
            {
                showPicker && (
                    <DateTimePicker
                        mode='date'
                        value={date}
                        display='default'
                        locale='pt-br'
                        onChange={onChange}
                    />
                )
            }
        </Pressable>
    );

}