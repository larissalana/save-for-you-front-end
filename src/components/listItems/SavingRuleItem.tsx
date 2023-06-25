import { Card, Label, Sheet, SizableText, Switch, XStack, YStack } from 'tamagui'
import { ChevronDown, ChevronRight } from '@tamagui/lucide-icons'
import { Button } from '../base/Button'
import { Dimensions } from 'react-native'
import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SquareIcon } from '../base/SquareIcon'
import { MaterialIcons } from '@expo/vector-icons'

export function SavingRuleItem({ item }: any) {
  const navigator = useNavigation() as any;
  const route = useRoute() as any;
  const savingGoalId = route.params.savingGoalId;
  const [position, setPosition] = useState(1)
  const [open, setOpen] = useState(false)

return (
  <XStack $sm={{ flexDirection: 'column' }} mb='$4' width={Dimensions.get('window').width - 40}>
    <Card backgroundColor='#334D64'
      borderRadius="$8" 
      onPress={() => navigator.navigate('SavingRuleDetails',
          {
            savingGoalId: savingGoalId,
            savingRuleId: item.id,
            savingRuleName: item.name,
            savingRuleAutomationId: item.savingRuleAutomationId
          })}
          width={Dimensions.get('window').width - 40}
          >
      <Card.Header padded>
        <XStack jc="center" ai="center" space='$2' ml='$2'>
          <SquareIcon width={42}
            height={42}
            backgroundColor={item.color}
            icon={<MaterialIcons name={item.icon} size={18} color='#000' />}
          />

          <YStack width={Dimensions.get('window').width - 150} ml={'$2'}>
            <SizableText
              color='white'
              fontWeight='800'
              fontSize={13}>
              {item.name}
            </SizableText>

            <SizableText 
              mr='$2'
              lineHeight={17}
              color='#9EAFBE'
              fontSize={12}
              textAlign='justify'>
              {item.description}
            </SizableText>

            <SizableText 
              onPress={() => setOpen(true)}
              color='#C699FF'
              textDecorationLine="underline"
              fontWeight='800'
              maxWidth={120}
              fontSize={13}>
              Como funciona
            </SizableText>

          </YStack>

          <YStack flex={1} height={90} ai='center' jc='center'>
            <YStack ai='center' jc='center'>
              <ChevronRight size={16} />
            </YStack>
          </YStack>
        </XStack>

      </Card.Header>

      <Card.Footer borderTopWidth={1} borderTopColor={"#2A4054"}
        mt={-6}
        ml='$5'
        mr='$3'>
        <XStack jc="space-between">
          <XStack >
            <Label
              fontSize={12}
              marginTop="$3"
              width={Dimensions.get('window').width - 125}
              justifyContent="flex-end"
            >
              Status da automatização
            </Label>
            <XStack marginTop="$3">
              <Switch size='$2'
                disabled={true}
                opacity={0.3}
                checked={item.hasAutomationEnabled}
                backgroundColor={item.hasAutomationEnabled ? '#A9FF22' : '#223343'}
              >
                <Switch.Thumb animation="quick" />
              </Switch>
            </XStack>
          </XStack>
        </XStack>

      </Card.Footer>
    </Card>


    <Sheet
      forceRemoveScrollEnabled={open}
      modal={true}
      open={open}
      onOpenChange={setOpen}
      snapPoints={[80, 45, 20]}
      dismissOnSnapToBottom
      position={position}
      onPositionChange={setPosition}
      zIndex={100_000}
      animation="bouncy"
    >
      <Sheet.Overlay />
      <Sheet.Handle />
      <Sheet.Frame
        flex={1}
        space="$5"
        backgroundColor='#2A4054'
        borderRadius="$10"
        ai='center'
      >
        <YStack jc='center' mt='$2'>
          <Button bc='transparent' size="$4" icon={ChevronDown} onPress={() => setOpen(false)} />
        </YStack>

        <YStack ai='center' mt='$-4'>
          <SizableText
            textAlign='center'
            fontWeight='bold'
            fontSize={18}>
            Como funciona
          </SizableText>
        </YStack>

        <YStack flex={1} space
          mt='$-4'
          width={Dimensions.get('window').width - 40}
          jc='center'
          maxHeight={220}
        >

          <SizableText
            ml='$5'
            mr='$5'
            textAlign='justify'
            lineHeight={22}
            color='#9EAFBE'
            fontSize={13}
          >
            {item.detailedDescription}
          </SizableText>

          <Button primary alignSelf='center' mt='$2'
            onPress={() => setOpen(false)}
          >
            Entendi
          </Button>

        </YStack>

      </Sheet.Frame>
    </Sheet>

  </XStack>
)
}