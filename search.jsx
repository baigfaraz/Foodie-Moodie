import { useState, TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';

const DATA2 = [
    {
        key: 0,
        title: 'Burger',
        source: require('./assets/burger.jpg'),
        price: '15$',
    },
    {
        key: 2,
        title: 'Kabab',
        source: require('./assets/kabab.jpg'),
        price: '10$',
    },
    {
        key: 3,
        title: 'Chicken',
        source: require('./assets/chicken.jpg'),
        price: '25$',
    },
];

export default function Search() {
    return (
        <View style={StyleSheet.container}>
            <View style={styles.upperView}>
                <TouchableOpacity>
                    <Image source={require('./assets/back.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 105 }}>Search</Text>
            </View>

            <View style={styles.searchbar}>
                <TextInput
                    style={styles.input}
                    placeholder='Search Your Favourite Food'
                    keyboardType='default' />
                <TouchableOpacity style={styles.button2}>
                    <Image source={require('./assets/search.png')} style={styles.searcIcon} />
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 17, marginRight: 17 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>Recent</Text>
            </View>

            <View style={styles.popular}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20, marginBottom: 5  , marginLeft:11}}>Popular</Text>
                <View>
                    <FlatList
                        data={DATA2}
                        keyExtractor={item => item.key}
                        horizontal={true}
                        renderItem={({ item }) =>

                            <View style={styles.items}>
                                <TouchableOpacity>
                                    <View style={styles.contain2}>
                                        <Image source={item.source} style={styles.popularfoodImage} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 6 }}>{item.title}</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '500', margin: 5, marginLeft: 11 }}>{item.price}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        }
                    />
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
    upperView: {
        marginTop: 40,
        marginLeft: 17,
        marginRight: 17,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 17,
    },
    searchbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginRight: 17,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: 'white',
        backgroundColor: 'white',
        width: 270,
        marginLeft: 17,
    },
    button2: {
        height: 40,
        borderRadius: 8,
        backgroundColor: 'white',
        width: 50,

    },
    searcIcon: {
        width: 30,
        height: 30,
        margin: 7.2,
    },
    popular: {
        marginLeft: 11,
        marginRight: 17,
    },
    items: {
        marginTop: 10,
        marginLeft: 6,
        marginBottom: 10,
        padding: 5,
    },
    contain2: {
        height: 200,
        width: 140,
        padding: 2,
        borderRadius: 8,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    popularfoodImage: {
        width: 130,
        height: 90,
    },
});

