import { Form, Spinner, XStack } from "tamagui";
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View } from "react-native";
import { Button } from "../components/base/Button";
import { NavigationProps } from "../@types/navigation";
import { HeaderBar } from "../components/headers/HeaderBar";
import { OperationsSelect } from "../components/selects/OperationsSelect";
import { chargeValue, depositValue } from "../services/BankAccountService";
import { BankAccountApiModel } from "../interfaces/apimodel/BankAccountApiModel";
import { Box } from "@tamagui/lucide-icons";
import { CircleIcon } from "../components/base/CircleIcon";
import { CardChargeApiModel } from "../interfaces/apimodel/CardChargeApiModel";
import { MaskedTextInput } from 'react-native-mask-text';
import { Dimensions } from "react-native";

export function Operations({ navigation }: NavigationProps<'Operations'>) {
    const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')
    const [data, setData] = useState({} as any);

    function updateData(id: string, value: string) {
        setData({ ...data, [id]: value })
    }

    function normalizeAmount(amount: any) {
        return amount.replace("R$", "")
            .replace(".", "")
            .replace(",", ".")
            .trim();
    }

    async function processOperation() {
        if (data['type'] === undefined) {
            setStatus('off')
            return false;
        }

        if (data['type'] == 'DEPOSIT' || data['type'] == 'SALARY_DEPOSIT') {
            console.log('processDeposit')
            processDeposit();
        }
        else if (data['type'] == 'DEBIT' || data['type'] == 'CREDIT') {
            console.log('processCharge')
            processCharge();
        }
    }

    async function processDeposit() {
        const branch = await AsyncStorage.getItem('branch')
        const accountNumber = await AsyncStorage.getItem('accountNumber')

        setStatus('submitting')

        if (!branch || !accountNumber) {
            setStatus('off')
            return null;
        }
        const response = await depositValue(
            branch,
            accountNumber,
            {
                type: data.type,
                amount: normalizeAmount(data.amount)
            } as BankAccountApiModel);

        if (response) {
            setStatus('off')
            navigation.navigate('Home')
        }

        else {
            setStatus('off')
        }
    }

    async function processCharge() {
        const clientId = await AsyncStorage.getItem('clientId')

        setStatus('submitting')

        if (!clientId) {
            setStatus('off')
            return null;
        }

        const response = await chargeValue(
            clientId,
            {
                type: data.type,
                amount: normalizeAmount(data.amount)
            } as CardChargeApiModel);

        if (response) {
            setStatus('off')
            navigation.navigate('Home')
        }

        else {
            setStatus('off')
        }
    }

    return (
        <View>
            <HeaderBar centerText="Simulador de operações" />

            <XStack mt='$4' 
                $sm={{ flexDirection: 'column' }} ai="center"
                height={Dimensions.get('window').height}>

                <CircleIcon width={60}
                    height={60}
                    backgroundColor={"#F6D83E"}
                    icon={<Box size={30} color='#000' />} />

                <Form alignItems="center" height={'80%'}
                    space
                    onSubmit={() => setStatus('submitting')}
                    padding="$6"
                    mt='$2' >

                    <OperationsSelect
                        id='type'
                        value={data['type']}
                        onValueChange={(value) => updateData('type', value)}
                    />

                    <XStack alignItems="center">
                        <MaskedTextInput
                            type="currency"
                            options={{
                                prefix: 'R$ ',
                                decimalSeparator: ',',
                                groupSeparator: '.',
                                precision: 2,
                            }}
                            onChangeText={(value) => updateData('amount', value)}
                            keyboardType="numeric"
                            style={styles.input}
                        />
                    </XStack>

                    <Form.Trigger asChild disabled={data['type'] === undefined || data['amount'] === 'R$ 0,00'}>
                        <Button primary
                            bottom={60}
                            position="absolute"
                            icon={status === 'submitting' ? () => <Spinner color={'#A9FF22'} /> : undefined}
                            onPress={processOperation}
                            opacity={data['type'] === undefined || data['amount'] === 'R$ 0,00' ? 0.5 : 1}
                        >
                            Executar
                        </Button>
                    </Form.Trigger>
                </Form>
            </XStack>

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 52,
        marginHorizontal: 0,
        marginVertical: 5,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#617486',
        backgroundColor: 'transparent',
        color: 'white',
        paddingLeft: 20,
        fontSize: 14
    }
});
