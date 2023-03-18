import { useState, TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';

const category = [
    {
        key: 0,
        title: 'Burger',
        source: require('./assets/burger.jpg'),
    },
    {
        key: 1,
        title: 'Kabab',
        source: require('./assets/kabab.jpg'),
    },
    {
        key: 2,
        title: 'Coka Colla',
        source: require('./assets/can.jpg'),
    },
    {
        key: 3,
        title: 'Chicken',
        source: require('./assets/chicken.jpg'),
    },

]

export default function SearchResult() {
    return (
        <ScrollView>

            <View style={StyleSheet.container}>
                <View style={styles.upperView}>
                    <TouchableOpacity>
                        <Image source={require('./assets/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 90 }}>SearchResult</Text>
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
                    <Text style={{ fontWeight: '700', fontSize: 17, marginTop: 20 }}>Result for:Chicken</Text>
                </View>
                <View>
                    <FlatList
                        data={category}
                        keyExtractor={item => item.key}
                        horizontal={false}
                        numColumns={2}
                        renderItem={({ item }) =>

                            <View style={styles.items}>
                                <TouchableOpacity

                                >
                                    <View style={styles.contain2}>
                                        <Image source={item.source} style={styles.foodCategoryImage} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
            </View >
        </ScrollView>
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
    items: {
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 10,
        padding: 2,
    },
    contain2: {
        height: 170,
        width: 150,
        padding: 2,
        borderRadius: 8,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    foodCategoryImage: {
        width: 130,
        height: 100,
    },
});