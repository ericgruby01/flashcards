import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Icon from '../Icon';

import styles from './Button.Style';
const { text_button } = styles;

const Button = ({ disabled, type, text, icon, onPress, style }) => {
    const btn_type = type ? `btn_${type}` : 'btn_default';
    return (
        <TouchableOpacity style={[styles[btn_type], style]} disabled={disabled} onPress={onPress ? onPress : () => false}>
            {text && <Text style={text_button}>{text.toUpperCase()}</Text>}
            {icon && <Icon style={{marginLeft: text ? 6 : 0}} name={icon} size={18} color='#ffffff' />}
        </TouchableOpacity>
    )
}

export default Button;