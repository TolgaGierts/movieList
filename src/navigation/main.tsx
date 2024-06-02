import * as React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { MainNavigationType, RootStackParamList } from './types';
import DetailScreen from '../screens/DetailScreen';
import PopularMovieList from '../screens/PopularFilms/PopulerMovieList';
import AntDesign from '@expo/vector-icons/AntDesign';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MyTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#000',
        background: '#000',
    },

};

function MainNavigation() {
    return (
        <NavigationContainer theme={MyTheme}>
            <RootStack.Navigator initialRouteName="PopularMovieList" screenOptions={{
                headerStyle: { backgroundColor: '#000' }, headerTitleStyle: { color: 'white' }, headerTintColor: '#fff', statusBarStyle: 'light', statusBarColor: '#000', headerRight: () => (
                    <AntDesign name="user" size={24} color="white" />)
            }} >
                <RootStack.Screen name="LoginScreen" component={LoginScreen} />
                <RootStack.Screen name="DetailScreen" component={DetailScreen} options={{ headerTitle: '' }} />
                <RootStack.Screen name="PopularMovieList" component={PopularMovieList} options={{
                    title: 'Vizyondaki Filmler'
                }} />
            </RootStack.Navigator>
        </NavigationContainer >
    );
}



export default MainNavigation