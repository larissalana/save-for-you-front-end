import { Card, Image, Label, Progress, SizableText, XStack, YStack } from 'tamagui'
import { CalendarDays } from '@tamagui/lucide-icons'
import { Dimensions } from 'react-native'

export function TargetCard({ item }: any) {
  var progressColor = item.percentageAlreadySaved > 50 ? "#ABFA2F" : "#89D5FF";
  return (
    <XStack width={Dimensions.get('window').width - 40}
            height={175}
            mt='$4'
            mr='$4'
            alignSelf="center"
            borderColor='transparent'
            borderRadius="$8"
            space='$2'>
      <Card backgroundColor='#334D64'
        borderRadius="$6" >
        <Card.Header padded>
          <XStack >

            {
              item?.percentageAlreadySaved > 50 
              ? <Image source={require("../../../assets/img/rock.png")} width={60} height={60} />
              : <Image source={require("../../../assets/img/comet.png")} width={60} height={60} />
            }

            <YStack ml='$3'>
              <SizableText
                color='white'
                fontWeight='900'
                fontSize={20}>
                {item.percentageAlreadySaved}%
              </SizableText>

              <SizableText
                lineHeight={18}
                minWidth={200}
                maxWidth={200}
                color='#9EAFBE'
                fontSize={13}>
                Vocé já guardou {item.percentageAlreadySaved}% do total de {item.targetAmountPretty} desejado.
              </SizableText>
            </YStack>
          </XStack>

          <XStack jc="center" ai="center" space='$2' mt='$3'>
            <Progress size='$2' value={item.percentageAlreadySaved}
              bc='transparent'
              boc={progressColor}
              bw={1}
            >
              <Progress.Indicator animation="bouncy" bc={progressColor} />
            </Progress>
          </XStack>

        </Card.Header>

        <Card.Footer borderTopWidth={1} borderTopColor={"#2A4054"}
           mt="$1"
           ml='$4'
           mr='$4'>
          <XStack jc="space-between" mt="$3">
            <CalendarDays size={18} />
            <Label mt="$-1"
              marginLeft="$2.5"
              minWidth={100}
              fontSize={13}
            >
              Data alvo
            </Label>

            <Label mt="$-1"
              marginLeft="$12"
              fontSize={13}
            >{item.targetDatePretty}
            </Label>
          </XStack>

        </Card.Footer>
      </Card>
    </XStack>
  )
}