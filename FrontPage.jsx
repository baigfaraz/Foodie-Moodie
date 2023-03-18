import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import pizza from './assets/pizza.jpg';

export default function FrontPage({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={pizza} resizeMode="cover" style={styles.image}>

                <Text style={styles.text1}>Enjoy your fast food only in Foodie Moodie</Text>
                <Text style={styles.text2}>Here is the place to buy food you want</Text>

                <TouchableOpacity style={styles.button1}
                    onPress={() => { navigation.navigate('Login') }}>
                    <Text style={{ color: 'white' }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}
                    onPress={() =>navigation.navigate('SignUp')}>
                    <Text style={{ color: 'white' }}>Sign Up</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text1: {
        marginTop: 430,
        marginLeft: 17,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 21,
        color: 'white',
    },
    text2: {
        fontSize: 15,
        margin: 17,
        color: 'white',
    },
    button1: {
        height: 40,
        margin: 18,
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'tomato',
        alignItems: 'center',
    },
    button2: {
        height: 40,
        margin: 18,
        marginTop: 8,
        padding: 10,
        borderRadius: 8,
        borderColor: 'white',
        backgroundColor: 'transparent',
        alignItems: 'center',
        borderWidth: 1,
    },
});