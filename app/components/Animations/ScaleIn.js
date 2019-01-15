import React, { Component } from 'react';
import { Animated } from 'react-native';

class ScaleIn extends Component {
    animatedValue = new Animated.Value(0)

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 600,
            delay: this.props.index ? this.props.index * 100 : 0,
            useNativeDriver: true
        }).start();
    }

    render = () => {

        const scale = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1]
        });

        return (
            <Animated.View style={{ transform: [{scale}], opacity: this.animatedValue, ...this.props.style }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default ScaleIn;