import React from 'react';
import { View, Animated, ScrollView } from 'react-native';

import styles from './Box.Style';
const { box, contentContainerStyle } = styles;

const Box = ({ style, children, animated, scroll, onPress }) => {
    if (!animated && !scroll) {
        return (
            <View onTouchEnd={onPress} style={[box, style]}>
                {children}
            </View>
        )
    }

    if (animated && !scroll) {
        return (
            <Animated.View onTouchEnd={onPress} style={[box, style]}>
                {children}
            </Animated.View>
        )
    }

    if (!animated && scroll) {
        return (
            <ScrollView onTouchEnd={onPress} style={[box, style, {paddingVertical: 0}]} contentContainerStyle={contentContainerStyle}>
                {children}
            </ScrollView>
        )
    }

    if (animated && scroll) {
        return (
            <Animated.ScrollView onTouchEnd={onPress} style={[box, style]} contentContainerStyle={contentContainerStyle}>
                {children}
            </Animated.ScrollView>
        )
    }
}

export default Box;