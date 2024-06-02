import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

type Color = 'dark' | 'light'

type CustomButtonProps = {
    title: string,
    iconName: string
    onPress: () => void
    color?: Color
    style?: object
}

const CustomButton = ({ title, iconName, onPress, color = 'light', style }: CustomButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, style, { backgroundColor: color === 'light' ? 'white' : '#33363d' }]} onPress={onPress}>
            {iconName && <FontAwesome6 name={iconName as any} size={24} color={color === 'light' ? 'black' : 'white'} />}
            <Text style={[styles.buttonText, { color: color === 'light' ? 'black' : 'white' }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderRadius: 5,


    },
    buttonText: {
        fontSize: 24,
        marginLeft: 10,
        fontWeight: 'medium',
    },
});