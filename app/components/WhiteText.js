import React from 'react';
import { Animated } from 'react-native';

import t from '../config/themeVariables';

const WhiteText = props => {
    const textStyles = {
        color: t.white,
        textAlign: props.centered ? 'center' : 'left',
        fontSize: props.size ? t[props.size] : t.fontSize
    };
    return (
        <Animated.Text {...props} style={[textStyles, props.style]}>{props.children}</Animated.Text>
    )
}

export default WhiteText;