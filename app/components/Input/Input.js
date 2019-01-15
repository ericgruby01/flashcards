import React from 'react';
import { TextInput } from 'react-native';

import t from '../../config/themeVariables'
import styles from './Input.Styles'

const Input = props => <TextInput selectionColor={t.complementary} {...props} style={[styles, props.style]} />

export default Input;