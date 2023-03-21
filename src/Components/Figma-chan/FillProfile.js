import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const FillProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Image source={require('../image/back.png')} />
                <Text style={styles.TextProfile}>Fill your Profile</Text>
            </View>
            <View style={styles.imgProfileView}>
                <Image style={styles.imgProfile} source={require('../image/avata.png')}></Image>
                <Image style={styles.icCamera} source={require('../image/camera.png')}></Image>

            </View>
            <Text style={styles.tagText}>Username</Text>
            <TextInput style={styles.textInput}></TextInput>
            <Text style={styles.tagText}>Full Name</Text>
            <TextInput style={styles.textInput}></TextInput>
            <Text style={styles.tagText}>Email Address*</Text>
            <TextInput style={styles.textInput}></TextInput>
            <Text style={styles.tagText}>Phone Number*</Text>
            <TextInput style={styles.textInput}></TextInput>
            <TouchableOpacity style={styles.btnNext}>
                <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default FillProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginStart: 25,
        marginEnd: 25,
    },
    headerView: {
        flexDirection: 'row',
        marginTop: 34,
    },
    TextProfile: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        color: '#000000',
        marginStart: 90,
        marginBottom: 4
    },
    imgProfileView: {
        width: 140,
        height: 140,
        marginTop: 16,
        marginStart: 90,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imgProfile: {
        width: 140,
        height: 140,
        borderRadius: 99
    },
    tagText: {
        marginTop: 16,
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '600',
        color: '#4E4B66',
    },
    textInput: {
        height: 48,
        borderRadius: 6,
        borderWidth: 1,
        marginTop: 4,
        padding: 10,
    },
    btnNext: {
        marginTop: 100,
        height: 48,
        backgroundColor: '#1877F2',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextText: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '700',
    },
    ViewicCamera: {
        borderRadius: 10,
        backgroundColor: 'blue',
        left: 30,
        width: 17,
        height: 17,
    },
    icCamera: {
        position: 'absolute',
        right: 5,
        bottom: 4
    }
});