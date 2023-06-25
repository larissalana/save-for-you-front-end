import { Anchor, Form, Image, Label, ScrollView, SizableText, Spinner, Switch, XStack } from "tamagui";
import { Button } from "../components/base/Button";
import { useState } from 'react';
import { authenticate } from "../services/AuthenticationService";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { TokenProps } from "../interfaces/TokenProps";
import { Input } from "../components/base/Input";
import { Dimensions } from "react-native";

export function Login({ navigation }: any) {
    const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')
    const [username, setUsername] = useState('')
    const [password, setPassoword] = useState('')
    const [error, setError] = useState('')

    async function login() {
        setStatus('submitting')
        const response = await authenticate(username, password);

        if (response) {
            const { token } = response;
            AsyncStorage.setItem('token', token);

            const tokenDecoded = jwtDecode(token) as TokenProps;
            AsyncStorage.setItem('userId', tokenDecoded.userId);
            AsyncStorage.setItem('clientId', tokenDecoded.clientId);

            setStatus('submitted')
            navigation.replace('TabsRoutes')
        }
        else {
            setError('Usuário ou senha inválidos!');
            setStatus('off')
        }
    }

    return (
        <ScrollView >
            <XStack jc="center" ai="center" $sm={{ flexDirection: 'column' }}  height={Dimensions.get('window').height} >

                <SizableText
                    color='#D24859'
                    textAlign="center"
                    fontSize={16}
                    fontWeight='800'
                    mb={'$4'}
                    ml={'$2'}
                >
                    {error}
                </SizableText>

                <SizableText
                    color='#C699FF'
                    textAlign="center"
                    fontSize={22}
                    fontWeight='800'
                    letterSpacing={4}
                >
                    LOGIN
                </SizableText>

                <Image mt='$6'
                    source={require("../../assets/img/smile-box.png")} />

                <Form alignItems="center"
                    space
                    onSubmit={() => setStatus('submitting')}
                    padding="$6"
                    mt='$2'>

                    <XStack alignItems="center">
                        <Input
                            id='username'
                            placeholder="Usuário"
                            value={username}
                            onChangeText={setUsername}
                        />
                    </XStack>

                    <XStack alignItems="center">
                        <Input
                            id='password'
                            placeholder="Senha"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassoword}
                        />
                    </XStack>

                    <XStack jc="space-between">
                        <Switch size='$3' id='rememberMe' disabled={true} opacity={0.5}>
                            <Switch.Thumb animation="quick" />
                        </Switch>

                        <Label
                            ml='$2.5'
                        >
                            Lembre-se de mim
                        </Label>

                        <Anchor
                            ml='$5'
                            justifyContent="flex-end"
                            textDecorationLine="underline"
                            disabled={true}
                            opacity={0.5}
                        >
                            Esqueci a senha
                        </Anchor>
                    </XStack>

                    <Form.Trigger asChild disabled={status !== 'off'}>
                        <Button primary
                            mt='$5'
                            icon={status === 'submitting' ? () => <Spinner color={'#A9FF22'} /> : undefined}
                            onPress={login}
                        >
                            Entrar
                        </Button>
                    </Form.Trigger>
                </Form>
            </XStack>
        </ScrollView >
    );
}

