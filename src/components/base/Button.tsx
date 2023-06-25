import { Button as TButton, styled } from 'tamagui';

export const Button = styled(TButton, {
    w: 320,
    h: '$5',
    height: 55,
    borderRadius: "$10",
    borderColor: 'transparent',

    variants: {
        primary: {
            true: {
                bg: '#000'
            }

        },
        secondary: {
            true: {
                bg: '#C699FF',
                pressStyle: {
                    backgroundColor:'#9A75CF',
                    borderColor: 'transparent'
                }
            }
        }
    } as const,

    defaultVariants: {
        primary: true
    }
})