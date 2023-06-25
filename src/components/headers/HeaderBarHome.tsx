import { useNavigation } from '@react-navigation/native';
import { Bell, Undo2 } from '@tamagui/lucide-icons'
import { Dimensions } from 'react-native'
import { Button, SizableText, XGroup, XStack, YStack } from 'tamagui'

export function HeaderBarHome() {
  const navigator = useNavigation() as any;
  return (
    <XStack backgroundColor='#2A4054'>
      <XStack mt='$8'>
        <XGroup backgroundColor='transparent'>
          <XGroup.Item>
            <Button
              width={70}
              height={45}
              bg='transparent'
              disabled
            >
              <YStack jc='center'
                minWidth={40}
                height={45}>
              </YStack>
            </Button>
          </XGroup.Item>

          <XGroup.Item >
            <YStack
              ai='center'
              jc='center'
              width={Dimensions.get('window').width - 140}
              height={45}>
              <SizableText
                fontWeight='bold'>
              </SizableText>
            </YStack>
          </XGroup.Item>

          <XGroup.Item>
            <Button
              width={70}
              height={45}
              bg='transparent'
              disabled
              opacity={0.5}
            >
              <YStack
                jc='center'
                width={40}
                height={40}
                borderWidth={1}
                borderRadius={16}
                borderColor='#A9FF22'
              >
                <YStack ai='center'
                  jc='center'>
                  <Bell size={19} />
                </YStack>
              </YStack>
            </Button>
          </XGroup.Item>
        </XGroup>
      </XStack>
    </XStack>
  )
}

/* TODO variants:
// left
    - icon -> aqui pode setar para ser sempre CornerUpLeft ou Undo2, reply
    - empty
// center
    - title
    - empty
// rigth
    - icon -> aqui pode variar o ícone, mas terá sempre a borda lime --> Bell quando sem notificação BellDot qdo com notificacoa
*/