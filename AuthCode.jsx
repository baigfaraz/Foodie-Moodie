import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

export default function AuthCode() {
  return (
    <View style={styles.container}>
      <Text style={styles.OTP}> OTP Number </Text>
      <Text style={styles.authorization}> Enter Authorization Code </Text>
      <Text style={styles.SMS}> We have sent SMS to:</Text>
      <Text style={styles.num}> +62(XXX)XXX-X120</Text>
      <TextInput
        style={styles.input}
        placeholder='6 Digit Code'
        keyboardType='number-pad'
      />
      <TouchableOpacity style={styles.button}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  OTP: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: 17,
    marginLeft: 15,
    padding: 10,
    width: 170,
  },
  authorization: {
    fontSize: 18,
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  SMS: {
    marginTop: 1,
    fontSize: 15,
    textAlign: 'center',
    color: '#808080',
    fontWeight: 'bold',
  },
  num: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
  input: {
    height: 40,
    margin: 18,
    borderWidth: 1,
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
});
