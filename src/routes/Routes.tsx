import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SavingGoalsHome } from "../screens/SavingGoalsHome";
import TabsRoutes from "./TabsRoutes";
import { SavingGoalDetails } from "../screens/SavingGoalDetails";
import { SavingRulesHome } from "../screens/SavingRulesHome";
import { SavingRuleDetails } from "../screens/SavingRuleDetails";
import { Welcome } from "../screens/Welcome";
import { Login } from "../screens/Login";
import { Operations } from "../screens/Operations";
import { HeaderBarHome } from "../components/headers/HeaderBarHome";
import { Statement } from "../screens/Statement";
import { HeaderBar } from "../components/headers/HeaderBar";
import { Edit2 } from "@tamagui/lucide-icons";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome"
                screenOptions={{
                    contentStyle: {
                        backgroundColor: '#2A4054'
                    }
                }}>
                <Stack.Screen name='Welcome'
                    component={Welcome}
                    options={{
                        headerShown: false,
                        animation: 'none',
                    }}
                />
                <Stack.Screen name='Login'
                    component={Login as React.FC}
                    options={{
                        headerShown: false,
                        animation: 'none'
                    }}
                />
                <Stack.Screen name='TabsRoutes'
                    component={TabsRoutes as React.FC}
                    options={{
                        header: () => <HeaderBarHome/>,
                        animation: 'none',
                    }}
                />
                <Stack.Screen name='Operations'
                    component={Operations as React.FC}
                    options={{
                        headerShown: false,
                        animation: 'none'
                    }}
                />
                <Stack.Screen name='SavingGoalsHome'
                    component={SavingGoalsHome as React.FC}
                    options={{
                        headerShown: false,
                        animation: 'none'
                    }}
                />
                <Stack.Screen name='SavingGoalDetails'
                    component={SavingGoalDetails as React.FC}
                    options={{
                        header: () => <HeaderBar rigth={<Edit2 size={19} />} rigthDisabled={true}/>,
                        animation: 'none'
                    }}
                />
                <Stack.Screen name='SavingRulesHome'
                    component={SavingRulesHome as React.FC}
                    options={{
                        header: () => <HeaderBar centerText="Regras de Automatização" />,
                        animation: 'none'
                    }}
                />
                <Stack.Screen name='SavingRuleDetails'
                    component={SavingRuleDetails as React.FC}
                    options={{
                        headerShown: false,
                        animation: 'none'
                    }}
                />
                <Stack.Screen name='Statement'
                    component={Statement as React.FC}
                    options={{
                        header: () => <HeaderBar centerText="Extrato" />,
                        animation: 'none',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}