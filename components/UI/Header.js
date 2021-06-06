import React from 'react';
import {Text, View,  StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width : '100%',
        height : 90,
        paddingTop : 10,
        backgroundColor : '#f7287b',
        alignItems : 'center',
        justifyContent : 'center'
    },
    title : {
        color : 'black',
        fontSize : 18
    }
})


export default Header