import React from 'react';
import { XStack, YStack } from 'tamagui';
import { MaterialIcons } from '@expo/vector-icons';

import * as Progress from 'react-native-progress';

export function Pie({ item }: any) {
    const percentage = item.percentageAlreadySaved ? item.percentageAlreadySaved / 100 : 0;
    const icon = item.category.icon ? item.category.icon : "auto-fix-high";
    return (
        <YStack mb='$4'>
            <XStack>
                <Progress.Pie
                    progress={percentage}
                    size={54}
                    borderWidth={0}
                    color={item.category?.color}
                    unfilledColor='#FFF' />
            </XStack>
            <XStack ai='center' ml='$3.5' mt={-40}>
                <MaterialIcons name={icon} size={22} color='#000' />
            </XStack>
        </YStack>
    );
};
