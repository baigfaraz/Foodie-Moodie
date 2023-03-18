import {  TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';
import { useState , useEffect } from 'react';

// const DATA3 = [
//     {
//         key: 0,
//         title: 'Chicken',
//         source: require('./assets/chicken.jpg'),
//         source2: require('./assets/delete.png'),
//         price: '25$',
//     },
//     {
//         key: 1,
//         title: 'Chicken',
//         source: require('./assets/chicken.jpg'),
//         source2: require('./assets/delete.png'),
//         price: '25$',
//     },
//     {
//         key: 2,
//         title: 'Chicken',
//         source: require('./assets/chicken.jpg'),
//         source2: require('./assets/delete.png'),
//         price: '25$',
//     },

// ];
const cartArray = [
    {
        key: 0,
        title: 'Chicken',
        source: require('./assets/chicken.jpg'),
        source2: require('./assets/delete.png'),
        price: '25$',
    },
    {
        key: 1,
        title: 'Chicken',
        source: require('./assets/kabab.jpg'),
        source2: require('./assets/delete.png'),
        price: '25$',
    },
    {
        key: 2,
        title: 'Chicken',
        source: require('./assets/pizza1.jpg'),
        source2: require('./assets/delete.png'),
        price: '25$',
    },
]




export default function CartScreen() {

    // const [mycart, setmycart] = useState([])
    // const getcart = async () => {
    //     try {
    //         const response = await fetch('');
    //         const json = await response.json();
    //         setmycart(json.cartData);
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //     }
    // };

    // useEffect(() => {
    //     getcart();
    // }, []);     


    return (

        <View style={StyleSheet.container}>
            <View style={styles.upperView}>
                <TouchableOpacity>
                    <Image source={require('./assets/back.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Cart</Text>
                <TouchableOpacity>
                    <Image source={require('./assets/delete.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    data={cartArray}
                    keyExtractor={item => item.key}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) =>

                        <View style={styles.items}>
                            <TouchableOpacity>
                                <View style={{ display: 'flex', flexDirection: 'row', }}>
                                    <View style={styles.contain3}>
                                        <Image source={item.source} style={styles.bestsellerImage} />
                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 16, }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                                            <Text style={{ fontSize: 16, fontWeight: '500', margin: 5, marginLeft: 11 }}>{item.price}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity>
                                                <Image source={item.source2} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    } />
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: 'white' }}>Proceed Cart</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f8f8ff',

    },
    upperView: {
        marginLeft: 17,
        marginRight: 17,
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 17,
    },
    items: {
        marginTop: 5,
        marginLeft: 17,
        marginRight: 17,
        marginBottom: 5,
    },
    contain3: {
        height: 90,
        width: 330,
        padding: 15,
        borderRadius: 8,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    bestsellerImage: {
        width: 90,
        height: 70,
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
