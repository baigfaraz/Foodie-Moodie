import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SignUp({ navigation }) {

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {setShowPassword(!showPassword);}

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleShowConfirmPassword = () => {setShowConfirmPassword(!showConfirmPassword);}


  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [fullname, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const register = () => {
    if (password == '' || username == '' || fullname == '' || email == '' || confirmpassword == '') {
      return alert('Fields missing.');
    }
    else if (password != confirmpassword) {
      return alert('Password and Confirm Password is not same.');
    }
    else {

      axios.post('http://talk2you-live.lingmo-api.com/api/user', {
        password: password,
        languageId: "en-US",
        couponCode: "",
        username: username,
        deviceToken: "",
        fullName: fullname,
        email: email,
        notificationApp: "lingmoimtab",
        phone: "0321111111",
      })
        .then(function (response) {
          if (response.data.message == "User already exists") {
            alert('User already exists');
          }
          else {
            alert('Reistered Successfully');
            navigation.navigate('Login');
          }
        })
        .catch(error => {
          console.error(error);
        });
    };
  }

  return (
    <View>
      <Text style={styles.SignUp}> Sign Up </Text>
      <Text style={styles.text}> Email </Text>
      <TextInput
        style={styles.input}
        keyboardType='email-address'
        placeholder='E-mail'
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

      <TouchableOpacity style={styles.button}
        onPress={() => register()}
      >
        <Text>Create account</Text>
      </TouchableOpacity>

      <Text style={styles.loginWith}>Or login with</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signUp}>Already on foodie moodie? Sign in</Text>
      </TouchableOpacity>
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
    textAlign: 'center',
    margin: 25,
  },
  signUp: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'center',
    marginTop: 70,
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
  }

});