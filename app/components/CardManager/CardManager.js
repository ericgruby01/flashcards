import React from 'react';
import { View, StyleSheet } from 'react-native';

import ScaleIn from '../Animations/ScaleIn'
import Box from '../Box/Box'
import Button from '../Button/Button'
import WhiteText from '../WhiteText'

import t from '../../config/themeVariables'

const CardManager = ({ question, answer, onDelete }) => {
    return (
        <ScaleIn>
            <Box style={cardManagerbox.box}>
                <View style={{flexShrink: 1, marginRight: t.space/2}}>
                    <WhiteText size='h5'>Q:</WhiteText>
                    <WhiteText>{question}</WhiteText>
                    <WhiteText size='h5' style={{marginTop: t.space/2}}>A:</WhiteText>
                    <WhiteText>{answer}</WhiteText>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <Button type='primary' icon='trash' onPress={onDelete} />
                </View>
            </Box>
        </ScaleIn>
    )
}

const cardManagerbox = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: t.space
    }
})

export default CardManager;