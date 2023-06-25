import { Input as TInput, styled } from 'tamagui';

export const Input = styled(TInput, {
    flex: 1,
    w: '$5',
    h: '$5',
    boc: '#617486',
    bg:'transparent',
    br: "$6",
    placeholderTextColor: '#617486',
    focusStyle: {
        bw: 1,
        boc: '#C699FF'
    }
})