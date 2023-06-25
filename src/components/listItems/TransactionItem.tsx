import { Card, CardFooter, Label, SizableText, XStack, YStack } from 'tamagui'
import { Ban } from '@tamagui/lucide-icons'
import { Dimensions } from 'react-native'
import { SquareIcon } from '../base/SquareIcon'
import { MaterialIcons } from '@expo/vector-icons'

export function TransactionItem({ item }: any) {
  const amountColor = ["DEBIT_CHARGE", "CREDIT_CHARGE", "TRANSFER"].includes(item.type) ? '#FF8C9B' : '#A9FF22';
  const signal = ["DEBIT_CHARGE", "CREDIT_CHARGE", "TRANSFER"].includes(item.type) ? '-' : '+';
  return (
    <YStack jc="center" ml='$1.5'>
      <XStack mb="$2">
        <SizableText
          fontSize={13}
          fontWeight='800'
          color='#C699FF'>
          {item.datePretty}
        </SizableText>
      </XStack>
      <XStack mb="$3" mt="$1.5">
        <Card backgroundColor='transparent'>
          <Card.Header >

            <XStack jc="space-between"
              width={Dimensions.get('window').width - 45}
              height={40}>
              <XStack boc='white' flex={1}>

                <SquareIcon width={42}
                  height={42}
                  backgroundColor={item.typeColor}
                  icon={<MaterialIcons name={item.typeIcon} size={18} color='#000' />} />

                <YStack ml='$3' flex={1}>
                  <SizableText
                    color='white'
                    fontWeight='800'
                    fontSize={13}
                  >
                    {item.typeDescription}
                  </SizableText>

                  <SizableText
                    lineHeight={18}
                    minWidth={190}
                    maxWidth={190}
                    color='#9EAFBE'
                    fontSize={12}
                  >
                    {item.typeDescription}
                  </SizableText>
                </YStack>
                <XStack height={65} ai='center' jc='center'>
                  <Label flex={1}
                    fontSize={12}
                    position="absolute"
                    right={2}
                    justifyContent="flex-end"
                  >
                    <SizableText
                      color={amountColor}
                      fontWeight='medium'
                      fontSize={13}>
                      {signal}{item.amountPretty}
                    </SizableText>
                  </Label>
                </XStack>
              </XStack>
            </XStack>
          </Card.Header>
          <CardFooter
            height={15} />
        </Card>
      </XStack>
    </YStack>
  )
}

export function TransactionItemNoData({ transparent }: any) {
  return (
    <XStack $sm={{ flexDirection: 'column' }} mr='$2' pb='$5'
      width={Dimensions.get('window').width - 35}>
      <Card backgroundColor={transparent ? 'transparent' : '#334D64'}
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