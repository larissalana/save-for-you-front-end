import { Anchor, Button, Card, CardProps, H2, Image, Paragraph, SizableText, XStack, YStack } from 'tamagui'
import { Ban, CalendarClock } from '@tamagui/lucide-icons'
import { Dimensions } from 'react-native'

export function SchedullingItem() {
  return (
    <XStack $sm={{ flexDirection: 'column' }} mt='$2' mr='$2'>
      <Card backgroundColor='transparent'>
        <Card.Header>
          <XStack jc="center" ai="center" space='$2'>

            <YStack jc="center" ai="center">
              <SizableText
                color='#9EAFBE'
                fontSize={12}>
                Seg
              </SizableText>

              <SizableText
                color='white'
                fontWeight='800'
                fontSize={24}>
                12
              </SizableText>
            </YStack>

            <XStack backgroundColor='#89D5FF'
              borderRadius="$9"
              h='$3.5'
              ml='$2'
              mt='$3'
              ai="center"
              width={Dimensions.get('window').width - 80}>
              <XStack ml='$3'>
                <CalendarClock size={20} color='#000' />
              </XStack>
              <XStack ml='$3'>
                <SizableText 
                  color='#000'
                  fontSize={13}>
                  Depósito Recorrente
                </SizableText>
              </XStack>
              <XStack ml='$4' mr='$2'>
                <SizableText
                  color='#000'
                  fontSize={14}
                  fontWeight='800'>
                  R$150,00
                </SizableText>
              </XStack>
            </XStack>

          </XStack>
        </Card.Header>
      </Card>
    </XStack>
  )
}

export function SchedullingItemNoData() {
  return (
    <XStack $sm={{ flexDirection: 'column' }} mt='$2' mr='$2' pb='$5'
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
                Este objetivo não possui agendamentos recentes
              </SizableText>
            </YStack>
          </XStack>
        </Card.Header>
      </Card>
    </XStack>
  )
}