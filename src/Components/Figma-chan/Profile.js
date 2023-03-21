import {
  StyleSheet, Text, Image, View,
  Pressable, TouchableOpacity, FlatList, ToastAndroid
} from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosIntance from './AxiosIntance'
import ItemListNews from './ItemListNews'
import { useNavigation } from '@react-navigation/native';

const Profile = (props) => {
  const { navigation } = props;
  const goto = () => {
    navigation.navigate('EditProfile');
  }
  const [dataNe, setdataNe] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      // await AsyncStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VjYzlmYzhlYjJjODAwMTQ5MDA2ZjAiLCJlbWFpbCI6InF1b2NkYXQwM0BnbWFpbC5jb20iLCJuYW1lIjoiIiwiYWRkcmVzcyI6IiIsInBob25lIjoiIiwiYXZhdGFyIjoiIiwiaWF0IjoxNjc2NDcxMDkzLCJleHAiOjE2NzkwNjMwOTN9.PXoIwO3vkIdvUgAzaDVp4t3AMUj1xPyd5I8Kh2pXBGU");
      const response = await AxiosIntance().get("/articles");
      // console.log("List: " + response)
      if (response.error == false) {
        setdataNe(response.data);
        setisLoading(false);
      }
      else {
        ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
      }
    };

    getNews();

    return () => {

    }
  }, [])
  return (
    <View style={{ padding: 24 }}>
      <View style={styles.viewheader}>
        <Text>        </Text>
        <Text style={styles.fontProfile}>Profile</Text>
        <Image source={require('../image/setting.png')}
        />
      </View>
      <View style={styles.viewheader1}>
        <View style={styles.ellipse}>
          <Image style={styles.imgProfile}
            source={require('../image/avata.png')} />
          <View style={styles.viewheaderabc}>
            <View style={styles.viewtexta}>
              <Text style={{ fontWeight: 'bold', color: '#000000', fontSize: 16 }}>2156</Text>
              <Text style={{ marginTop: 5, fontSize: 16 }}>Followers</Text>
            </View>
            <View style={styles.viewtextb}>
              <Text style={{ fontWeight: 'bold', color: '#000000', fontSize: 16 }}>567</Text>
              <Text style={{ marginTop: 5, fontSize: 16 }}>Following</Text>
            </View>
            <View style={styles.viewtextc}>
              <Text style={{ fontWeight: 'bold', color: '#000000', fontSize: 16 }}>23</Text>
              <Text style={{ marginTop: 5, fontSize: 16 }}>News</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', color: '#000000', fontSize: 20, marginTop: 20 }}>Peter Parker</Text>
        <Text style={{ fontSize: 15 }}>Lorem lpsum is simply dummy text of the printing and typesetting industry.</Text>
      </View>
      <View style={styles.viewbody}>
        <TouchableOpacity style={styles.btnLogin}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}
            onPress={() => navigation.navigate('EditProfile')}
          >Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Website</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewtabscren}>
        <Text>News</Text>
        <Pressable style={styles.presstext}>
          <Text>Recent</Text>
        </Pressable>

      </View>
      <FlatList
        data={dataNe}
        renderItem={({ item }) => <ItemListNews dulieu={item} />}
        keyExtractor={item => item._id}>
      </FlatList>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  viewtabscren: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  presstext: {
    borderBottomWidth: 2,
    borderColor: '#1877f2'
  },
  viewbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

  },
  btnLogin: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 24,
    height: 50,
    width: 150,
    backgroundColor: '#1877f2',
    borderRadius: 6,

  },
  viewheaderabc: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  viewtexta: {
    flexDirection: 'column',
    marginStart: 20,
    alignItems: 'center',
  },
  viewtextb: {
    flexDirection: 'column',
    marginStart: 20,
    alignItems: 'center',
  },
  viewtextc: {
    flexDirection: 'column',
    marginStart: 20,
    alignItems: 'center',
  },
  viewheader1: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  viewheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgProfile: {
    width: 110,
    height: 110,
    borderRadius: 99
  },
  fontProfile: {
    width: 50,
    height: 24,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',

  },
  ellipse: {
    width: 100,
    height: 100,
    borderRadius: 99,
    backgroundColor: '#eef1f4',
    flexDirection: 'row',
  }
})