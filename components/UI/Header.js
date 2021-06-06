import React from 'react';
import {Text, View,  StyleSheet } from 'react-native';
import colors from '../../theme/colors'

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
        backgroundColor : colors.primary,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title : {
        color : 'black',
        fontSize : 18
    }
})


export default Header