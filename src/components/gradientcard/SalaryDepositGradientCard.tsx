import { Label, XStack } from 'tamagui'
import { Box, CalendarClock, Receipt } from '@tamagui/lucide-icons'
import { LinearGradient } from 'tamagui/linear-gradient'
import { Dimensions } from "react-native";

export function SalaryDepositGradientCard({ item }: any) {

  function normalizeDepositValue(depositValue: any){
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return formatter.format(depositValue);
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
       width={Dimensions.get('window').width - 30}
        h={160}
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
              <Box size={16} />
            </XStack>
            <Label flex={1}
              ml="$2"
              mt='$4'
              fontSize={12}
              justifyContent="flex-end"
            >
              Tipo do depósito
            </Label>
            <XStack>
              <Label flex={1}
                mt='$-3'
                fontSize={12}
                position="absolute"
                right='$5'
                justifyContent="flex-end"
              >
                Valor
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
              <Receipt size={16} />
            </XStack>
            <Label flex={1}
              ml="$2"
              mt='$4'
              fontSize={12}
              justifyContent="flex-end"
            >
              Valor do depósito
            </Label>
            <XStack>
              <Label flex={1}
                mt='$-3'
                fontSize={12}
                position="absolute"
                right='$5'
                justifyContent="flex-end"
              >
              {normalizeDepositValue(item.depositValue)}
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