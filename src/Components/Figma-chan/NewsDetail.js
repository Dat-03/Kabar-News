import { StyleSheet, Text, View, ScrollView, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemListNews from './ItemListNews'
import AxiosIntance from './AxiosIntance'
import { useNavigation } from '@react-navigation/native'
import { ListNews } from './ListNews'


const NewsDetail = (props) => {
    const { route } = props;
    const { params } = route;
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [image, setimageUrl] = useState("");

    // console.log(params);

    useEffect(() => {
        const getDetails = async () => {
            const response = await AxiosIntance().get("articles/" + params.id + "/detail");
            // console.log(response);
            if (response.error == false) {
                // lấy dữ liệu thành công 
                settitle(response.data[0].title);
                setcontent(response.data[0].content);
                setimageUrl(response.data[0].image);

                console.log("halo :" + response.data[0].image);
            } else {
                ToastAndroid.show("Lấy giữ liệu thất bại", ToastAndroid.SHORT);
            }
        }
        getDetails();
        return () => {

        }
    }, [])
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center',}}>
                <View>
                    <Image style={{ width: 50, height: 50 }}
                        source={require('../image/icBBCnew.png')} />
                </View>
                <View style={{marginStart:10,}}>
                    <Text style={{ fontWeight: 'bold', color: '#000000' }}>BBC News</Text>
                    <Text>4h ago</Text>
                </View>
            </View>

            <ScrollView style={{marginTop:20,}}>
                <Image style={styles.image}
                    source={{ uri: image }} />
                <Text style={styles.title}>{title}</Text>
                <Text></Text>
                <Text style={styles.title}>{content}</Text>

            </ScrollView>
        </View>
    )
}

export default NewsDetail

const styles = StyleSheet.create({
    container:{
        padding:24,
    },
    image: {
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 20
    }
})