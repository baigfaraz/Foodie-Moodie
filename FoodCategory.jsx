import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';
import app from './firebase';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import Icon from 'react-native-vector-icons/Ionicons';


export default function FoodCategory({ navigation }) {
    const [category, setCategory] = useState();

    useEffect(() => {
        const db = getDatabase(app);
        const dbRef = ref(db, 'allOptions');
        onValue(dbRef, (snapshot) => {
            let data = snapshot.val();
            setCategory(data.foodCategory);
        })
    }, [])
    return (

        <View style={StyleSheet.container}>

            <View style={styles.upperView}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }}
                >
                    <Image source={require('./assets/back.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Category</Text>
                <TouchableOpacity>
                    <Icon name="search-sharp" size={25} style={styles.searcIcon} />
                </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <FlatList
                    data={category}
                    keyExtractor={item => item.key}
                    horizontal={false}
                    numColumns={2}
                    renderItem={({ item }) =>

                        <View style={styles.items}>
                            <TouchableOpacity>
                                <View style={styles.contain1}>
                                    <Image source={{ uri: item.img }} style={styles.foodCategoryImage} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 5, marginLeft: 11 }}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
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
    searcIcon: {
        width: 30,
        height: 30,
    },
    items: {
        marginTop: 5,
        padding: 10,
    },
    contain1: {
        height: 50,
        width: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    foodCategoryImage: {
        width: 50,
        height: 40,
    }
});