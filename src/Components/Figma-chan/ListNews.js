import { StyleSheet, Text, View, Image, FlatList, ScrollView, Pressable, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemListNews from './ItemListNews'
import AxiosIntance from './AxiosIntance'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NewsDetail } from './NewsDetail'



const Item = ({ type }) => (

    <Pressable style={styles.pressableType}>
        <Text style={[styles.textType, styles.textType_1]}>{type}</Text>
    </Pressable>
);

const ListNews = (props) => {
    const { navigation } = props;
    const [dataNe, setdataNe] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const getNews = async () => {
            // await AsyncStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VjYzlmYzhlYjJjODAwMTQ5MDA2ZjAiLCJlbWFpbCI6InF1b2NkYXQwM0BnbWFpbC5jb20iLCJuYW1lIjoiIiwiYWRkcmVzcyI6IiIsInBob25lIjoiIiwiYXZhdGFyIjoiIiwiaWF0IjoxNjc2NDcxMDkzLCJleHAiOjE2NzkwNjMwOTN9.PXoIwO3vkIdvUgAzaDVp4t3AMUj1xPyd5I8Kh2pXBGU");
            const response = await AxiosIntance().get("/articles");
            // console.log(response)
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
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../image/logo.png')} style={styles.imageLogo} />
                <Image source={require('../image/ringring.png')} style={styles.imageRing} />
            </View>
            <View style={styles.boxMenu}>
                <Text style={styles.textMenu_1}>Lastest</Text>
                <Text style={styles.textMenu_2}>See all</Text>
            </View>
            <View style={styles.boxType}>
                <Pressable style={styles.pressableAll}>
                    <Text style={[styles.textType, styles.textType_1]}>All</Text>
                </Pressable>
                <Text style={styles.textType}>Sports</Text>
                <Text style={styles.textType}>Politic</Text>
                <Text style={styles.textType}>Bussiness</Text>
                <Text style={styles.textType}>Health</Text>
                <Text style={styles.textType}>Travel </Text>

            </View>
            {/* <FlatList
                data={dataType}
                renderItem={({ item }) => <Item type={item} />}
                keyExtractor={item => item._id}
                horizontal={true}
                showsHorizontalScrollIndicator={false} /> */}
            {
                isLoading == true ?
                    <View style={styles.loading}>
                        <Text>Loading ...</Text>
                        <ActivityIndicator size={'large'} color='#FFF00' />
                    </View>
                    :
                    <FlatList
                        data={dataNe}
                        renderItem={({ item }) => <ItemListNews dulieu={item} navigation={navigation} dataNe = {dataNe}/>}
                        keyExtractor={item => item._id}>
                    </FlatList>
            }
            {/* <FlatList
                        data={dataNe}
                        renderItem={({ item }) => <ItemListNews dulieu={item} navigation={navigation} />}
                        keyExtractor={item => item._id}>
                    </FlatList> */}
            {/* <ListNewsDemo/> */}
        </View>
    )
}

export default ListNews

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 24,
        paddingEnd: 24,
        paddingTop: 24,
        backgroundColor: 'white',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 42,
        marginTop: 10,
    },
    imageLogo: {
        width: 144,
        height: 43,
    },
    imageRing: {
        width: 60,
        height: 60,
    },
    boxMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textMenu_1: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        color: 'black'
    },
    textMenu_2: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        color: '#4E4B66'
    },
    boxType: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 24,
    },
    textType: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        color: '#4E4B66'
    },
    textType_1: {
        color: 'black',
    },
    pressableAll: {
        borderBottomWidth: 2,
        borderColor: '#1877F2',
    },
    pressableType: {
        marginStart: 10,
        marginEnd: 10,
    }

})

const dataType = [
    "All", "Sport", "Politis", "Bussiness", "Health",
    "Travel", "Science",
]