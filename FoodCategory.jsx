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
    {
        key: 4,
        title: 'Pizza',
        source: require('./assets/pizza1.jpg'),
    },
    {
        key: 5,
        title: 'Shuwarma',
        source: require('./assets/shuwarma.jpg'),
    },
    {
        key: 6,
        title: 'Roast Leg',
        source: require('./assets/leg.jpg'),
    },
    {
        key: 7,
        title: 'Fries',
        source: require('./assets/fries.jpg'),
    },
]

export default function FoodCategory({ navigation }) {
    return (

        <ScrollView>
            <View style={StyleSheet.container}>

                <View style={styles.upperView}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Home') }}
                    >
                        <Image source={require('./assets/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 95 }}>Category</Text>
                </View>

                <View>
                    <FlatList
                        data={category}
                        keyExtractor={item => item.key}
                        horizontal={false}
                        numColumns={2}
                        renderItem={({ item }) =>

                            <View style={styles.items}>
                                <TouchableOpacity>
                                    <View style={styles.contain2}>
                                        <Image source={item.source} style={styles.foodCategoryImage} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>

            </View>
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 17,
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