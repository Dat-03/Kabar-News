import { FlatList, Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AppContext, AppContextProvider } from './src/Components/Figma-chan/AppContext.js'
import AppNavigator from './src/Components/Figma-chan/AppNavigator.js'
import Profile from './src/Components/Figma-chan/Profile.js';
import Register from './src/Components/Figma-chan/Register.js';
import EditProfile from './src/Components/Figma-chan/EditProfile.js';
import DetailSreen from './src/Components/Figma-chan/DetailSreen.js';
import Explore from './src/Components/Figma-chan/Explore.js';
import Flatlist from './src/Components/Figma-chan/Flatlist.js';
import Homechan from './src/Components/Figma-chan/Homechan.js';
import NewsDetail from './src/Components/Figma-chan/NewsDetail.js';
import PostNews from './src/Components/Figma-chan/PostNews.js';




function App() {



  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}



export default App