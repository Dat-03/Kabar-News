import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const DetailSreen = (navigation) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.viewicheader}>
                <Image source={require('../image/back.png')} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../image/share.png')} />
                    <Image style={{ marginStart: 20, }}
                        source={require('../image/bachamdoc.png')} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <View style={styles.viewlistnew1}>
                    <View>
                        <Image style={{ width: 50, height: 50 }}
                            source={require('../image/icBBCnew.png')} />
                    </View>
                    <View style={styles.viewlistnew2}>
                        <Text style={{ fontWeight: 'bold', color: '#000000' }}>BBC News</Text>
                        <Text>4h ago</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#fff' }}>Login</Text>
                </TouchableOpacity>
            </View>
            <Image style={{ width: 345, height: 200, marginTop: 20, borderRadius: 10 }}
                source={require('../image/thuyen.png')} />
            <Text style={{ fontSize: 14, }}>Europe</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000000' }}>Ukraine's President Zelensky to BBC: Blood money being paid for Russian oil</Text>
            <Text style={{ fontSize: 16 }}>Ukrainian President Volodymyr Zelensky has accused European countries that continue to buy Russian oil of "earning their money in other people's blood".</Text>
            <Text style={{ fontSize: 16 }}>In an interview with the BBC, President Zelensky singled out Germany and Hungary, accusing them of blocking efforts to embargo energy sales, from which Russia stands to make up to £250bn ($326bn) this year.
                There has been a growing frustration among Ukraine's leadership with Berlin, which has backed some sanctions against Russia but so far resisted calls to back tougher action on oil sales.</Text>
        </View>
    )
}

export default DetailSreen

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    viewicheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    viewlistnew1: {
        flexDirection: 'row',
    },
    viewlistnew2: {
        flexDirection: 'column',
        marginStart: 10,
        alignItems: 'center'
    },
    btnLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 150,
        backgroundColor: '#1877f2',
        borderRadius: 6,

    },
})
