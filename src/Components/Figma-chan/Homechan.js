import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosIntance from './AxiosIntance'
import { AppContext } from './AppContext';
import { DetailSreen } from './DetailSreen';
import { NewsDetail } from './NewsDetail';


const Homechan = (props) => {
    const { navigation } = props;
    const { setisLogin } = useContext(AppContext);
    const gotoHome = () => {
        navigation.navigate('ListNews');

    }
    const [username, setusername] = useState("dat03@gmail.com");
    const [password, setpassword] = useState("1234");


    const handleLogin = async () => {

        console.log(username, password);
        try {
            const response = await AxiosIntance().post('/auth/login',
                {
                    email: username, password: password
                });
            if (response.error == false) {
                const { token } = response.data;
                await AsyncStorage.setItem('token', token);
                ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
                setisLogin(true);
            }
            else {
                console.log("Login: error")
            }

            // console.log("abc " + response + "mmm " + token);

        } catch (error) {
            console.log("hihi " + error);

        }
        return false;
    }
    return (

        <View style={myStyle.container}>
            <Text style={[myStyle.hello, myStyle.title]}>Hello</Text>
            <Text style={[myStyle.again, myStyle.title]}>Again!</Text>
            <Text style={myStyle.welcome}>Welcome back you've been missed</Text>
            <View style={[myStyle.boxUser, { marginTop: 10 }]}>
                <Text style={myStyle.username}>Username</Text>
                <Text style={myStyle.usernote}>*</Text>

            </View>

            <TextInput style={myStyle.textInput}
                value={username}
                onChangeText={setusername} />
            <View style={[myStyle.boxUser, { marginTop: 10 }]}>
                <Text style={myStyle.username}>Password</Text>
                <Text style={myStyle.usernote}>*</Text>
            </View>

            <View style={myStyle.inputContainer}>
                <TextInput style={myStyle.textInput}
                    secureTextEntry
                    value={password}
                    onChangeText={setpassword} />
                <Image
                    source={require('../image/eye.png')}
                    style={myStyle.eyeIcon} />
                <View style={myStyle.checkbox}>
                    <BouncyCheckbox
                        top={10}
                        size={25}
                        fillColor="green"
                        unfillColor="#FFFFFF"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderRadius: 2 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular" }}
                    />
                    <Text style={myStyle.textCheckbox}>
                        Remember me
                    </Text>
                    <Text style={myStyle.textforgotPass}>
                        Forgot the password ?
                    </Text>
                </View>
            </View>




            <TouchableOpacity style={myStyle.btnLogin}
                onPress={handleLogin}>
                <Text style={myStyle.btnLoginLabel}>Login</Text>
            </TouchableOpacity>




            <Text style={myStyle.texta}>
                or continue with
            </Text>
            <View style={myStyle.btns}>
                <Pressable style={myStyle.btnSocial}>
                    <Image style={myStyle.iconFB}
                        source={require('../image/fb.png')} />
                    <Text style={myStyle.fbLabel}>Facebook</Text>
                </Pressable>
                <Pressable style={myStyle.btnSocial}>
                    <Image source={require('../image/google.png')} />
                    <Text style={myStyle.ggLabel}>Google</Text>
                </Pressable>
            </View>
            <View style={myStyle.viewtextfooter}>
                <Text style={myStyle.textb}>
                    don't have an account ?
                </Text>
                <Text style={myStyle.textsignup}
                    onPress={() => navigation.navigate('Register')}>Sign Up</Text>
            </View>
        </View>
    )
}

export default Homechan

const myStyle = StyleSheet.create({
    viewtextfooter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textsignup: {
        fontWeight: 'bold',
        color: '#1877f2',

    },
    boxUser: {
        flexDirection: 'row'
    },
    usernote: {
        color: 'red'
    },
    iconFB: {
        width: 30,
        height: 30,
    },
    textb: {


    },
    texta: {
        marginTop: 10,
        left: 110,
    },
    textforgotPass: {
        left: 170,
        bottom: 28,
        color: '#5890FF'
    },
    textCheckbox: {
        left: 35,
        bottom: 10,
    },
    ggLabel: {
        marginLeft: 10,
    },
    fbLabel: {
        marginLeft: 10,

    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,

    },
    btnSocial: {
        width: '46%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        height: 48,
        backgroundColor: '#eef1f4',
        borderRadius: 6,
    },
    inputContainer: {
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        marginTop: 15,
    },
    btnLoginLabel: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#fff',
    },
    btnLogin: {
        marginTop: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 24,
        height: 50,
        width: '100%',
        backgroundColor: '#1877f2',
        borderRadius: 6,

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
    username: {
        marginTop: 5,
        color: '#4e4b66',
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.12,
    },
    welcome: {
        width: 222,
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 30,
        color: '#4e4b66',
        marginBottom: 48,
    },
    title: {
        lineHeight: 72,
        fontWeight: 'bold',
        fontSize: 48,
    },
    hello: {
        color: '#050505',
    },
    again: {
        color: '#1877f2',
        bottom: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 24
    }
})
