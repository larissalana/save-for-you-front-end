import React from 'react';
import { Circle, StackProps, XStack, YStack } from 'tamagui';
import { CalendarClock } from '@tamagui/lucide-icons';

export interface CircleProps extends StackProps{
    width: number;
    height: number;
    backgroundColor: string;
    icon: any;
}

export function CircleIcon({...props} : CircleProps) {
    return (
        <XStack 
        width={props.width}
        height={props.height}
        backgroundColor={props.backgroundColor}
        borderRadius="$10"
        space='$1'>

        <YStack flex={1} ai='center' jc='center'>
            <Circle ai='center' jc='center'>
                {props.icon}
            </Circle>
        </YStack>

    </XStack>
    );
};

export function CircleIconMin() {
    return (
        <XStack 
        width={42}
        height={42}
        backgroundColor='#A9FF22'
        borderRadius="$10"
        space='$1'>

        <YStack flex={1} mt='$3'>
            <Circle ai='center' jc='center'>
                <CalendarClock size={18} color='#000' />
            </Circle>
        </YStack>

    </XStack>
    );
};
