import { useEffect, useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Image, FlatList, ScrollView } from 'react-native';
import app from './firebase';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import Icon from 'react-native-vector-icons/Ionicons';

export default function EditProfile() {
    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <TouchableOpacity style={styles.backArrow}>
                    <Icon name='chevron-back' size={30}/>
                </TouchableOpacity>
                <Text style={styles.upperViewText}>Edit Profile</Text>
            </View>
            <View style={styles.profileView}>
            <Image source={require('./assets/me.png')} style={styles.profileImage} />
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
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: 'row',
        height: 100,
    },
    backArrow:{
        height:30,
        width:30,
        marginLeft:17,
    },
    upperViewText:{
        fontWeight:'500',
        fontSize:18,
        width:200,
        marginLeft:85,
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 15,
    },
    profileView:{
        // justifyContent:'center',
    }
});
