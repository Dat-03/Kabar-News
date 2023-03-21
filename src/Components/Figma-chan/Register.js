import { Pressable, StyleSheet, Text, TextInput, View, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from '@react-navigation/native';
import  AxiosInstance  from './AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from './AppContext';



const Register = (props) => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const { navigation } = props;
    const handleLogin = async () => {

        console.log(username, password);
        try {
            const response = await AxiosInstance()
            .post('/users/register', 
            {
                email: username,
                password: password
            });
            console.log(response);
            if (response.error == false) {
                const { token } = response.data;
                await AsyncStorage.setItem('token', token);
                ToastAndroid.show('Đăng kí thành công ', ToastAndroid.SHORT);
                setisLogin(true);
            }
            else{
                console.log("Register: error")
            }

            // console.log("abc " + response + "mmm " + token);

        } catch (error) {
            console.log("hihi " + error);

        }
        return false;
    }

    return (

        <View style={myStyle.container}>
            <Text style={[myStyle.hello, myStyle.title]}>Hello!</Text>
            <Text style={myStyle.welcome}>Signup to get Started</Text>
            <View style={[myStyle.boxUser, { marginTop: 10 }]}>
                <Text style={myStyle.username}>Username</Text>
                <Text style={myStyle.usernote}>*</Text>

            </View>

            <TextInput 
            onChangeText={setusername}
            
            style={myStyle.textInput} />
            <View style={[myStyle.boxUser, { marginTop: 10 }]}>
                <Text style={myStyle.username}>Password</Text>
                <Text style={myStyle.usernote}>*</Text>
            </View>

            <View style={myStyle.inputContainer}>
                <TextInput 
                
                onChangeText={setpassword}
                style={myStyle.textInput}
                    secureTextEntry />
                <Image
                    source={require('../image/eye.png')}
                    style={myStyle.eyeIcon}
                />
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
                </View>
            </View>




            <TouchableOpacity style={myStyle.btnLogin}>
                <Text 
                onPress={handleLogin}
                style={myStyle.btnLoginLabel}
                >Login</Text>
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
                    onPress={() => navigation.navigate('Homechan')}>
                    Login
                </Text>
            </View>

        </View>
    )
}

const myStyle = StyleSheet.create({
    viewtextfooter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textsignup: {
        fontWeight: 'bold',
        color: '#1877f2',
        marginStart: 10,
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
        color: '#1877f2',
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

export default Register