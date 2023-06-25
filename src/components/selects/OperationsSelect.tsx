import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import {
  Adapt,
  Select,
  SelectProps,
  Sheet,
  XStack,
  YStack,
} from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

export function OperationsSelect(props: SelectProps) {
  return (
    <Select id="operation" {...props}>
      <Select.Trigger width={345} iconAfter={ChevronDown}
        h='$5'
        boc='#617486'
        bg='#223343'
        br='$6'
        bc='transparent'
        focusStyle={{
          bw: 1,
          boc: '#C699FF'
        }}
      >
        <Select.Value placeholder="Tipo da operação" />
      </Select.Trigger>

      <Adapt when="sm" platform="touch">
        <Sheet native modal dismissOnSnapToBottom>
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$background', '$backgroundTransparent']}
            borderRadius="$4"
          />
        </Select.ScrollUpButton>

        <Select.Viewport minWidth={200}>
          <XStack>
            <Select.Group space="$0">
              <Select.Label>Tipo de operação</Select.Label>
              {items.map((item, i) => {
                return (
                  <Select.Item index={i} key={item.name} value={item.value}>
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              })}
            </Select.Group>
          </XStack>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
          <LinearGradient
            start={[0, 0]}
            end={[0, 1]}
            fullscreen
            colors={['$backgroundTransparent', '$background']}
            borderRadius="$4"
          />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  )
}

const items = [
  { name: 'Depósito', value: 'DEPOSIT'},
  { name: 'Depósito de salário', value: 'SALARY_DEPOSIT' },
  { name: 'Cobrança débito', value: 'DEBIT' },
  { name: 'Cobrança crédito', value: 'CREDIT' }
]