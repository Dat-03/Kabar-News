import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Explore = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textheader}>Explore</Text>
            <View style={styles.viewtextheader}>
                <Text style={styles.texttopic}>Topic</Text>
                <Text style={styles.textseeall}>See all</Text>
            </View>
            <View style={styles.viewheader}>
                <Image style={{ borderRadius: 5, }}
                    source={require('../image/explore1.png')} />
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000' }}>Health</Text>
                    <Text style={{ fontSize: 14 }}>Get energizing workout moves, healthy recipes...</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnLogin}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#fff' }}>Login</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    viewheader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    texttopic: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 16,
    },
    btnLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 90,
        backgroundColor: '#1877f2',
        borderRadius: 6,
    },
    textseeall: {
        fontSize: 16,
    },
    viewtextheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        padding: 24,
    },
    textheader: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 32,
        lineHeight: 48,
        fontFamily: 'Poppins',
    },
})