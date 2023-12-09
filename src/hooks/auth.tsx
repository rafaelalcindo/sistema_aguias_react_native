import React,
{
    createContext,
    ReactNode,
    useContext,
    useState,
    useEffect
} from 'react';
import { Alert, AsyncStorage } from 'react-native';

import { UsuarioProps } from '../types/Usuario';

import api from '../services/axios';

type LoginData = {
    login: string;
    password: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

interface IAuthContextData {
    user: UsuarioProps;
    handleLogin(data: LoginData): Promise<void>;
    handleLogOut(): Promise<void>,
    userStorageLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UsuarioProps>({} as UsuarioProps);
    const [userStorageLoading, setUserStorageLoading] = useState(true);

    async function handleLogin(
        {
            login,
            password
        }: LoginData) {

        try {
            const dataLogin = {
                login: login,
                password: password
            };

            const {
                data: { token, usuario }
            } = await api.post(`session/loginusuario`, dataLogin).catch((err) => {
                console.log(err);
                Alert.alert('Tivemos um erro ao tentar logar, por favor verifique se digitou o login e a senha corretamente');
            });

            await AsyncStorage.setItem("SistemaAguias@token", JSON.stringify(token));
            await AsyncStorage.setItem("SistemaAguias@usuario", JSON.stringify(usuario));
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setUser(usuario);

        } catch { console.log('entrou catch') }

    }

    async function handleLogOut() {
        await AsyncStorage.removeItem("SistemaAguias@token");
        await AsyncStorage.removeItem("SistemaAguias@usuario");

        api.defaults.headers.common["Authorization"] = "";
        setUser({} as UsuarioProps);

    }

    useEffect(() => {
        async function loadUserStorageData() {
            const userStoraged = await AsyncStorage.getItem("SistemaAguias@usuario");

            if (userStoraged) {
                const userLogged = JSON.parse(userStoraged) as UsuarioProps;
                setUser(userLogged);
            }

            setUserStorageLoading(false);
        }

        loadUserStorageData();
    }, []);


    return (
        <AuthContext.Provider value={{
            user,
            handleLogin,
            handleLogOut,
            userStorageLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };