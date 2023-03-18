import { useState, TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';

const topping = [
    {
        key: 0,
        source: require('./assets/burger.jpg'),
    },
    {
        key: 1,
        source: require('./assets/kabab.jpg'),
    },
    {
        key: 2,
        source: require('./assets/can.jpg'),
    },
    {
        key: 3,
        source: require('./assets/chicken.jpg'),
    },
    {
        key: 4,
        source: require('./assets/pizza1.jpg'),
    },
    {
        key: 5,
        source: require('./assets/shuwarma.jpg'),
    },
    {
        key: 6,
        source: require('./assets/leg.jpg'),
    },
    {
        key: 7,
        source: require('./assets/fries.jpg'),
    },
]

export default function Detail() {
    return (
        <View style={StyleSheet.container}>

            <View style={styles.upperView}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }}
                >
                    <Image source={require('./assets/back.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 120 }}>Detail</Text>
            </View>

            <View style={styles.centerView}>
                <Image source={require('./assets/burger.jpg')} style={styles.imageView} />
                <View style={styles.namePrice}>
                    <Text style={{ fontWeight: '500', fontSize: 22 }}>Hulk Burger</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'red' }}>$15.00</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: '500', fontSize: 16, marginBottom: 5, marginTop: 12 }}>Detail</Text>
                    <Text style={{ fontWeight: '400' }}>This burger user 100% quiality beef with sliced tomatoas , pickles , vegetables , unions and extra thick chees...
                        <TouchableOpacity >
                            <Text style={{ color: 'red' }}>Read more</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>

            <View style={styles.bottomView}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Add some topping</Text>
                </View>
                <View>
                    <FlatList
                        data={topping}
                        keyExtractor={item => item.key}
                        horizontal={true}
                        renderItem={({ item }) =>

                            <View style={styles.items}>
                                <TouchableOpacity>
                                    <View style={styles.contain2}>
                                        <Image source={item.source} style={styles.toppingImage} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                    <Image source={require('./assets/greentick.png')} style={{ height: 15, width: 15 }} />
                    <Text style={{ fontWeight: '400', fontSize: 15 }}> Free Shiping</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Order Now</Text>
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
        marginTop: 40,
        marginLeft: 17,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 17,
    },
    centerView: {
        marginLeft: 17,
        marginRight: 17,
    },
    imageView: {
        width: 330,
        height: 250,
    },
    namePrice: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomView: {
        marginLeft: 17,
        marginRight: 17,
        marginTop: 17
    },
    items: {
        marginTop: 20,
        marginLeft: 7,
        marginBottom: 10,
        padding: 2,
    },
    contain2: {
        height: 50,
        width: 50,
        padding: 2,
        borderRadius: 8,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toppingImage: {
        width: 40,
        height: 40,
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