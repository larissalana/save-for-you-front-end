import { Card, SizableText, XStack, YStack } from 'tamagui'
import { Ban, Box } from '@tamagui/lucide-icons'
import { Dimensions } from 'react-native'
import { SquareIcon } from '../base/SquareIcon'
import { MaterialIcons } from '@expo/vector-icons'

export function TransactionCard({ item }: any) {
  const amountColor = ["DEBIT_CHARGE", "CREDIT_CHARGE", "TRANSFER"].includes(item.type) ? '#FF8C9B' : '#A9FF22';
  const signal = ["DEBIT_CHARGE", "CREDIT_CHARGE", "TRANSFER"].includes(item.type) ? '-' : '+';
  return (
    <XStack $sm={{ flexDirection: 'column' }} mt='$2' mr='$2.5'>
      <Card backgroundColor='#334D64'
        borderRadius="$8" >
        <Card.Header padding='$3'>
          <XStack jc="center" ai="center" space='$2' ml='$2'>

            <SquareIcon width={42}
              height={42}
              backgroundColor={item.typeColor}
              icon={<MaterialIcons name={item.typeIcon} size={18} color='#000' />}
            />

            <YStack ml='$2'>
              <SizableText
                color='white'
                fontWeight='800'
                fontSize={13}
              >
                {item.typeDescription}
              </SizableText>

              <SizableText
                lineHeight={16}
                minWidth={140}
                maxWidth={140}
                color='#9EAFBE'
                fontSize={12}
              >
                {item.description}
              </SizableText>

              <SizableText
                lineHeight={16}
                color='#9EAFBE'
                fontWeight='800'
                fontSize={12}
              >
                {item.datePretty}
              </SizableText>

            </YStack>

            <XStack>
              <SizableText
                color={amountColor}
                fontSize={12}
                mr='$2'
              >
                {signal} {item.amountPretty}
              </SizableText>
            </XStack>

          </XStack>
        </Card.Header>
      </Card>
    </XStack>
  )
}

export function TransactionCardNoData() {
  return (
    <XStack $sm={{ flexDirection: 'column' }} mt='$2' mr='$2'
      width={Dimensions.get('window').width - 35}>
      <Card backgroundColor='#334D64'
        borderRadius="$8" >
        <Card.Header padded>
          <XStack ai="center" space='$2'>
            <Ban size={16} color='#617486' />

            <YStack>
              <SizableText padding='$1'
                lineHeight={16}
                color='#9EAFBE'
                fontSize={12}
              >
                Você não possui transações recentes
              </SizableText>
            </YStack>
          </XStack>
        </Card.Header>
      </Card>
    </XStack>
  )
}