import { ScrollView, SizableText, XStack, YStack } from "tamagui";
import { FinancialTip } from "../../components/cards/FinancialTip";
import { StyleSheet } from "react-native";
import { TransactionsSection } from "../../components/sections/TransactionsSection";
import { SavingGoalsSection } from "../../components/sections/SavingGoalsSection";
import { useEffect, useState } from "react";
import { getBankAccountInfo, getClientTransactions } from "../../services/BankAccountService";
import { BankAccount } from "../../interfaces/BankAccount";
import { Transaction } from "../../interfaces/Transaction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SavingGoalsSummary } from "../../interfaces/SavingGoalsSummary";
import { getSavingGoals } from "../../services/SavingGoalsService";
import { NavigationProps } from './../../@types/navigation';
import { MenuHome } from "../../components/base/Menu";
import { useIsFocused } from "@react-navigation/native";

export default function Home({ navigation } : NavigationProps<'Home'>) {
    const [bankAccountInfo, setBankAccountInfo] = useState({} as BankAccount)
    const [bankAccountTransactions, setBankAccountTransactions] = useState<Transaction[]>([])
    const [savingGoalsSummary, setSavingGoalsSummary] = useState({} as SavingGoalsSummary)
    const isFocused = useIsFocused();

    useEffect(() => {
        async function bankAccountInfo() {
            const clientId = await AsyncStorage.getItem('clientId')
            if (!clientId) return null;

            const response = await getBankAccountInfo(clientId)
            if (response) {
                setBankAccountInfo(response)
                AsyncStorage.setItem('branch', response.branch);
                AsyncStorage.setItem('accountNumber', response.accountNumber);

                bankAccountTransactions()
            }
        }
        async function bankAccountTransactions() {
            const clientId = await AsyncStorage.getItem('clientId')
            if (!clientId) return null;

            const response = await getClientTransactions(clientId, 3)
            if (response) {
                setBankAccountTransactions(response)
            }
        }
        async function savingGoals() {
            const clientId = await AsyncStorage.getItem('clientId')
            if (!clientId) return null;

            const response = await getSavingGoals(clientId)
            if (response) {
                setSavingGoalsSummary(response)
            }
        }

        bankAccountInfo()
        savingGoals()
    }, [isFocused])

    return (
        <ScrollView style={StyleSheet.absoluteFill} contentContainerStyle={{ flexGrow: 1 }} backgroundColor='#2A4054'>

            <XStack $sm={{ flexDirection: 'column' }} jc="center" ai="center" pl='$4'>

                <YStack alignSelf="flex-start">
                    <SizableText
                        color='white'
                        height={50}
                        fontWeight='900'
                        fontSize={24}
                        lineHeight={32}
                    >
                        &#x1F44B; Olá, {bankAccountInfo.client?.firstname}
                    </SizableText>

                    <YStack>
                        <SizableText
                            color='white'
                            fontSize={13}>
                            Saldo em conta
                        </SizableText>
                        <SizableText
                            mt='$2'
                            color='white'
                            fontWeight='900'
                            fontSize={22}
                        >
                            {bankAccountInfo?.balancePretty}
                        </SizableText>
                    </YStack>
                </YStack>

                <MenuHome />

                <TransactionsSection data={bankAccountTransactions} />

                <SavingGoalsSection data={savingGoalsSummary.savingGoals} />

                <YStack alignSelf="flex-start" mt='$4'>
                    <FinancialTip />
                </YStack>

            </XStack>
        </ScrollView>
    );
}