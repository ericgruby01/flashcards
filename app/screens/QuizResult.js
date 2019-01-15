import React, { Component } from 'react';
import { View } from 'react-native';

import Container from '../components/Container'
import Button from '../components/Button/Button'
import Box from '../components/Box/Box'
import WhiteText from '../components/WhiteText'

import { clearNotification, setLocalNotification } from '../utils/helpers'
import t from '../config/themeVariables'

class QuizResult extends Component {
    componentDidMount() {
        clearNotification().then(setLocalNotification)
    }
    render = () => {
        const id = this.props.navigation.getParam('id');
        const score = this.props.navigation.getParam('score');
        const name = this.props.navigation.getParam('name');
        const percentage = ((score.correct/score.cards)*100).toFixed();

        const messageIndex = Math.floor(Math.random() * 3);
        let feedback = {};

        if (percentage < 50) {
            feedback = {
                emoji: '😞',
                message: lessThenFifty[messageIndex]
            }
        }  
        if (percentage >= 50 && percentage < 70) {
            feedback = {
                emoji: '🙂',
                message: fiftyToSeventy[messageIndex]
            }
        }  
        if (percentage >= 70) {
            feedback = {
                emoji: '😎',
                message: SeventyToHundred[messageIndex]
            }
        }  

        return (
            <Container>
                <Box style={{flex: 1, justifyContent: 'space-between', marginTop: t.space}}>
                    <View>
                        <WhiteText size='h1' centered>Quiz Result</WhiteText>
                        <WhiteText size='h4' centered>{name}</WhiteText>
                    </View>

                    <View>
                        <WhiteText centered style={{fontSize: t.scoreText}}>{percentage}%</WhiteText>
                        <WhiteText centered style={{fontSize: t.h3}}>{feedback.message} {feedback.emoji}</WhiteText>
                        <WhiteText centered style={{fontSize: t.h4}}>You got {score.correct}/{score.cards}</WhiteText>
                    </View>

                    <View>
                        <Button style={{marginBottom: t.space/2}} type='complementary2' onPress={() => this.props.navigation.navigate('Quiz', {id, index: 0, reset: true})} text='Restart Quiz' icon='repeat' />
                        <Button type='complementary' onPress={() => this.props.navigation.navigate('SingleDeck', {id, name})} text='Back to Deck' icon='layers' />
                    </View>
                </Box>
            </Container>
        )
    }
}

const lessThenFifty = [
    'You can do better',
    'I know you\'re smarter than this',
    'Thats not even half of the quiz'
]

const fiftyToSeventy = [
    'That\s an OK score',
    'Nice score, but... Can you improve it?',
    'At least you\'ve passed half of the quiz'
]

const SeventyToHundred = [
    'Are you a wizard?',
    'Good one!',
    'That\'s awesome'
]

export default QuizResult;