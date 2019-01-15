import React from 'react';
import { View, StyleSheet } from 'react-native';

import { levels } from '../../utils/helpers';

import ScaleIn from '../Animations/ScaleIn';

import Box from '../Box/Box';
import Badge from '../Badge/Badge'
import Button from '../Button/Button';
import WhiteText from '../WhiteText';

import t from '../../config/themeVariables'

const Deck = ({ deck, onView, index }) => (
    <ScaleIn index={index} style={{flex: 1, maxWidth: '50%'}}>
        <Box onPress={onView} style={[styleBox.box, {
            marginLeft: index&1 ? t.space/2 : 0,
            marginRight: index&1 ? 0 : t.space/2
        }]}>
            {/* Level */}
            <Badge text={levels[(deck.level || 1)]} alignSelf='center' />
            
            {/* Title & Card Count */}
            <View>
                <WhiteText size='h3' numberOfLines={2} centered>{deck.name}</WhiteText>
                <WhiteText size='h5' centered>{deck.cards} cards</WhiteText>
            </View>

            {/* Button */}
            <Button type='complementary' icon='eye' onPress={onView} text='View' />
        </Box>
    </ScaleIn>
)

const styleBox = StyleSheet.create({
    box: {
        height: 250,
        justifyContent: 'space-between',
        marginBottom: t.space
    }
})

export default Deck;