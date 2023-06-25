import React, { useState } from 'react';
import { Sheet, SizableText, XGroup, XStack, YGroup, YStack } from 'tamagui';
import { ChevronDown, FileBarChart2, Landmark, PiggyBank, Receipt, Repeat1, TrendingUp } from '@tamagui/lucide-icons';
import { Dimensions } from 'react-native';
import { Button } from './Button';
import { SquareIcon } from './SquareIcon'
import { useNavigation } from '@react-navigation/native';

export function MenuHome() {
    const navigator = useNavigation() as any;
    return (
        <XStack width={Dimensions.get('window').width - 35}
            height={80}
            mt='$4'
            mr='$3'
            alignSelf="center"
            borderColor='transparent'
            backgroundColor='#C699FF'
            borderRadius="$8">

            <XGroup borderRadius="$8"
                backgroundColor='transparent' padded ai='center'
                jc='center'>
                <XGroup.Item>
                    <Button
                        width={90}
                        height={80}
                        bg='transparent'
                        secondary
                        onPress={() => navigator.navigate('Operations')}
                    >
                        <YStack
                            jc='center'
                        >
                            <YStack ai='center'
                                jc='center'>
                                <Receipt size={24} color='#000' />
                            </YStack>
                            <YStack ai='center'
                                jc='center'>
                                <SizableText
                                    fontWeight='bold'
                                    fontSize={11}
                                    color='#000'>
                                    Depositar
                                </SizableText>
                            </YStack>
                        </YStack>
                    </Button>
                </XGroup.Item>

                <YGroup.Item>
                    <Button
                        width={90}
                        height={80}
                        bg='transparent'
                        secondary
                        disabled
                        opacity={0.4}
                    >
                        <YStack
                            jc='center'
                        >
                            <YStack ai='center'
                                jc='center'>
                                <Repeat1 size={24} color='#000' />
                            </YStack>
                            <YStack ai='center'
                                jc='center'>
                                <SizableText
                                    fontWeight='bold'
                                    fontSize={11}
                                    color='#000'>
                                    Transferir
                                </SizableText>
                            </YStack>
                        </YStack>
                    </Button>
                </YGroup.Item>

                <XGroup.Item>
                    <Button
                        width={80}
                        height={80}
                        bg='transparent'
                        secondary
                        onPress={() => navigator.navigate('Statement')}
                    >
                        <YStack
                            jc='center'
                        >
                            <YStack ai='center'
                                jc='center'>
                                <FileBarChart2 size={24} color='#000' />
                            </YStack>
                            <YStack ai='center'
                                jc='center'>
                                <SizableText
                                    fontWeight='bold'
                                    fontSize={11}
                                    color='#000'>
                                    Extrato
                                </SizableText>
                            </YStack>
                        </YStack>
                    </Button>
                </XGroup.Item>

                <XGroup.Item>
                    <Button
                        width={80}
                        height={80}
                        bg='transparent'
                        secondary
                        disabled
                        opacity={0.4}
                    >
                        <YStack
                            jc='center'
                        >
                            <YStack ai='center'
                                jc='center'>
                                <Landmark size={24} color='#000' />
                            </YStack>
                            <YStack ai='center'
                                jc='center'>
                                <SizableText
                                    fontWeight='bold'
                                    fontSize={11}
                                    color='#000'>
                                    Conta
                                </SizableText>
                            </YStack>
                        </YStack>
                    </Button>
                </XGroup.Item>
            </XGroup>
        </XStack>
    )
};

export function MenuSavingGoalDetails({ item }: any) {
    const navigator = useNavigation() as any;
    const [position, setPosition] = useState(1)
    const [open, setOpen] = useState(false)

    return (
        <XStack width={Dimensions.get('window').width - 35}
            height={80}
            mt='$4'
            mr='$3'
            alignSelf="center"
            borderColor='transparent'
            backgroundColor='#C699FF'
            borderRadius="$8"
            space='$2'>

            <XGroup borderRadius="$8" padded ai='center'
                backgroundColor='transparent'>
                <XGroup.Item>
                    <Button width={90}
                        height={80}
                        bg='transparent'
                        secondary
                        disabled
                        opacity={0.4}
                    >
                        <YStack
                            jc='center'
                        >
                            <YStack ai='center'
                                jc='center'>
                                <Receipt size={24} color='#000' />
                            </YStack>
                            <YStack ai='center'
                                jc='center'>
                                <SizableText
                                    fontWeight='bold'
                                    fontSize={11}
                                    color='#000'>
                                    Depositar
                                </SizableText>
                            </YStack>
                        </YStack>
                    </Button>
                </XGroup.Item>

                <YGroup.Item>
                    <Button width={90}
                        height={80}
                        bg='transparent'
                        secondary
                        disabled
                        opacity={0.4}
                    >
                        <YStack
                            jc='center'
                        >
                            <YStack ai='center'
                                jc='center'>
                                <Repeat1 size={24} color='#000' />
                            </YStack>
                            <YStack ai='center'
                                jc='center'>
                                <SizableText
                                    fontWeight='bold'
                                    fontSize={11}
                                    color='#000'>
                                    Transferir
                                </SizableText>
                            </YStack>
                        </YStack>
                    </Button>
                </YGroup.Item>

                <XGroup.Item>
                    <Button width={80}
                        height={80}
                        bg='transparent'
                        secondary
                        disabled
                        opacity={0.4}
                        onPress={() => setOpen(true)}
                    >
                        <YStack
                            jc='center'
                        >
                            <YStack ai='center'
                                jc='center'>
                                <PiggyBank size={24} color='#000' />
                            </YStack>
                            <YStack ai='center'
                                jc='center'>
                                <SizableText
                                    minWidth={65}
                                    fontWeight='bold'
                                    fontSize={11}
                                    color='#000'>
                                    Automatizar
                                </SizableText>
                            </YStack>
                        </YStack>
                    </Button>
                </XGroup.Item>

                <XGroup.Item>
                    <Button width={80}
                        height={80}
                        bg='transparent'
                        secondary
                        disabled
                        opacity={0.4}
                    >
                        <YStack
                            jc='center'
                        >
                            <YStack ai='center'
                                jc='center'>
                                <TrendingUp size={24} color='#000' />
                            </YStack>
                            <YStack ai='center'
                                jc='center'>
                                <SizableText
                                    fontWeight='bold'
                                    fontSize={11}
                                    color='#000'>
                                    Investir
                                </SizableText>
                            </YStack>
                        </YStack>
                    </Button>
                </XGroup.Item>
            </XGroup>


            <Sheet
                forceRemoveScrollEnabled={open}
                modal={true}
                open={open}
                onOpenChange={setOpen}
                snapPoints={[80, 45, 20]}
                dismissOnSnapToBottom
                position={position}
                onPositionChange={setPosition}
                zIndex={100_000}
                animation="bouncy"
            >
                <Sheet.Overlay />
                <Sheet.Handle />
                <Sheet.Frame
                    flex={1}
                    space="$5"
                    backgroundColor='#2A4054'
                    borderRadius="$10"
                    ai='center'
                    jc='center'
                >
                    <YStack ai='center' jc='center'>
                        <Button bc='transparent' size="$5" icon={ChevronDown} onPress={() => setOpen(false)} />
                    </YStack>

                    <YStack ai='center' jc='center' mt='$-1'>
                        <SizableText
                            textAlign='center'
                            fontWeight='bold'
                            fontSize={18}>
                            O que você gostaria de automatizar?
                        </SizableText>
                    </YStack>

                    <XStack mt='$3' flex={1} space width={Dimensions.get('window').width - 40}
                        jc='center'>
                        <XStack jc='center'>
                            <Button
                                width={150}
                                height={140}
                                borderRadius="$8"
                                bg='#334D64'
                                onPress={() => { setOpen(false); navigator.navigate('SavingRulesHome', { savingGoal: item }) }}
                            >
                                <YStack ai='center'
                                    jc='center'>
                                    <SquareIcon
                                        width={50}
                                        height={50}
                                        backgroundColor='#A9FF22'
                                        icon={<Receipt size={24} color='#000' />}
                                    />

                                    <YStack mt='$2'>
                                        <SizableText
                                            fontSize={12}>
                                            Depósitos
                                        </SizableText>
                                    </YStack>
                                </YStack>
                            </Button>
                        </XStack>

                        <XStack>
                            <Button
                                width={150}
                                height={140}
                                borderRadius="$8"
                                bg='#334D64'
                                disabled
                                opacity={0.6}
                            >
                                <YStack ai='center'
                                    jc='center'>
                                    <SquareIcon
                                        width={50}
                                        height={50}
                                        backgroundColor='#F6D83E'
                                        icon={<TrendingUp size={24} color='#000' />}
                                    />

                                    <YStack mt='$2'>
                                        <SizableText
                                            fontSize={12}>
                                            Investimentos
                                        </SizableText>
                                    </YStack>
                                </YStack>
                            </Button>
                        </XStack>

                    </XStack>

                </Sheet.Frame>
            </Sheet>

        </XStack >
    )
};
