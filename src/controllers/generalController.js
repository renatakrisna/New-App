import { app } from '../config/index'
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const handleLogin = async (email, senha, navigation) => {
    console.log('Entrei')
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            console.log('Entrei no then')

            navigation.navigate('Dashboard')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });

}

export const handleSignIn = async (email, password, navigation) => {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigation.navigate('Dashboard')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });
}

export const handleScheduling = async (service, horario, profissionalId, token, navigation) => {


}

export const getAgendamentos = async (token) => {


}