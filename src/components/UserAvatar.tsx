import { StyleSheet,Text,Image,View } from "react-native";
import React from "react";
import {s} from 'react-native-size-matters';

const UserAvatar = () =>{
    return(
        <Image
            source={{uri:'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg'}}
            style={styles.avatar}
        />
    )
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar:{
        height:s(32),
        width:s(32),
        borderRadius: s(16),
    }
})