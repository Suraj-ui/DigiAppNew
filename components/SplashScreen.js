import React,{ useEffect,useState } from 'react';
import { Text, View, Button,Image, FlatList, StyleSheet, ScrollView,ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SplashScreen = ({navigation }) =>{

  useEffect(() => {
    setTimeout(() => {
      handleUser()
    }, 5000);
  });

  const handleUser = async()=>{
    const usertoken= await AsyncStorage.getItem("user")
    if(!usertoken){
      navigation.replace('Login');
    }else{
      navigation.replace('Home');
    }
  }
    return(
      <View style={styles.container}>
        <ImageBackground
        source={require('.//images/Splash.jpg')} 
        style={styles.backgroundImage}></ImageBackground>
      {/* <Image
        style={styles.img}
        source={require('.//images/profile.png')}
        resizeMode="contain"
      /> */}
      {/* <Text style={styles.logo}>DIGI</Text> */}
    </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',

    
    },
    logo: {
      fontSize:70,
      fontWeight:'800',
      color: '#7a057a',
    },
    img: {
      width:'100%',
    },
  });
