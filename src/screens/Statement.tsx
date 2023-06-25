import { Input, ScrollView, XStack, YStack } from "tamagui";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Transaction } from "../interfaces/Transaction";
import { getClientTransactions } from "../services/BankAccountService";
import { TransactionItem, TransactionItemNoData } from "../components/listItems/TransactionItem";
import { Dimensions } from 'react-native';

export function Statement() {
    const [bankAccountTransactions, setBankAccountTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        async function bankAccountTransactions() {
            const clientId = await AsyncStorage.getItem('clientId')
            if (!clientId) return null;

            const response = await getClientTransactions(clientId, 10)
            if (response) {
                setBankAccountTransactions(response)
            }
        }
        bankAccountTransactions()
    }, [])

    function normalizeDate(datePretty: any) {
        return datePretty.charAt(0).toUpperCase() + datePretty.slice(1);
    }

    return (
        <ScrollView style={StyleSheet.absoluteFill} contentContainerStyle={{ flexGrow: 1 }}>

            <XStack $sm={{ flexDirection: 'column' }} jc="center" ai="center" padding='$4'>

                <XStack>
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

                <YStack alignSelf="flex-start" mt='$4' flex={1}>
                    {bankAccountTransactions.length == 0
                        ?
                        <TransactionItemNoData transparent={false}/>
                        : bankAccountTransactions.map((transaction: Transaction) => {
                            transaction.datePretty = normalizeDate(transaction.datePretty);
                            return <TransactionItem item={transaction} key={transaction.id}
                            />
                        })
                    }
                </YStack>

            </XStack>

        </ScrollView >
    );
}