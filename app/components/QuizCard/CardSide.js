/**
 * React & React Native
 */
import React from 'react';

/**
 * Components
 */
import Box from '../Box/Box'
import WhiteText from '../WhiteText'

import t from '../../config/themeVariables'
import s from './QuizCard.Styles'

const CardSide = ({ title, text, rotateY, opacity, onPress, style }) => (
    <Box onPress={onPress} animated scroll style={[s.card, style, {transform: [{rotateY}], marginBottom: t.space}]}>
        <WhiteText size='h3' centered style={{opacity, marginBottom: t.space/2}}>{title}</WhiteText>
        <WhiteText size='h5' centered style={{opacity}}>{text}</WhiteText>
    </Box>
)

export default CardSide;