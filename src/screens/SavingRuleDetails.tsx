import { Input, ScrollView, SizableText, XStack, YStack } from "tamagui";
import { Coins, Settings, TimerReset } from "@tamagui/lucide-icons";
import { CircleIcon } from "../components/base/CircleIcon";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getSavingRuleAutomationConfigurations, getSavingRuleTransactions } from "../services/SavingRulesService";
import { SavingRuleAutomationTransaction } from "../interfaces/SavingRuleAutomationTransaction";
import { SavingRuleAutomationSummary } from "../interfaces/SavingRuleAutomationSummary";
import { TransactionItem, TransactionItemNoData } from "../components/listItems/TransactionItem";
import { SalaryDepositGradientCard } from "../components/gradientcard/SalaryDepositGradientCard";
import { SavingRuleAutomation } from "../interfaces/SavingRuleAutomation";
import { RoundingDepositGradientCard } from "../components/gradientcard/RoundingDepositGradientCard";
import { HeaderBar } from "../components/headers/HeaderBar";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export function SavingRuleDetails() {
    const route = useRoute() as any;
    const savingGoalId = route.params.savingGoalId;
    const savingRuleId = route.params.savingRuleId;
    const savingRuleName = route.params.savingRuleName;
    const savingRuleAutomationId = route.params.savingRuleAutomationId;
    const [savingRuteConfigurations, setSavingRuleConfigurations] = useState({} as SavingRuleAutomation)
    const [savingRuleTransactions, setSavingRuleTransactions] = useState<SavingRuleAutomationTransaction[]>([])
    const [savingRuleSummary, setSavingRuleSummary] = useState({} as SavingRuleAutomationSummary)

    useEffect(() => {
        savingRuleAutomationConfigurations()
        savingRuleAutomationTransactions();
    }, [])

    async function savingRuleAutomationConfigurations() {
        if (!savingRuleAutomationId) return null;

        const response = await getSavingRuleAutomationConfigurations(savingRuleAutomationId)
        setSavingRuleConfigurations(response.configurations)

    }

    async function savingRuleAutomationTransactions() {
        if (!savingGoalId || !savingRuleId) return null;

        const response = await getSavingRuleTransactions(savingGoalId, savingRuleId)
        if (response) {
            setSavingRuleTransactions(response.transactions)
            setSavingRuleSummary(response.summaryInformation)
        }
    }

    function normalizeDate(datePretty: any) {
        return datePretty.charAt(0).toUpperCase() + datePretty.slice(1);
    }

    return (
        <ScrollView style={StyleSheet.absoluteFill} contentContainerStyle={{ flexGrow: 1 }}>

            <HeaderBar centerText={savingRuleName} rigth={<Settings size={19} />} rigthDisabled={true} />

            <XStack $sm={{ flexDirection: 'column' }} jc="center" ai="center" padding='$4'>

                <YStack jc="center" ai="center" mt='$3'
                    borderRadius='$10'
                    bc='#FFF'>

                    <YStack jc="center" ai="center">
                        {savingRuleName == 'Depósito de Salário'
                            ? <SalaryDepositGradientCard item={savingRuteConfigurations} />
                            : <RoundingDepositGradientCard item={savingRuteConfigurations} />
                        }
                    </YStack>

                    <XStack mt='$1'>
                        <YStack padding='$2'>
                            <CircleIcon width={35}
                                height={35}
                                backgroundColor={"#A9FF22"}
                                icon={<Coins size={20} color='#000' />} />

                            <SizableText
                                mt='$2'
                                lineHeight={18}
                                color='#000'
                                fontWeight='800'
                                fontSize={16}
                            >
                                +{savingRuleSummary.savingAmountTotalPretty}
                            </SizableText>

                            <SizableText
                                mt='$1'
                                mb='$2'
                                lineHeight={18}
                                color='#000'
                                fontSize={11}>
                                guardados no total
                            </SizableText>
                        </YStack>
                        <YStack padding='$2' ml='$3'
                            borderLeftWidth={1}
                            borderLeftColor={"#1F2E3D"}>


                            <YStack ml='$5'>
                                <CircleIcon width={35}
                                    height={35}
                                    backgroundColor={"#A9FF22"}
                                    icon={<TimerReset size={19} color='#000' />} />

                                <SizableText
                                    mt='$2'
                                    ml='$1'
                                    lineHeight={18}
                                    color='#000'
                                    fontWeight='800'
                                    fontSize={16}
                                >
                                    {savingRuleSummary.savingCountTotal}
                                </SizableText>

                                <SizableText
                                    mt='$1'
                                    mb='$2'
                                    lineHeight={18}
                                    color='#000'
                                    fontSize={11}>
                                    depósitos realizados
                                </SizableText>
                            </YStack>
                        </YStack>
                    </XStack>
                </YStack>

                <YStack ai="center" mt='$7' flex={1} width={Dimensions.get('window').width}
                    borderRadius='$10'
                    bc='#1F2D3A'>

                    <XStack mt='$4'>
                        <YStack padding='$2'>
                            <Input
                                minWidth={160}
                                h='$3.5'
                                boc='#617486'
                                bg='transparent'
                                br='$5'
                                placeholder="Exibir"
                                placeholderTextColor='#617486'
                                focusStyle={{
                                    bw: 1,
                                    boc: '#C699FF'
                                }}
                            />
                        </YStack>
                        <YStack padding='$2'>
                            <Input
                                minWidth={170}
                                h='$3.5'
                                boc='#617486'
                                bg='transparent'
                                br='$5'
                                placeholder="Período"
                                placeholderTextColor='#617486'
                                focusStyle={{
                                    bw: 1,
                                    boc: '#C699FF'
                                }}
                            />
                        </YStack>
                    </XStack>

                    <YStack alignSelf="flex-start" mt='$3' ml='$4' mb='$5'>
                        {savingRuleTransactions.length == 0
                            ?
                            <TransactionItemNoData transparent={true}/>
                            : savingRuleTransactions.map(transaction => {
                                transaction.datePretty = normalizeDate(transaction.datePretty);
                                return <TransactionItem item={transaction} key={transaction.id}
                                />
                            })
                        }
                    </YStack>


                </YStack>
            </XStack>
        </ScrollView >
    );
}
