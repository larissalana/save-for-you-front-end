import { Card, SizableText, XStack, YStack } from 'tamagui'
import { Dimensions } from 'react-native'
import { Ban } from '@tamagui/lucide-icons'
import { useNavigation } from '@react-navigation/native';
import { Pie } from '../base/Pie';

export function SavingGoalCard({ item }: any) {
  const navigator = useNavigation() as any;
  
  return (
    <XStack $sm={{ flexDirection: 'row' }} mr='$2.5'>
      <Card backgroundColor='#334D64'
        borderRadius="$8"
        onPress={() => { navigator.navigate('SavingGoalDetails', { savingGoal : item}) } }
      >
        <Card.Header padded>
          <YStack >
            <Pie item={item} />

            <XStack mt='$3'>
              <SizableText
                width={90}
                height={40}
                fontSize={12}
                lineHeight={18}
              >
                {item.name}
              </SizableText>
            </XStack>
            <XStack>
              <SizableText
                fontSize={14}
                fontWeight='bold'
              >
                {item.currentAmountPretty}
              </SizableText>
            </XStack>

          </YStack>
        </Card.Header>
      </Card>
    </XStack>
  )
}

export function SavingGoalCardNoData() {
  return (
    <XStack $sm={{ flexDirection: 'column' }} mr='$3' ml='$-1'
      width={Dimensions.get('window').width - 40}>
      <Card backgroundColor='#334D64'
        borderRadius="$8" >
        <Card.Header padded>
          <XStack ai="center" space='$2'>
            <Ban size={16} color='#617486' />

            <YStack ml='$1'>
              <SizableText padding='$1'
                lineHeight={16}
                color='#9EAFBE'
                fontSize={12}
              >
                Você não possui objetivos financeiros cadastrados
              </SizableText>
            </YStack>
          </XStack>
        </Card.Header>
      </Card>
    </XStack>
  )
}