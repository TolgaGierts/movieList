import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    visible: boolean
}

type State = {
    pending: boolean,
    visible: boolean,
    hataMsg: string
}

const Loader = ({ visible }: Props) => {
    return (
        <View style={styles.container}>
            {visible && <ActivityIndicator size="large" color={'#fff'} />}
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})