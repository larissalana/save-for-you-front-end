import { Label, XStack } from 'tamagui'
import { CalendarClock, CreditCard } from '@tamagui/lucide-icons'
import { LinearGradient } from 'tamagui/linear-gradient'
import { Dimensions } from "react-native";

export function RoundingDepositGradientCard({ item }: any) {

  function normalizeCardType(cardType: any){
    return cardType == 'BOTH' ? 'Cartão Débito e Cartão Crédito' : (cardType == 'DEBIT' ? 'Cartão Débito' : 'Cartão Crédito');
  }

  function normalizeDate(dateToNormalize: any){
    const date = new Date(dateToNormalize);
    const month = date.getMonth() + 1;
    let monthNormalized = month <= 9 ? '0'.concat((date.getMonth() + 1).toString()) : month;

    return date.getDate() + '/' + monthNormalized + '/' + date.getFullYear()
  }

  return (
    <XStack space>
      <LinearGradient
        width={Dimensions.get('window').width}
        h={120}
        bw='$1'
        boc='#223343'
        borderRadius='$10'
        colors={['#2A4054', '#223343']}
        start={[0., 0]}
        end={[0, 1]}>

        <XStack jc="space-between" ml='$3' mt='$3'
          height={40}>
          <XStack boc='white' flex={1}
            jc="center"
            ai="center">
            <XStack>
              <CreditCard size={16} />
            </XStack>
            <Label flex={1}
              ml="$2"
              mt='$4'
              fontSize={12}
              justifyContent="flex-end"
            >
              Origem
            </Label>
            <XStack>
              <Label flex={1}
                mt='$-3'
                fontSize={12}
                position="absolute"
                right='$5'
                justifyContent="flex-end"
              >
                {normalizeCardType(item.cardType)}
              </Label>
            </XStack>
          </XStack>
        </XStack>
        <XStack jc="space-between" ml='$3' mt='$2'
          borderTopWidth={1}
          borderTopColor={"#1F2E3D"}
          height={40}>
          <XStack boc='white' flex={1}
            jc="center"
            ai="center">
            <XStack>
              <CalendarClock size={16} />
            </XStack>
            <Label flex={1}
              ml="$2"
              mt='$4'
              fontSize={12}
              justifyContent="flex-end"
            >
              Iniciado em
            </Label>
            <XStack>
              <Label flex={1}
                mt='$-3'
                fontSize={12}
                position="absolute"
                right='$5'
                justifyContent="flex-end"
              >
                {normalizeDate(item.startDate)}
              </Label>
            </XStack>
          </XStack>
        </XStack>
      </LinearGradient>
    </XStack>
  )
}