import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text,Alert, ActivityIndicator} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {axios} from 'axios';

export const Login = ({navigation }) =>{
   const [EmpCode, setEmpCode] = useState('');
  const [Password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


// const handleLogin = async () => {
//   // try {
//   //   const response = await axios.post('https://digiapi.netcastservice.co.in/AccountApi/LoginValidate', {
//   //     EmpCode,
//   //     Password,
//   //   });
//   //   // const { token } = response.data;
//   //   // await AsyncStorage.setItem('authToken', token);
//   //  console.log("Success")
//   // } catch (error) {
//   //   console.log("error")
//   // }
// };

const handleLogin = async () => {
  setIsLoading(true);
  const response = await fetch('https://digiapi.netcastservice.co.in/AccountApi/LoginValidate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      EmailId: null,
      EmpCode: EmpCode,
      Password: Password,
      IpAddress: "::1",
      UserDevice: null,
      UserBrowser: null,
      BrowserDetail: {},
      LoginTypeField: "EMPCODE",
      ClientId: "10001",
      DeptId: "1",
      UserId: null,
      CusQuizid: null
    }),
  });
  console.log(EmpCode)
  console.log(Password)
  const responseData = await response.json();
 
  if (response.ok) {
    await AsyncStorage.setItem('user', responseData);
    console.log("---------------------------------------------------------")
  
    // Alert.alert(user);  
   // const  isRemember=AsyncStorage.getItem('Name');
    //Alert.alert('Msg', isRemember);
    //console.log(isRemember);
    if(responseData.errorCode=="0")
    {
      navigation.navigate('Home');

    }else
    {
      Alert.alert('Error','Invalid EmployeeCode or Password')
     console.log(responseData.errorDetail)

    }

    console.log(responseData.errorCode)
   
  } else {
    // errorMessage(responseData.error);
    Alert.alert('Error',responseData.error)
    console.log("F")
  }
  setIsLoading(false);
};
    return(
      <View style={styles.container}>
        {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
       <TextInput
        style={styles.input}
        placeholder="EmpCode"
        placeholderTextColor="#999999"
        onChangeText={(text) => setEmpCode(text)}
        value={EmpCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999999"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={Password}
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}  onPress={handleLogin}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        {/* <Text style={styles.forgotPasswordText}>Forgot Password?</Text> */}
      </TouchableOpacity>
      </>
       )}
    </View>
    );
  };

  
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#d4d4d2',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#7a057a',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#7a057a',
    fontSize: 14,
  },
});