import { Button, Input, ScrollView, SizableText, XStack, YStack } from "tamagui";
import { StyleSheet } from "react-native";
import { SavingRuleItem } from "../components/listItems/SavingRuleItem";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SavingRules } from "../interfaces/SavingRules";
import { getSavingRules } from "../services/SavingRulesService";
import { Dimensions } from 'react-native'

export function SavingRulesHome() {
    const route = useRoute() as any;
    const savingGoalId = route.params.savingGoalId;
    const [savingRules, setSavingRules] = useState<SavingRules[]>([])

    useEffect(() => {
        async function savingRules() {
            if (!savingGoalId) return null;

            const response = await getSavingRules(savingGoalId)
            if (response) {
                setSavingRules(response)
            }
        }
        savingRules()
    }, [])

    return (
        <ScrollView style={StyleSheet.absoluteFill} contentContainerStyle={{ flexGrow: 1 }}>

            <XStack $sm={{ flexDirection: 'column' }} jc="center" ai="center" width={Dimensions.get('window').width}>

                <YStack alignSelf="center">
                    <SizableText
                        color='#C699FF'
                        textAlign="center"
                        fontSize={11}
                        fontWeight='800'
                        letterSpacing={4}
                        height={40}>
                        DEPÓSITO
                    </SizableText>
                </YStack>

                <XStack jc="center" ai="center" width={Dimensions.get('window').width - 50}>
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

                <XStack mt={'$1'} padding="$2" alignItems="center" space='$1' width={Dimensions.get('window').width - 40}>
                    <Button disabled opacity={0.6} bg='transparent' boc='#617486' bw={1} br={30} fontSize={11} h='$2' flex={1}>Todas</Button>
                    <Button bg='#C699FF' boc='#617486' bw={1} br={30} fontSize={11} h='$2' flex={1}>Ativas</Button>
                    <Button disabled opacity={0.6} bg='transparent' boc='#617486' bw={1} br={30} fontSize={11} h='$2' flex={1}>Recomendadas</Button>
                </XStack>

                <YStack alignSelf="flex-start" ml='$5' mt='$4'>
                    <SizableText
                        fontSize={14}
                        fontWeight='800'>
                        Ativas
                    </SizableText>
                </YStack>

                <YStack alignSelf="flex-start" ml='$5' mt='$3'>

                    {savingRules.map(savingRule => {
                        return <SavingRuleItem item={savingRule} key={savingRule.id}
                        />
                    })}
                </YStack>
            </XStack>
        </ScrollView >
    );
}