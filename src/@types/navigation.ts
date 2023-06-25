import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ScreensList = {
    Home: undefined;
    Operations: undefined;
    SavingGoalsHome: undefined;
    SavingGoalDetails: undefined;
    SavingRulesHome: undefined;
    RoudingDeposit: undefined;
    SalaryDeposit: undefined;
    
}

export type NavigationProps<T extends keyof ScreensList> = {
    navigation: NativeStackNavigationProp<ScreensList, T>;
    route: RouteProp<ScreensList, T>
}