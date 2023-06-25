import React from 'react';
import { SizableText, XStack, YStack } from 'tamagui';
import * as Progress from 'react-native-progress';
import { SummaryInformation } from '../interfaces/SummaryInformation';

export function ProgressChartWithTextInside(summaryInformation : SummaryInformation) {
    const percentage = summaryInformation.percentageAlreadySavedTotal ? summaryInformation.percentageAlreadySavedTotal / 100 : 0;
    return (
        <XStack alignSelf="center" space mt='$3'>
            <YStack ai='center' jc='center'>
                <YStack mt='$13'>
                    <SizableText
                        color='white'
                        textAlign="center"
                        fontWeight='800'
                        fontSize={20}
                        minWidth={300}
                        maxWidth={300}>
                        {summaryInformation.savingAmountTotalPretty}
                    </SizableText>
                    <SizableText
                        color='#9EAFBE'
                        textAlign="center"
                        fontSize={12}
                        minWidth={300}
                        maxWidth={300}>
                        já guardado de {summaryInformation.targetAmountTotalPretty}
                    </SizableText>
                </YStack>

                <YStack mt='$-16'>
                    <Progress.Circle
                        size={225}
                        borderWidth={0}
                        thickness={10}
                        progress={percentage}
                        color='#A9FF22'
                        unfilledColor='#223343' />
                </YStack>
            </YStack>
        </XStack>
    );
};
