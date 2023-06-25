import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BarChart3, Gamepad2, Home as HomeIcon, User2 } from '@tamagui/lucide-icons';
import { Statistics } from "../screens/tabs/Statistics";
import { Gamification } from "../screens/tabs/Gamification";
import { UserSettings } from "../screens/tabs/UserSettings";
import Home from "../screens/tabs/Home";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

const Tab = createBottomTabNavigator();

export default function TabsRoutes() {
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#2A4054',
                    borderWidth: 0
                }
            }}
        >
            <Tab.Screen name='Home'
                component={Home as React.FC}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: () => (
                        <MaterialIcons name="home-filled" size={24} color="#FFF" />
                    )
                }}
            />
            <Tab.Screen name='Statistics'
                component={Statistics}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                    },
                }}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: () => (
                        <BarChart3 size={20} disabled opacity={0.4} />
                    )
                }}
            />
            <Tab.Screen name='Gamification'
                component={Gamification}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                    },
                }}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: () => (
                        <Gamepad2 size={20} disabled opacity={0.4} />
                    )
                }}
            />
            <Tab.Screen name='UserSettings'
                component={UserSettings}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                    },
                }}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: () => (
                        <User2 size={20} disabled opacity={0.4} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}