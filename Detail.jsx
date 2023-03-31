import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import app from './firebase';
import { getDatabase, ref, onValue, update } from 'firebase/database';

export default function Detail({ navigation }) {

    const [category, setCategory] = useState();
    const [picture, setPicture] = useState();
    const [foodNme, setFoodName] = useState();
    const [price, setPrice] = useState();
    const [detail, setDetail] = useState();



    useEffect(() => {

        const db = getDatabase(app);
        const dbRef = ref(db, 'allOptions');
        onValue(dbRef, (snapshot) => {
            let data = snapshot.val();
            setCategory(data.foodCategory);
        })
        navigation.addListener('focus', () => {
            setPicture(global.Itemdetail.img)
            setFoodName(global.Itemdetail.title)
            setPrice(global.Itemdetail.price)
            setDetail(global.Itemdetail.detail)
        })

    }, [navigation])

    return (
        <View style={StyleSheet.container}>

            <View style={styles.upperView}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }}
                >
                    <Icon name="chevron-back-outline" size={25} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Detail</Text>
                <TouchableOpacity>
                    <Icon name="search-sharp" size={25} style={styles.searcIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.centerView}>
                <Image source={{ uri: picture }} style={styles.imageView} />
                <View style={styles.namePrice}>
                    <Text style={{ fontWeight: '500', fontSize: 22 }}>{foodNme}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'red' }}>{price}</Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: '600', fontSize: 16, marginBottom: 5, marginTop: 12 }}>Detail</Text>
                    <ScrollView>
                        <Text style={{ fontWeight: '400' }}>{detail}</Text>
                    </ScrollView>
                </View>
            </View>

            <View style={styles.bottomView}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Add some topping</Text>
                </View>
                <View>
                    <FlatList
                        data={category}
                        keyExtractor={item => item.key}
                        horizontal={true}
                        renderItem={({ item }) =>

                            <View style={styles.items}>
                                <TouchableOpacity>
                                    <View style={styles.contain2}>
                                        <Image source={{ uri: item.img }} style={styles.toppingImage} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.cartButton}>
                        <Icon name="cart" size={25} style={styles.backArrow} />
                        <Text style={{ color: 'white', fontWeight: '500' }}>Add to Cart</Text>
                    </TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                        <Image source={require('./assets/greentick.png')} style={{ height: 15, width: 15 }} />
                        <Text style={{ fontWeight: '400', fontSize: 15 }}> Free Shiping</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Buy Now</Text>
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
        marginTop: 10,
        marginLeft: 17,
        marginRight: 17,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
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
    },
    backArrow: {
        width: 30,
        height: 30,
        // color: 'silver',
    },
    cartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 8,
        width: 120,
        margin:18,

    }
});