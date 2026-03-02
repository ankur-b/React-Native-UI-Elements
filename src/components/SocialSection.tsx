import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode,FC } from 'react'
import SendButton from './SendButton'
import SocialCircle from './SocialCircle'
import { vs,s } from "react-native-size-matters";

interface SocialSection{title:string,icon:ReactNode}

const SocialSection: FC<SocialSection> = ({title,icon}) => {
  return (
    <View style={styles.container}>
       <View style={styles.circle}>
          {icon}
          </View>
      <Text style={styles.text}>{title}</Text>
      <SendButton/>
    </View>
  )
}

export default SocialSection

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#E4E6E8',
        paddingVertical: vs(15)
    },
    text:{
        marginStart: s(14),
        flex:1,
        fontSize: s(12),
        color:'#8083A3'
    },
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