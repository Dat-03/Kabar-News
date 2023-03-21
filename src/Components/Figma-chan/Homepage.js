import { StyleSheet, Text, Image, Pressable, View, TextInput } from 'react-native'
import React from 'react'

const Homepage = (navigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewicheader}>
                <Image style={styles.iclogo}
                    source={require('../image/logo.png')}></Image>
                <Image style={styles.icchuong}
                    source={require('../image/ringring.png')}></Image>
            </View>
            <View style={styles.viewtextinput}>
                <Image style={styles.icsapxep}
                    source={require('../image/search.png')}></Image>
                <TextInput style={{ flex: 1 }}
                    placeholder='Search'>
                </TextInput>
                <Image style={styles.icsearch}
                    source={require('../image/sapxep.png')}></Image>
            </View>
            <View style={styles.viewtexta}>
                <Text style={styles.texta}>Trending</Text>
                <Text style={styles.textb}>See all</Text>
            </View>
            <Image style={styles.imgbanner}
                source={require('../image/thuyen.png')}></Image>
            <View>
                <Text style={styles.textaaa}>Europe</Text>
                <Text style={styles.textbbb}>Russian warship: Moskva sinks in Black Sea</Text>
                <View style={styles.footercontent}>
                    <View style={styles.viewlistnew1}>
                        <Image style={styles.iclistview}
                            source={require('../image/iclistnew.png')}></Image>
                        <Text style={styles.textNewb}>BBC News</Text>
                    </View>
                    <View style={styles.viewlistnew2}>
                        <Image style={styles.iclistview}
                            source={require('../image/clocknew.png')}></Image>
                        <Text style={styles.texttime}>4h ago</Text>
                    </View>
                </View>
                <View style={styles.viewtextab}>
                    <Text style={styles.textlates}>Latest</Text>
                    <Text style={styles.textseeall}>See all</Text>
                </View>
            </View>
            <View style={styles.viewmenu}>
                <Pressable style={styles.presstext}>
                    <Text style={styles.textmenu}>All</Text>
                </Pressable>
                <Text>Sport</Text>
                <Text>Politics</Text>
                <Text>Bussiness</Text>
                <Text>Health</Text>
                <Text>Travel</Text>
            </View>
            <Pressable style={styles.pressimg}>
                <Image style={styles.imglistview}
                    source={require('../image/listnew1.png')}></Image>
                <View style={styles.viewcontent}>
                    <Text style={styles.textNewa}>Europe</Text>
                    <Text style={styles.textNewb2}>Ukraine's President Zelensky to BBC: Blood money being paid...</Text>
                    <View style={styles.viewheaderlistnew}>
                        <View style={styles.footercontent}>
                            <View style={styles.viewlistnew1}>
                                <Image style={styles.iclistview}
                                    source={require('../image/iclistnew.png')}></Image>
                                <Text style={styles.textNewb}>BBC News</Text>
                            </View>
                            <View style={styles.viewlistnew2}>
                                <Image style={styles.iclistview}
                                    source={require('../image/clocknew.png')}></Image>
                                <Text style={styles.texttime}>14m ago</Text>
                            </View>

                        </View>
                        <Image style={styles.icbacham}
                            source={require('../image/daubacham.png')}></Image>
                    </View>
                </View>
            </Pressable>
            
            
            {/* <View style={styles.viewfootet}>
                <View style={styles.viewhome}>
                    <Pressable style={styles.presshome}>
                        <Image style={styles.ichome}
                            source={require('../image/home.png')}></Image>
                        <Text style={styles.textfooter}>Home</Text>
                    </Pressable>
                    <Pressable style={styles.presshome}>
                        <Image style={styles.ichome}
                            source={require('../image/explore.png')}></Image>
                        <Text style={styles.textfooter}>Explore</Text>
                    </Pressable>
                    <Pressable style={styles.presshome}>
                        <Image style={styles.ichome}
                            source={require('../image/bookmark.png')}></Image>
                        <Text style={styles.textfooter}>Bookmark</Text>
                    </Pressable>
                    <Pressable style={styles.presshome}>
                        <Image style={styles.ichome}
                            source={require('../image/profile.png')}></Image>
                        <Text style={styles.textfooter}>Profile</Text>
                    </Pressable>
                </View>
            </View> */}
        </View>

    )
}

export default Homepage

const styles = StyleSheet.create({
    textfooter: {
        marginTop: 5,
    },
    ichome: {
        marginStart: 8,
        marginTop: 8,
        width: 20,
        height: 20
    },
    viewhome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    viewfootet: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 1,
        width: 320,
        height: 70,
        marginTop: 45,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    viewheaderlistnew: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textNewa: {
        width: 46,
        height: 20,
        fontFamily: 'Poppins',
        fontWeight: '400',
    },
    textNewb2: {
        fontWeight: 'bold',
        color: '#000000',
    },
    viewcontent: {
        justifyContent: 'space-between',
        marginStart: 10,
    },
    pressimg: {
        marginTop: 10,
        width: 240,
        flexDirection: 'row',

    },
    viewtextab: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5,

    },
    presstext: {
        borderBottomWidth: 2,
        borderColor: '#1877f2'
    },
    textmenu: {
        fontSize: 16,
        fontFamily: 'Poppins',
        letterSpacing: 0.12,
        fontWeight: 'bold',
        color: '#000000',
    },
    viewmenu: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    textseeall: {
        width: 47,
        height: 21,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66',
    },
    textlates: {
        fontWeight: 'bold',
        color: '#000000',
        width: 50,
        height: 24,
        fontFamily: 'Poppins',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },

    textaaa: {
        marginTop: 5,
    },
    viewlistnew1: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    texttime: {
        marginStart: 5,
    },
    footercontent: {
        flexDirection: 'row',
        marginTop: 5,
    },
    viewlistnew2: {
        flexDirection: 'row',
        marginStart: 10,
    },
    textNewb: {
        fontWeight: 'bold',
        color: '#000000',
        marginStart: 5,
    },
    iclistview: {
        width: 20,
        height: 20,
    },
    textccc: {
        fontWeight: 'bold',
        color: '#000000',
    },
    textbbb: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 15,
        marginTop: 5,
    },
    imgbanner: {
        width: 320,
        height: 160,
        marginTop: 10,
        borderRadius: 10,
    },
    container: {
        marginStart: 24,
        marginEnd: 24,
    },
    viewtexta: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    texta: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#000000',
    },
    textb: {
        marginTop: 10,
    },
    viewtextinput: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 6,
        width: 320,
        height: 55,
        marginTop: 20,

        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    textSearch: {
        position: 'absolute',

        marginTop: 18,
    },
    viewicheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,

    },
    iclogo: {
        width: 130,
        height: 40,

    },
    icchuong: {
        width: 50,
        height: 50,
    },
    textInput: {
        padding: 10,
        height: 48,
        width: 347,
        backgroundColor: '#fff',
        borderColor: '#4e4b66',
        borderRadius: 6,
        borderWidth: 1,
        marginTop: 4,

    },
})