import { MaterialIcons } from "@expo/vector-icons";
import { Box, Button, Center, FormControl, HStack, Heading, Icon, Image, Input, Link, Pressable, Stack, Text, VStack } from "native-base";
import { useState } from "react";
import { handleLogin } from "../controllers/generalController";

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState(false);
    return (
        <Center w="100%" h='100%'>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Center>
                    <Image source={{ uri: 'https://galaxies.dev/img/logos/logo--blue.png' }}
                        alt='logo'
                        width="200"
                        height="200"
                        resizeMode="contain"
                        m={-5}
                    />
                </Center>
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Olá novamente
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Faça o login para continuar!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input InputLeftElement={
                            <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} 
                            placeholder="exemplo@gmail.com"
                            value={email}
                            onChangeText={(texto) => setEmail(texto)} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input  type={show ? "text" : "password"} 
                                placeholder="********"
                                value={senha}
                                onChangeText={(texto) => setSenha(texto)}
                                InputLeftElement={<Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} ml="2" color="muted.400" />
                        </Pressable>}/>
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Esqueceu a senha?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="blue" onPress={() => handleLogin(email, senha, navigation)}>
                        Entrar
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            Eu sou um novo usuário.{" "}
                        </Text>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} onPress={() => navigation.navigate('Registro')}>
                            cadastrar-me
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
}