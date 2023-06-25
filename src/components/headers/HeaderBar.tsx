import { useNavigation } from '@react-navigation/native';
import { Undo2 } from '@tamagui/lucide-icons';
import { Dimensions } from 'react-native'
import { Button, SizableText, XGroup, XStack, YStack } from 'tamagui'

interface HeaderBarProps {
  left?: boolean;
  centerText?: string
  rigth?: any
  rigthDisabled?: boolean;
}

export function HeaderBar({ left, centerText, rigth, rigthDisabled }: HeaderBarProps) {
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
              onPress={() => navigator.goBack()}
              disabled={left}
              opacity={left ? 0 : 1}
            >
              <YStack jc='center'
                minWidth={40}
                height={45}>
                <Undo2 size={18} />
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
                {centerText}
              </SizableText>
            </YStack>
          </XGroup.Item>

          <XGroup.Item>
            <Button
              width={70}
              height={45}
              bg='transparent'
              disabled={rigthDisabled}
              opacity={rigthDisabled ? 0.5 : 0}
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
                  {rigth}
                </YStack>
              </YStack>
            </Button>
          </XGroup.Item>
        </XGroup>
      </XStack>
    </XStack>
  )
}