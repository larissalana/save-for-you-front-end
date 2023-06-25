import React from 'react';
import { StackProps, XStack, YStack } from 'tamagui';

export interface SquareProps extends StackProps{
    width: number;
    height: number;
    backgroundColor: string;
    icon: any;
}

export function SquareIcon({...props} : SquareProps) {
    return (
        <XStack 
        width={props.width}
        height={props.height}
        backgroundColor={props.backgroundColor}
        borderRadius="$6"
        space='$1'>

        <YStack flex={1} ai='center' jc='center'>
            <YStack ai='center' jc='center'>
            {props.icon}
            </YStack>
        </YStack>

    </XStack>
    );
};
