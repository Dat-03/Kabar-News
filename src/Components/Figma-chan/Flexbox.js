import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flexbox = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
            </View>

            <View style={styles.view3}></View>
        </View>


    )
}

export default Flexbox

const styles = StyleSheet.create({
    view1: {
        width: 50, height: 50, backgroundColor: 'blue',
    },
    view2: { width: 50, height: 50, backgroundColor: 'violet', },
    view3: { width: 50, height: 50, backgroundColor: 'yellow', },
    view4: { width: 50, height: 50, backgroundColor: 'orange', },
    container: {
        flex: 1,
        backgroundColor: 'white',
        // flexDirection: 'column', //mặc định là column
        flexDirection: 'row',
        justifyContent: 'center',
        // justifyContent:'flex-start', //đầu hoặc mặc định 
        // justifyContent:'flex-end',// Cuối
        // justifyContent: 'space-between', // cách nhau đều
        // justifyContent:'space-around', // Cách nhau đều , nhưng 2 đầu cách 1 nữa khoảng cách 
        // justifyContent: 'space-evenly',// cách nhau đều 
        // alignItems: 'center',




    }

})  