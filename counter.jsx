import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
} from 'react-native';

const CounterApp = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter != 0)
            setCounter(counter - 1);
        else
        alert( 'Error!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={incrementCounter}>
                    <Text style={styles.textStyle}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={decrementCounter}>
                    <Text style={styles.textStyle}>Decrement</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.counterContainer}>
                <Text style={styles.textStyle}>Counter: {counter}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 15,
    },
    counterContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
    },
});

export default CounterApp;
