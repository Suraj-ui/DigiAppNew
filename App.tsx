/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet,View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SplashScreen } from './components/SplashScreen';
import { Home } from './components/Home';
import { Login } from './components/Login';
import Ham from './components/Ham';
import UserProfile from './components/UserProfile';
import { Calender } from './components/Calender';
import { Revenue } from './components/Revenue';
import { HB } from './components/Hb';
import { Mydromain } from './components/Mydromain';




const Stack = createNativeStackNavigator();
function App(): JSX.Element {
 

 
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
     headerRight:()=><Ham/>,
      headerTintColor:"#fff", headerStyle:{
      backgroundColor:"#7a057a",  
    },headerLeft:()=>null,
    }}>
     
        <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
    {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
    
    <Stack.Screen name='Home' component={Home} options={{title:"DIGI",headerLeft:()=> null,
    }} />
    <Stack.Screen name='Login' component={Login} options={{title:"User Login",headerShown: false }} />
    <Stack.Screen name='UserProfile' component={UserProfile}  />
    <Stack.Screen name='Ham' component={Ham} />
    <Stack.Screen name='Calender' component={Calender} />
    
    <Stack.Screen name='Revenue' component={Revenue} options={{title:"Revenue Prediction",
    }}/>
    <Stack.Screen name='Mydromain' component={Mydromain} options={{title:"MyDydro Tracking Format",
    }}/>
    <Stack.Screen name='HB' component={HB} options={{title:"HB Activity ",headerRight:()=><View style={{ flexDirection: 'row' }}>
               
                <Ham />
              </View>,
    }}/>
    
    
    
    </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
