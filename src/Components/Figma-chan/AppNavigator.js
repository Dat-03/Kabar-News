import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext } from './AppContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homechan from './Homechan';
import ListNews from './ListNews';
import Profile from './Profile';
import Register from './Register'
import FillProfile from './FillProfile';
import EditProfile from './EditProfile';
import NewsDetail from './NewsDetail';
import PostNews from './PostNews';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//login, register  ==> stack
const User = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Homechan" component={Homechan} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator >
    );
};

//news,detail,search,profile ==> tab
const Main = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="News" component={News} options={{ headerShown: false }} />
            <Tab.Screen name="PostNews" component={PostNews} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

        </Tab.Navigator>
    );
};

const News = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ListNews" component={ListNews} options={{ headerShown: false }} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} />
        </Stack.Navigator >
    );
}

const AppNavigator = () => {
    const { isLogin } = useContext(AppContext);
    console.log(isLogin);

    return (
        <>
            {isLogin == false ? <User /> : <Main />}

        </>
    );
}
export default AppNavigator