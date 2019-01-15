/**
 * React & React Native
 */
import React, { Component, Fragment } from 'react';
import { Animated, View, Easing } from 'react-native';

/**
 * Components
 */
import Box from '../Box/Box'
import Button from '../Button/Button'
import WhiteText from '../WhiteText'
import CardSide from './CardSide'

import t from '../../config/themeVariables'

import s from './QuizCard.Styles'

class QuizCard extends Component {
    _mounted = true;

    state = {
        front: true
    }
    
    rotateValue = new Animated.Value(0);
    rotateValue = new Animated.Value(0);
    opacityValue = new Animated.Value(0);

    frontOpacity = this.opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
    })

    backOpacity = this.opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    frontFlip = this.rotateValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
    })

    backFlip = this.rotateValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    })

    flip = () => {
        this.setState({front: !this.state.front}, () => {
            Animated.parallel([
                Animated.timing(this.rotateValue, {
                    toValue: this.state.front ? 0 : 180,
                    duration: 600,
                    easing: Easing.out(Easing.poly(5)),
                    useNativeDriver: true
                }),
                Animated.timing(this.opacityValue, {
                    toValue: this.state.front ? 0 : 1,
                    duration: 600,
                    easing: Easing.out(Easing.poly(5)),
                    useNativeDriver: true
                })
            ]).start();
        });
    }

    onNextQuestion = answer => {
        const { onNextQuestion } = this.props;
        this.flip();
        onNextQuestion(answer)
    }

    render = () => {
        const { question, answer } = this.props;
        const { front } = this.state;

        return (
            <Fragment>
                {front ? (
                    <CardSide onPress={this.flip} title='Question:' text={question} rotateY={this.frontFlip} opacity={this.frontOpacity} />
                ) : (
                    <CardSide onPress={this.flip} title='Answer:' text={answer} rotateY={this.backFlip} opacity={this.backOpacity} />
                )}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch'}}>
                    <Button onPress={() => this.onNextQuestion(false)} style={{opacity: front ? 0 : 1}} disabled={front} text='Missed it' icon='thumbs-down' type='danger' />
                    <Button onPress={() => this.onNextQuestion(true)} style={{opacity: front ? 0 : 1}} disabled={front} text='Nailed it' icon='thumbs-up' type='success' />
                </View>
            </Fragment>
        )
    }
}

export default QuizCard;