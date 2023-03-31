import { useEffect, useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';
import app from './firebase';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.profileUpperSection}>
                <Text style={styles.profileText}>Profile</Text>
                <Image source={require('./assets/me.png')} style={styles.profileImage} />
                <Text style={styles.Name}>Muhammad Faraz Baig!</Text>
                <TouchableOpacity>
                    <Text style={styles.editProfile}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.profileCrnterSection}>
                <Text style={styles.generalText}>General</Text>

                <View style={styles.buttons}>
                    <View style={styles.iconAndText}>
                        <TouchableOpacity>
                            <Icon name='lock-closed' size={24} color='red' />
                        </TouchableOpacity>
                        <Text style={styles.buttonText}>Security</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name='caret-back-outline' size={20} color='grey' />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.iconAndText}>
                        <TouchableOpacity>
                            <Icon name='document-text' size={24} color='red' />
                        </TouchableOpacity>
                        <Text style={styles.buttonText}>My Orders</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name='caret-back-outline' size={20} color='grey' />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.iconAndText}>
                        <TouchableOpacity>
                            <Icon name='location' size={24} color='red' />
                        </TouchableOpacity>
                        <Text style={styles.buttonText}>My Address</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name='caret-back-outline' size={20} color='grey' />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.iconAndText}>
                        <TouchableOpacity>
                            <Icon name='wallet' size={24} color='red' />
                        </TouchableOpacity>
                        <Text style={styles.buttonText}>Payment Method</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name='caret-back-outline' size={20} color='grey' />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.iconAndText}>
                        <TouchableOpacity>
                            <Icon name='log-out' size={24} color='red' />
                        </TouchableOpacity>
                        <Text style={styles.buttonText}>Logout</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name='caret-back-outline' size={20} color='grey' />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.profileBottomSection}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }}
                >
                    <Icon name='home' size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('favourite') }}
                >
                    <Icon name='heart-sharp' size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('CartScreen') }}
                >
                    <Icon name='cart' size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Profile') }}
                >
                    <Icon name='cog' size={30} />
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
    profileUpperSection: {
        height: 270,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileText: {
        fontWeight: '600',
        fontSize: 18,
        marginTop: 15,
    },
    profileCrnterSection: {
        height: 440,
        marginLeft: 17,
        marginRight: 17,
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 15,
    },
    Name: {
        fontWeight: '700',
        fontSize: 20,
        marginTop: 15,
    },
    editProfile: {
        fontWeight: '600',
        color: 'grey',
        margin: 7,
    },
    generalText: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 5,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 60,
        alignItems: 'center',
        borderRadius: 8,
        justifyContent:'space-between',
        padding:10,
        marginTop:11,
    },
    iconAndText:{
        flexDirection:'row',
        alignItems:'center',
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:15,
        marginLeft:10
    },
    profileBottomSection: {
        height: 90,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 25,
    }
});
