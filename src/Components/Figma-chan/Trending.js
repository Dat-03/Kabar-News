import { StyleSheet, Text, Image, View, Pressable } from 'react-native'
import React from 'react'

const Trending = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewheader}>
                <Image source={require('../image/back.png')} />
                <Text style={styles.textTrending}>Trending</Text>
                <Image source={require('../image/bachamdoc.png')} />
            </View>
            <Image style={styles.imgthuyen}
                source={require('../image/thuyen.png')} />
            <View>
                <Text style={styles.textaaa}>Europe</Text>
                <Text style={styles.textbbb}>Russian warship: Moskva sinks in Black Sea</Text>
                <View style={styles.viewcontent}>
                    <View style={styles.viewicon1}>
                        <Image style={styles.iclistview}
                            source={require('../image/iclistnew.png')}></Image>
                        <Text style={styles.textnew}>BBC News</Text>
                    </View>
                    <View style={styles.viewicon2}>
                        <Image style={styles.iclistview}
                            source={require('../image/clocknew.png')}></Image>
                        <Text style={styles.texttime}>4h ago</Text>
                    </View>
                    <Image style={styles.icbacham}
                        source={require('../image/daubacham.png')}></Image>
                </View>
            </View>
            <Image style={styles.imgthuyen}
                source={require('../image/banner2.png')} />
            <View>
                <Text style={styles.textaaa}>Europe</Text>
                <Text style={styles.textbbb}>Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil</Text>
                <View style={styles.viewcontent}>
                    <View style={styles.viewicon1}>
                        <Image style={styles.iclistview}
                            source={require('../image/iclistnew.png')}></Image>
                        <Text style={styles.textnew}>BBC News</Text>
                    </View>
                    <View style={styles.viewicon2}>
                        <Image style={styles.iclistview}
                            source={require('../image/clocknew.png')}></Image>
                        <Text style={styles.texttime}>14m ago</Text>
                    </View>
                    <Image style={styles.icbacham}
                        source={require('../image/daubacham.png')}></Image>
                </View>
                <View style={styles.viewfootet}>
                    <View style={styles.viewhome}>
                        <Pressable style={styles.presshome}>
                            <Image style={styles.ichome}
                                source={require('../image/home.png')}></Image>
                            <Text style={styles.textfooter}>Home</Text>
                        </Pressable>
                        <Pressable style={styles.presshome}>
                            <Image style={styles.icexplore}
                                source={require('../image/explore.png')}></Image>
                            <Text style={styles.textfooter}>Explore</Text>
                        </Pressable>
                        <Pressable style={styles.presshome}>
                            <Image style={styles.icbookmark}
                                source={require('../image/bookmark.png')}></Image>
                            <Text style={styles.textbookmark}>Bookmark</Text>
                        </Pressable>
                        <Pressable style={styles.presshome}>
                            <Image style={styles.icprofile}
                                source={require('../image/profile.png')}></Image>
                            <Text style={styles.textfooter}>Profile</Text>
                        </Pressable>
                    </View>

                </View>
            </View>


        </View>
    )
}

export default Trending

const styles = StyleSheet.create({
    viewfootet: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        width: 350,
        height: 70,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    icbookmark: {
        marginStart: 20,
        marginTop: 8,
        width: 25,
        height: 30,

    },
    textbookmark: {
        marginTop: 2,
        fontWeight: 'bold',
        color: '#000000',
    },
    icexplore: {
        marginStart: 13,
        marginTop: 8,
        width: 25,
        height: 25,
    },
    icprofile: {
        marginStart: 10,
        marginTop: 8,
        width: 25,
        height: 25,
    },
    textfooter: {
        marginTop: 5,
        fontWeight: 'bold',
        color: '#000000',
    },
    ichome: {
        marginStart: 8,
        marginTop: 8,
        width: 25,
        height: 25,
    },
    viewhome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    icbacham: {
        marginStart: 165,
    },
    iclistview: {
        width: 20,
        height: 20,
    },
    textnew: {
        marginStart: 5,
        fontWeight: 'bold',
        color: '#000000',
    },
    texttime: {
        marginStart: 5,
    },
    viewicon2: {
        flexDirection: 'row',
        marginStart: 10,
    },
    viewicon1: {
        flexDirection: 'row',
    },
    viewcontent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,

    },
    textaaa: {
        width: 46,
        height: 20,
        marginTop: 5,
    },
    textbbb: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 17,
    },
    imgthuyen: {
        width: 345,
        height: 200,
        marginTop: 10,
    },

    textTrending: {
        fontWeight: 'bold',
        color: '#000000',
        width: 74,
        height: 24,
        fontSize: 16,
        fontFamily: 'Poppins',
        lineHeight: 24,
    },
    viewheader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    container: {
        marginStart: 24,
        marginEnd: 24,
    },
})