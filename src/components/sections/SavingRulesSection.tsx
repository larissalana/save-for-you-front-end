import { Dimensions, FlatList } from 'react-native';
import { Card, SizableText, XStack, YStack } from 'tamagui';
import { SavingRuleCard } from '../cards/SavingRuleCard';
import { Ban } from '@tamagui/lucide-icons';
import { Button } from '../base/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

export function SavingRulesSection({ data , id}: any) {
    const navigator = useNavigation() as any;
    const route = useRoute() as any;
    const savingGoalId = route.params.savingGoal ? route.params.savingGoal.id : id;
    
    return (
        <XStack $sm={{ flexDirection: 'column' }} mt='$2' ml='$1'>

            <YStack mt='$4'>
                <XStack alignSelf='flex-start'>
                    <SizableText
                        fontSize={14}
                        fontWeight='900'
                        width={Dimensions.get('window').width - 140}
                    >
                        Regras Ativas
                    </SizableText>

                    {data?.length > 0 ?
                        <Button
                            fontSize={13}
                            fontWeight='900'
                            color='#C699FF'
                            bg='transparent'
                            height={20}
                            width={100}
                            onPress={() => navigator.navigate('SavingRulesHome', { savingGoalId: savingGoalId})}
                        >
                            Ver todas
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
                            <SavingRuleCard item={item} savingGoalId={savingGoalId}/>
                        }
                    />
                    : <SavingRuleCardNoData />
                }
            </XStack>

        </XStack>
    )
}

export function SavingRuleCardNoData() {
    return (
        <XStack $sm={{ flexDirection: 'column' }} mt='$2' mr='$2' ml='$-2'
            width={Dimensions.get('window').width - 35}>
            <Card backgroundColor='#334D64'
                borderRadius="$6" >
                <Card.Header padded>
                    <XStack ai="center" space='$2'>
                        <Ban size={16} color='#617486' />

                        <YStack>
                            <SizableText padding='$1'
                                lineHeight={16}
                                color='#9EAFBE'
                                fontSize={12}
                            >
                                Este objetivo não possui nenhuma regra ativa
                            </SizableText>
                        </YStack>
                    </XStack>
                </Card.Header>
            </Card>
        </XStack>
    )
}