import { StyleSheet, Image, Text, View, Pressable } from 'react-native'
import React from 'react'

const Flatlist = (navigation) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.viewicheader}>
                <Image style={styles.iclogo}
                    source={require('../image/logo.png')}></Image>
                <Image style={styles.icchuong}
                    source={require('../image/ringring.png')}></Image>
            </View>
            <View style={styles.viewtextab}>
                <Text style={styles.texta}>Latest</Text>
                <Text style={styles.textb}>See all</Text>
            </View>
            <View style={styles.viewmenu}>
                <Pressable style={styles.presstext}>
                    <Text style={styles.textmenu}>All</Text>
                </Pressable>
                <Text >Sport</Text>
                <Text >Politics</Text>
                <Text >Bussiness</Text>
                <Text >Health</Text>
                <Text >Travel</Text>
            </View>
            <View>
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
                <View>
                    <Pressable style={styles.pressimg}>
                        <Image style={styles.imglistview}
                            source={require('../image/listnew2.png')}></Image>
                        <View style={styles.viewcontent}>
                            <Text style={styles.textNewa}>Travel</Text>
                            <Text style={styles.textNewb2}>Her train broke down. Her phone died. And then she met her..</Text>
                            <View style={styles.viewheaderlistnew}>
                                <View style={styles.footercontent}>
                                    <View style={styles.viewlistnew1}>
                                        <Image style={styles.iclistview}
                                            source={require('../image/iclistnew.png')}></Image>
                                        <Text style={styles.textNewb}>CNN</Text>
                                    </View>
                                    <View style={styles.viewlistnew2}>
                                        <Image style={styles.iclistview}
                                            source={require('../image/clocknew.png')}></Image>
                                        <Text style={styles.texttime}>1h ago</Text>
                                    </View>
                                </View>
                                <Image style={styles.icbacham}
                                    source={require('../image/daubacham.png')}></Image>
                            </View>
                        </View>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={styles.pressimg}>
                        <Image style={styles.imglistview}
                            source={require('../image/listnew3.png')}></Image>
                        <View style={styles.viewcontent}>
                            <Text style={styles.textNewa}>Europe</Text>
                            <Text style={styles.textNewb2}>Russian warship: Moskva sinks in Black Sea</Text>
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
                                        <Text style={styles.texttime}>4h ago</Text>
                                    </View>
                                </View>
                                <Image style={styles.icbacham}
                                    source={require('../image/daubacham.png')}></Image>
                            </View>
                        </View>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={styles.pressimg}>
                        <Image style={styles.imglistview}
                            source={require('../image/listnew4.png')}></Image>
                        <View style={styles.viewcontent}>
                            <Text style={styles.textNewa}>Money</Text>
                            <Text style={styles.textNewb2}>Wind power produced more electricity than coal and nucle...</Text>
                            <View style={styles.viewheaderlistnew}>
                                <View style={styles.footercontent}>
                                    <View style={styles.viewlistnew1}>
                                        <Image style={styles.iclistview}
                                            source={require('../image/iclistnew2.png')}></Image>
                                        <Text style={styles.textNewb}>USA Today</Text>
                                    </View>
                                    <View style={styles.viewlistnew2}>
                                        <Image style={styles.iclistview}
                                            source={require('../image/clocknew.png')}></Image>
                                        <Text style={styles.texttime}>4h ago</Text>
                                    </View>
                                </View>
                                <Image style={styles.icbacham}
                                    source={require('../image/daubacham.png')}></Image>
                            </View>
                        </View>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={styles.pressimg}>
                        <Image
                            source={require('../image/listnew5.png')}></Image>
                        <View style={styles.viewcontent}>
                            <Text style={styles.textNewa}>Life</Text>
                            <Text style={styles.textNewb2}>'We keep rising to new challenges:' For churches hit by</Text>
                            <View style={styles.viewheaderlistnew}>
                                <View style={styles.footercontent}>
                                    <View style={styles.viewlistnew1}>
                                        <Image style={styles.iclistview}
                                            source={require('../image/iclistnew2.png')}></Image>
                                        <Text style={styles.textNewb}>USA Today</Text>
                                    </View>
                                    <View style={styles.viewlistnew2}>
                                        <Image style={styles.iclistview}
                                            source={require('../image/clocknew.png')}></Image>
                                        <Text style={styles.texttime}>4h ago</Text>
                                    </View>
                                </View>
                                <Image
                                    source={require('../image/daubacham.png')}></Image>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={styles.viewfootet}>
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
            </View>
        </View>
    )
}

export default Flatlist

const styles = StyleSheet.create({
    texttime: {
        marginStart: 5,
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
        width: 350,
        height: 50,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    footercontent: {
        flexDirection: 'row',
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
    textNewb: {
        fontWeight: 'bold',
        color: '#000000',
        marginStart: 5,
    },
    viewcontent: {
        justifyContent: 'space-between',
        marginStart: 10,
    },
    iclistview: {
        width: 20,
        height: 20,
    },
    viewlistnew1: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    viewlistnew2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: 10,
    },
    viewheaderlistnew: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pressimg: {
        marginTop: 10,
        width: 250,
        flexDirection: 'row',

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
        marginTop: 5,
    },
    viewtextab: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5,

    },
    textb: {
        width: 47,
        height: 21,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66',
    },
    texta: {
        fontWeight: 'bold',
        color: '#000000',
        width: 50,
        height: 24,
        fontFamily: 'Poppins',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    container: {
        marginStart: 24,
        marginEnd: 24,
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
})