import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {s} from 'react-native-size-matters';
import React from 'react'

const SocialCircle = () => {
  return (
    <View style={styles.circle}>
    
    </View>
  )
}

export default SocialCircle

const styles = StyleSheet.create({
    circle :{
        height:s(46),
        width:s(46),
        borderRadius:s(40),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF',
        borderWidth:s(1),
        borderColor:'#E4E6E8'
    }
})