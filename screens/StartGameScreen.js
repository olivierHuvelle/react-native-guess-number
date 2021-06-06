import React from 'react'
import {View, Text , Button, StyleSheet} from 'react-native'

import Card from '../components/UI/Card'
import Input from '../components/UI/Input'
import colors from '../theme/colors'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>

            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input
                    keyboardType="number-pad"
                    maxLength={2}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <Button title="reset" onPress={() => {}} color={colors.emphase} />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button title="confirm" onPress={() => {}} color={colors.primary} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : 'center',
    },
    title : {
        fontSize : 20,
        marginVertical : 10,
    },
    inputContainer : {
        width : 300,
        maxWidth : '80%',
        alignItems: 'center',
        padding : 10,
    },
    input : {
        width : 50,
        textAlign : 'center',
    },
    buttonContainer : {
        flexDirection : 'row',
        width : '100%',
        justifyContent : 'space-between',
        paddingHorizontal : 15
    },
    buttonWrapper : {
        width : 100
    }
})

export default StartGameScreen