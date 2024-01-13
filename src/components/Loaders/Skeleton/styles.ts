import styled from "styled-components/native";

export const Container = styled.View<
    {
        width: any,
        height: any,
        padding?: any,
        margin_bottom?: any
    }>`
    flex: 1;
    width: ${props => props.width};
    height: ${props => props.height};
    margin-bottom: ${props => props.margin_bottom ? props.margin_bottom : 0}
`;