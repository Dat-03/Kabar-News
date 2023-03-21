import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Hihi = (prop) => {
    const {name , age} = prop;
    const [tuoi , setTuoi] = useState(10)
    return (
    <View>
      <Text>{name} {tuoi}</Text>
      <Button onPress={()=>setTuoi(100)} title="Đổi tuổi"></Button> 
    </View>
  )
}
export default Hihi