import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


export default function CreatePassword({navigation}) {
    <View style={styles.container}>
        <Text style={styles.forgotpassword}> Forgot Password </Text>
        <Text style={styles.text}> Please fill in the field below to reset your current password </Text>
        <Text style={styles.newPassword}>New Password </Text>
        <TextInput
          style={styles.input}
          value={String}
          placeholder='Create Password'
          secureTextEntry={true}
        />
        <Text style={styles.newPassword}>Confirm New Password </Text>
        <TextInput
          style={styles.input}
          value={String}
          placeholder='Create New Password'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}
          onPress={alert('Password change successflly.')}
        >
          <Text>Creat Password</Text>
        </TouchableOpacity>
      </View>
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  forgotpassword: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: 17,
    marginLeft: 15,
    padding: 10,
    width: 170,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    marginTop: 14,
    marginBottom: 6,
    padding: 10,
    color: '#808080',
    fontWeight: 'bold',
  },
  newPassword: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
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