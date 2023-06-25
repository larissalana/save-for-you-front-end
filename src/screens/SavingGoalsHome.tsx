import { Input, ListItem, ScrollView, Separator, SizableText, XStack, YGroup, YStack } from "tamagui";
import { HeaderBar } from '../components/headers/HeaderBar';
import { ChevronRight, Plus } from "@tamagui/lucide-icons";
import { Dimensions, StyleSheet } from "react-native";
import { Button } from "../components/base/Button";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SavingGoalsSummary } from "../interfaces/SavingGoalsSummary";
import { getSavingGoals } from "../services/SavingGoalsService";
import { SavingGoal } from "../interfaces/SavingGoal";
import { ProgressChartWithTextInside } from "../components/base/ProgressChart";
import { Pie } from "../components/base/Pie";

export function SavingGoalsHome({ navigation }: any) {
    const [savingGoalsSummary, setSavingGoalsSummary] = useState({} as SavingGoalsSummary)
    const [savingGoals, setSavingGoals] = useState<SavingGoal[]>([])

    useEffect(() => {
        async function savingGoals() {
            const clientId = await AsyncStorage.getItem('clientId')
            if (!clientId) return null;

            const response = await getSavingGoals(clientId)
            if (response) {
                setSavingGoalsSummary(response)
                setSavingGoals(response.savingGoals)
            }
        }
        savingGoals()
    }, [])


    return (
        <ScrollView style={StyleSheet.absoluteFill} contentContainerStyle={{ flexGrow: 1 }}>

            <HeaderBar centerText="Objetivos" rigth={<Plus size={19} />} rigthDisabled={true}/>

            <XStack $sm={{ flexDirection: 'column' }} jc="center" ai="center" padding='$4'>

                <YStack>
                    <SizableText
                        mt='$-4'
                        color='#9EAFBE'
                        textAlign="center"
                        fontSize={13}>
                        {savingGoalsSummary.summaryInformation?.timeLeftTotal}
                    </SizableText>
                </YStack>

                <ProgressChartWithTextInside {...savingGoalsSummary.summaryInformation} />

                <XStack alignSelf="flex-start" mt='$5' space='$1.5'>
                    <Button bg='#C699FF' boc='#617486' bw={1} br={30} fontSize={11} flex={1} h='$2.5'>Todos</Button>
                    <Button disabled opacity={0.4} bg='transparent' boc='#617486' bw={1} br={30} fontSize={11} flex={1} h='$2.5'>Em Progresso</Button>
                    <Button disabled opacity={0.4} bg='transparent' boc='#617486' bw={1} br={30} fontSize={11} flex={1} h='$2.5'>Alcançados</Button>
                </XStack>

                <XStack mt='$3'>
                    <Input flex={1}
                        h='$3.5'
                        boc='#617486'
                        bg='transparent'
                        placeholder="Buscar"
                        placeholderTextColor='#617486'
                        borderRadius={100}
                        focusStyle={{
                            bw: 1,
                            boc: '#C699FF'
                        }}
                    />
                </XStack>

                <YGroup jc="center" ai="center" mt='$3'
                    width={Dimensions.get('window').width}
                    separator={<Separator />}
                    backgroundColor='transparent'>

                    {savingGoals.map((savingGoal) => {
                        return < YGroup.Item key={savingGoal.id}>
                            <ListItem
                                backgroundColor='transparent'
                                width={Dimensions.get('window').width - 10}
                                iconAfter={ChevronRight}
                                onPress={() => navigation.navigate('SavingGoalDetails', { savingGoal: savingGoal})}
                                hoverTheme
                                pressTheme>

                                <XStack ai="center" space='$2'>
                                    <Pie item={savingGoal}/>

                                    <YStack ml='$2'>
                                        <SizableText
                                            color='white'
                                            fontWeight='800'
                                            fontSize={13}>
                                            {savingGoal.name}
                                        </SizableText>

                                        <SizableText
                                            color='#9EAFBE'
                                            fontSize={12}>
                                            {savingGoal.currentAmountPretty} de {savingGoal.targetAmountPretty}
                                        </SizableText>
                                    </YStack>
                                </XStack>

                            </ListItem>
                        </YGroup.Item>
                    })}

                </YGroup>

            </XStack>

        </ScrollView >
    );
}