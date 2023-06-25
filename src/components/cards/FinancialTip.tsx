import { Dimensions } from 'react-native'
import { Card, Image, SizableText, XStack, YStack } from 'tamagui'

export function FinancialTip() {
  return (
    <XStack $sm={{ flexDirection: 'column' }} pb='$3' width={Dimensions.get('window').width - 40}>

      <SizableText
        fontSize={14}
        fontWeight='900'>
        Dicas
      </SizableText>

      <Card mt='$2'
        backgroundColor='#89D5FF'
        borderRadius="$8" >
        <Card.Header >
          <XStack jc="center" ai="center" space='$2' padding='$2.5' >

            <Image source={require("../../../assets/img/heart.png")} width={65} height={65}/>

            <YStack flex={1}>
              <SizableText
                mr='$4'
                lineHeight={18}
                color='#000'
                fontSize={11}>
                Ter uma boa relação com as finanças não diz respeito aos números que você tem na
                sua conta corrente, mas sim a como você usa o que tem.
              </SizableText>
            </YStack>

          </XStack>
        </Card.Header>
      </Card>
    </XStack>
  )
}