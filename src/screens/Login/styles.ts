import styled from "styled-components/native";

import theme from "../../styles/theme";


export const Container = styled.View`
    flex: 1;
`;

export const WrapperContent = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.dark_middle_blue};
    padding-top: 40%;
`;

export const Fields = styled.View``;

export const Form = styled.View`
    flex: 1;
    justify-content: space-between;
    width: 100%;

    padding: 24px;
`;

export const TextInput = styled.Text`
    font-family: ${theme.fonts.primary_500}
    color: ${theme.colors.shape};
    font-size: 20px;
    margin-bottom: 10px;
`;