import { Card, SizableText, XStack, YStack } from 'tamagui'
import { useNavigation } from '@react-navigation/native';
import { Box } from '@tamagui/lucide-icons';
import { SquareIcon } from '../base/SquareIcon';
import { MaterialIcons } from '@expo/vector-icons';

export function SavingRuleCard({ item, savingGoalId }: any) {
  const navigator = useNavigation() as any;

  return (
    <XStack $sm={{ flexDirection: 'row' }} mr='$2'>
      <Card
        backgroundColor='#334D64'
        borderRadius="$8"
        onPress={() => navigator.navigate('SavingRuleDetails',
          {
            savingGoalId: savingGoalId,
            savingRuleId: item.savingRuleId,
            savingRuleName: item.savingRuleName,
            savingRuleAutomationId: item.savingRuleAutomationId
          })}
      >
        <Card.Header padded>
          <YStack >
            <SquareIcon width={42}
              height={42}
              backgroundColor={item.savingRuleColor}
              icon={<MaterialIcons name={item.savingRuleIcon} size={18} color='#000' />}
            />

            <XStack mt='$2' mr='$2'>
              <SizableText
                maxWidth={120}
                fontSize={11}>
                {item.savingRuleName}
              </SizableText>
            </XStack>
            <XStack mr='$2'>
              <SizableText
                fontSize={14}
                fontWeight='bold'
              >
                {item.savingAmountTotalPretty}
              </SizableText>
            </XStack>

          </YStack>
        </Card.Header>
      </Card>
    </XStack>
  )
}