import { ScrollView, SizableText, XStack, YStack } from "tamagui";
import { StyleSheet } from "react-native";
import { TargetCard } from "../components/cards/TargetCard";
import { SchedullingItemNoData } from "../components/listItems/SchedullingItem";
import { SavingRulesSection } from "../components/sections/SavingRulesSection";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { getSavingGoalDetails } from "../services/SavingGoalsService";
import { SavingGoalsDetails } from "../interfaces/SavingGoalsDetails";
import { MenuSavingGoalDetails } from "../components/base/Menu";

export function SavingGoalDetails() {
    const route = useRoute() as any;
    const savingGoal = route.params.savingGoal;
    const [savingGoalDetails, setSavingGoalDetails] = useState({} as SavingGoalsDetails)

    useEffect(() => {
        async function savingGoalDetails() {
            if (!savingGoal.id) return null;

            const response = await getSavingGoalDetails(savingGoal.id)
            if (response) {
                setSavingGoalDetails(response)
            }
        }
        savingGoalDetails()
    }, [])

    return (
        <ScrollView style={StyleSheet.absoluteFill} contentContainerStyle={{ flexGrow: 1 }} >

            <XStack $sm={{ flexDirection: 'column' }} jc="center" ai="center" pl='$4'>

                <YStack alignSelf="flex-start">
                    <SizableText
                        color='white'
                        height={50}
                        fontWeight='900'
                        fontSize={24}
                        lineHeight={32}
                    >
                        {savingGoal.name}
                    </SizableText>

                    <YStack>
                        <SizableText
                            color='white'
                            fontSize={13}>
                            Total Guardado
                        </SizableText>
                        <SizableText
                            mt='$2'
                            color='white'
                            fontWeight='900'
                            fontSize={22}
                        >
                            {savingGoal.currentAmountPretty}
                        </SizableText>
                    </YStack>
                </YStack>

                <MenuSavingGoalDetails item={savingGoal}/>

                <TargetCard item={savingGoal}/>

                <SavingRulesSection data={savingGoalDetails.savingRulesActives} id={savingGoal.id}/>

                <YStack alignSelf="flex-start" mt='$5'>
                    <SizableText
                        fontSize={14}
                        fontWeight='800'>
                        Próximos agendamentos
                    </SizableText>
                    <SchedullingItemNoData />
                </YStack>

            </XStack>
        </ScrollView>
    );
}
