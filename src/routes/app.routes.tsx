import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// const { Navigator, Screen } = createBottomTabNavigator();
const { Navigator, Screen } = createStackNavigator();

import { Dashboard } from "../screens/Dashboard";
import { PointList } from "../screens/PointList";

export function AppRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                // tabBarActiveTintColor: theme.colors.darkLight_blue,
                // tabBarInactiveBackgroundColor: theme.colors.dark_middle_blue,
                // tabBarLabelPosition: 'beside-icon',
                // tabBarStyle: {
                //     height: 88,
                //     paddingVertical: Platform.OS === 'ios' ? 20 : 0
                // }
            }}
        >
            <Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="PointList"
                component={PointList}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />


        </Navigator>
    )
}

