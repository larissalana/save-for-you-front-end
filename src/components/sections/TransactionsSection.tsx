import { Dimensions, FlatList } from 'react-native';
import { SizableText, XStack, YStack } from 'tamagui';
import { TransactionCard, TransactionCardNoData } from '../cards/TransactionCard';
import { Button } from '../base/Button';
import { useNavigation } from '@react-navigation/native';

export function TransactionsSection({ data }: any) {
    const navigator = useNavigation() as any;
    return (
        <XStack $sm={{ flexDirection: 'column' }} mt='$4'>

            <YStack>
                <XStack alignSelf='flex-start'>
                    <SizableText
                        fontSize={14}
                        fontWeight='900'
                        width={Dimensions.get('window').width - 130}
                    >
                        Últimas transações
                    </SizableText>

                    {data?.length > 0 ?
                        <Button
                            fontSize={13}
                            fontWeight='900'
                            color='#C699FF'
                            bg='transparent'
                            height={20}
                            width={100}
                            onPress={() => navigator.navigate('Statement')}
                        >
                            Ver todas
                        </Button>
                        : <></>
                    }
                </XStack>

            </YStack>

            <XStack alignSelf='flex-start'>
                {data.length > 0 ?
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        renderItem={({ item }) =>
                            <TransactionCard item={item} />
                        }
                    />
                    : <TransactionCardNoData />
                }
            </XStack>
        </XStack>
    )
}