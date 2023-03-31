import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity,Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import useRegisterApi from './CustomHooks/postSignUpApi';
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import {getFirestore , setDoc , doc} from 'firebase/firestore'
import {CheckBox} from 'react-native-elements';


export default function SignUp({ navigation }) {

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => { setShowPassword(!showPassword); }

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleShowConfirmPassword = () => { setShowConfirmPassword(!showConfirmPassword); }

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [fullname, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSignup = async () => {
    console.log('LOGGED')
    await createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        console.log("Succesfull");
        const user = userCredential.user;
        console.log("user data,", user);
        const userData ={
          fullname : fullname,
        }
        saveUserData(userCredential.user.uid , userData);
        navigation.navigate('Login')
       
        Alert.alert('Registered Successfully');
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error Code == ', errorCode)
        console.log('Error Message == ', errorMessage)
        Alert.alert('User Exist already');
      });
  };

  const saveUserData = async (uid, userData) => {
    const db = getFirestore();
    try {
      await setDoc(doc(db, 'users', uid), userData);
      console.log('Document written with ID: ', userData.uid);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <View>
      <Text style={styles.SignUp}> Sign Up </Text>
      <Text style={styles.text}> Email </Text>
      <TextInput
        style={styles.input}
        keyboardType='name-phone-pad'
        placeholder='Phone Number'
        onChangeText={setEmail}
        value={email}

      />
      <Text style={styles.text}> UserName </Text>
      <TextInput
        style={styles.input}
        keyboardType={'name-phone-pad'}
        placeholder='UserName'
        onChangeText={setUserName}
        value={username}
      />
      <Text style={styles.text}>Full Name </Text>
      <TextInput
        style={styles.input}
        keyboardType={'name-phone-pad'}
        placeholder='Full Name'
        onChangeText={setName}
        value={fullname}
      />

      <Text style={styles.text}> Password </Text>

      <View style={styles.paswordbox}>
        <TextInput
          style={styles.passwordinput}
          placeholder='Create password'
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
        />
        <View style={styles.paswordimagebackground}>
          <TouchableOpacity onPress={toggleShowPassword}>
            {showPassword ? (
              <Image source={require('./assets/showPassword.png')} style={{ height: 20, width: 20 }} />
            ) : (
              <Image source={require('./assets/unshowPassword.png')} style={{ height: 20, width: 20 }} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.text}> Confirm Password </Text>
      <View style={styles.paswordbox}>
        <TextInput
          style={styles.passwordinput}
          placeholder='Confirm password'
          secureTextEntry={!showConfirmPassword}
          onChangeText={setConfirmPassword}
          value={confirmpassword}
        />
        <View style={styles.paswordimagebackground}>
          <TouchableOpacity onPress={toggleShowConfirmPassword}>
            {showConfirmPassword ? (
              <Image source={require('./assets/showPassword.png')} style={{ height: 20, width: 20 }} />
            ) : (
              <Image source={require('./assets/unshowPassword.png')} style={{ height: 20, width: 20 }} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <CheckBox
        onPress={()=>{setChecked(true)}}
      />

      <TouchableOpacity style={styles.button}
      // onPress={() => useRegisterApi({ navigation }, password, username, fullname, email, confirmpassword)}
      onPress={()=>{handleSignup()}}
      >
        <Text>Create account</Text>
      </TouchableOpacity>

      <View style={styles.bottomView}>
        <Text style={styles.loginWith}>Or login with</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUp}>Already on foodie moodie? Sign in</Text>
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

  SignUp: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 24,
    marginBottom: 20,
    padding: 10,
    width: 140,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 10,
    padding: 5,
    width: 150,
  },

  input: {
    height: 40,
    marginLeft: 17,
    marginRight: 17,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  passwordinput: {
    height: 40,
    width: 280,
    marginLeft: 17,
    borderWidth: 1,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: 'white',
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

  loginWith: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#808080',

  },
  signUp: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#808080',

  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  paswordbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paswordimagebackground: {
    height: 40,
    width: 45,
    backgroundColor: 'white',
    marginRight: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  bottomView: {
    alignItems: 'center',
    marginLeft: 17,
    marginBottom: 17,
    marginRight: 17,
    height: 155,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }

});