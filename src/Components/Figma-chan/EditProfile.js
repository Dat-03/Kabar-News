import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const EditProfile = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={require('../image/X.png')} />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', fontFamily: 'Poppins' }}>Edit Profile</Text>
        <Image source={require('../image/V.png')} />
      </View>
      <View style={styles.imgProfileView}>
        <Image style={styles.imgProfile} source={require('../image/avata.png')}></Image>
        <Image style={styles.icCamera} source={require('../image/camera.png')}></Image>
      </View>

      <Text>Username</Text>
      <TextInput style={styles.textInput}>Peter Parker</TextInput>
      <Text>Full Name</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text>Email Address*</Text>
      <TextInput style={styles.textInput}>Peter Parker</TextInput>
      <Text>Phone Number*</Text>
      <TextInput style={styles.textInput}>Peter Parker</TextInput>
      <Text>Bio</Text>
      <TextInput style={styles.textInput}>Peter Parker</TextInput>
      <Text>Website</Text>
      <TextInput style={styles.textInput}>Peter Parker</TextInput>


    </View>
  )
}
export default EditProfile

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  imgProfileView: {
    width: 140,
    height: 140,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 100,

  },
  imgProfile: {
    width: 140,
    height: 140,
    borderRadius: 99,

  },
  icCamera: {
    position: 'absolute',
    right: 5,
    bottom: 4
  },
  textInput: {
    padding: 10,
    height: 48,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#4e4b66',
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 4,
  },
})