import { Ban } from '@tamagui/lucide-icons'
import { Image, Paragraph, ScrollView, SizableText, XStack } from "tamagui";
import { Button } from "../components/base/Button";
import { Dimensions } from "react-native";

export function Welcome({ navigation }: any) {
    return (
        <ScrollView >
             <XStack jc="center" ai="center" $sm={{ flexDirection: 'column' }}  height={Dimensions.get('window').height}>
                <Image source={require("../../assets/img/welcome-piggy.png")} />

                <SizableText
                    mt='$7'
                    textAlign="center"
                    fontSize={26}
                    fontWeight='800'
                    lineHeight={28}
                >
                    Ajudando você a alcançar objetivos e realizar sonhos
                </SizableText>

                <Paragraph
                    mt='$4'
                    textAlign="center"
                    lineHeight={20}
                    color='#9EAFBE'
                    minWidth={280}
                    maxWidth={300}
                >
                    Cada decisão financeira que você faz, seja ela grande ou pequena, impacta sua vida.
                </Paragraph>

                <Button mt='$8'
                    disabled
                    opacity={0.4}
                    primary
                    icon={Ban}
                >
                    Criar Conta
                </Button>

                <Button mt='$2'
                    secondary
                    onPress={() => navigation.navigate('Login')}
                >
                    Ir para Login
                </Button>
            </XStack>
        </ScrollView>
    );
}