import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


export default function EmailVerify({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.forgotPassword}> Forgot Password </Text>
            <Text style={styles.email}> Enter your email </Text>
            <Text style={styles.text}> We need to verify you. We will send you a one time authorization code.</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                keyboardType='email-address'
            />
            <TouchableOpacity style={styles.button}
                onPress={() =>{navigation.navigate('AuthCode')}}
            >
                <Text style={{color:'white'}}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f8f8ff',
    },
    forgotPassword: {
        fontSize: 16,
        marginTop: 30,
        marginLeft: 15,
        padding: 10,
        width: 170,
    },
    email: {
        fontSize: 18,
        marginLeft: 8,
        marginTop: 20,
        padding: 10,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 1,
        marginLeft: 17,
        marginRight: 17,
        fontSize: 15,
        color: '#808080',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        margin: 18,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: 'white',
        backgroundColor: 'white',
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
});