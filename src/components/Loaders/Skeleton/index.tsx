import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import { Container } from "./styles";

interface SizeLoader {
    height: any,
    width: any,
    padding?: any
    margin_bottom?: any
}

export function Skeleton(
    {
        height,
        width,
        padding,
        margin_bottom
    }: SizeLoader) {

    return (
        <Container
            height={height}
            width={width}
            padding={padding}
            margin_bottom={margin_bottom}
        >
            <Image
                source={require('../../../assets/skeleton_loader.gif')}
                style={{ height: height, width: width }}
            />
        </Container>
    );
}