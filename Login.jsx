import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useState } from 'react';
import useSighnInApi from './CustomHooks/postSighnInApi';



export default function Login({ navigation }) {
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { setShowPassword(!showPassword); }

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.welcome}> Welcome </Text>
                <Text style={styles.foodieModie}> Foodie Moodie </Text>

                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        keyboardType='name-phone-pad'
                        placeholder='User Name'
                        onChangeText={setUserName}
                        value={username}
                    />
                    <View style={styles.paswordbox}>
                        <TextInput
                            style={styles.passwordinput}
                            placeholder='Password'
                            secureTextEntry={!showPassword}
                            onChangeText={setPassword}
                            value={password}
                        />
                        <View style={styles.paswordimagebackground}>
                            <TouchableOpacity onPress={toggleShowPassword}>
                                {showPassword ? (
                                    <Image source={require('./assets/showPassword.png')} style={{ height: 20, width: 20 }} />
                                ) : (
                                    <Image source={require('./assets/unshowPassword.png')} style={{ height: 20, width: 20 }} />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>

                </SafeAreaView>

                <TouchableOpacity
                    onPress={() => navigation.navigate('EmailVerify')}
                >
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => useSighnInApi({ navigation }, password, username)}
                // onPress={()=>{navigation.navigate('Home')}}
                >
                    <Text style={{ color: 'white' }}>Login</Text>
                </TouchableOpacity>

                <View style={styles.bottomView}>
                    <Text style={styles.loginWith}>Or login with</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signUp}>New on foodie moodie? Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f8f8ff',
    },

    welcome: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 24,

        padding: 10,
        width: 140,
    },

    foodieModie: {
        fontSize: 30,
        margin: 30,
        padding: 2,
        textAlign: 'center',
        color: 'orange',
    },

    input: {
        height: 40,
        margin: 16,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: 'white',
        backgroundColor: 'white',
    },
    forgotPassword: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#808080',
        textAlign: 'right',
        margin: 10,
    },

    button: {
        height: 40,
        margin: 18,
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'tomato',
        alignItems: 'center',
        padding: 10,
    },

    loginWith: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#808080',
    },
    signUp: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#808080',
    },
    paswordbox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    paswordimagebackground: {
        height: 40,
        width: 45,
        backgroundColor: 'white',
        marginRight: 17,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
    },
    passwordinput: {
        height: 40,
        width: 280,
        marginLeft: 17,
        borderWidth: 1,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 1,
        borderBottomRightRadius: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: 'white',
        backgroundColor: 'white',
    },
    bottomView: {
        alignItems: 'center',
        marginLeft: 17,
        marginBottom: 17,
        marginRight: 17,
        height: 370,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
});
