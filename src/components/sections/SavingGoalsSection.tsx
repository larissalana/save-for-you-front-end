import { Dimensions, FlatList } from 'react-native';
import { SizableText, XStack, YStack } from 'tamagui';
import { SavingGoalCard, SavingGoalCardNoData } from '../cards/SavingGoalCard';
import { Button } from '../base/Button';
import { useNavigation } from '@react-navigation/native';

export function SavingGoalsSection({ data }: any) {
    const navigator = useNavigation() as any;
    return (
        <XStack $sm={{ flexDirection: 'column' }} mt='$2' ml='$1'>

            <YStack mt='$4'>
                <XStack alignSelf='flex-start'>
                    <SizableText
                        fontSize={14}
                        fontWeight='900'
                        width={Dimensions.get('window').width - 130}
                    >
                        Objetivos
                    </SizableText>

                    {data?.length > 0 ?
                        <Button 
                            fontSize={13}
                            fontWeight='900'
                            color='#C699FF'
                            bg='transparent'
                            height={20}
                            width={100}
                            onPress={() => navigator.navigate('SavingGoalsHome')}
                        >
                            Ver todos
                        </Button>
                        : <></>
                    }
                </XStack>

            </YStack>

            <XStack alignSelf='flex-start' mt='$2'>
                {data?.length > 0 ?
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        renderItem={({ item }) =>
                            <SavingGoalCard item={item} />
                        }
                    />
                    : <SavingGoalCardNoData />
                }
            </XStack>

        </XStack>
    )
}