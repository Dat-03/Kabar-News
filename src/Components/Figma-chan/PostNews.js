import { StyleSheet, Text, View, Image, Button, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntence from './AxiosIntance'

const PostNews = () => {
    const [imageNe, setimageNe] = useState(null);
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const capture = async () => {
        const result = await launchCamera();
        console.log(result.assets[0].uri);
        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg',
        });
        const response = await AxiosIntence("multipart/form-data").post('/media/upload', formdata);
        console.log(response);
        if(response.error == false){
            setimageNe(response.data.path);
            ToastAndroid.show("Upload ảnh Thành công",ToastAndroid.SHORT);
        }else{
            ToastAndroid.show("Upload ảnh thất bại",ToastAndroid.SHORT);
        }
    }
    const getImageLibrary = async () => {
        const result = await launchImageLibrary();
        console.log(result.assets[0].uri);
        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg',
        });
        const response = await AxiosIntence("multipart/form-data").post('/media/upload', formdata);
        console.log(response);

        if(response.error == false){
            setimageNe(response.data.path);
            ToastAndroid.show("Upload ảnh Thành công",ToastAndroid.SHORT);
        }else{
            ToastAndroid.show("Upload ảnh thất bại",ToastAndroid.SHORT);
        }
    }
    const dangTin = async () => {
        const response = await AxiosIntence().post('/articles',{title: title,content:content,image:imageNe});
        if(response.error == false){
            ToastAndroid.show("Đăng tin thành công",ToastAndroid.SHORT);
        }else{
            ToastAndroid.show("Đăng tin thất bại",ToastAndroid.SHORT);
        }
    }
    return (
        <View>
            <Text>Đăng Tin</Text>
            <Image style={styles.image} source={{uri: imageNe}}/>
            <Button title="Chụp ảnh " onPress={capture} />
            <Button title="Chọn ảnh từ thư viện" onPress={getImageLibrary} />
            <TextInput placeholder='Tiêu Đề' onChangeText={settitle}/>
            <TextInput placeholder='Nội Dung' onChangeText={setcontent}/>
            <Button title="Đăng tin"onPress={dangTin} />

        </View>
    )
}

export default PostNews

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    }
})