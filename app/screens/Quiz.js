/**
 * React & React Native
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';

/**
 * Redux Stuff
 */
import { connect } from 'react-redux';

/**
 * Helpers
 */
import { mapStateToProps } from '../utils/helpers'
import t from '../config/themeVariables'

/**
 * Components
 */
import Container from '../components/Container'
import Button from '../components/Button/Button'
import QuizCard from '../components/QuizCard/QuizCard'
import WhiteText from '../components/WhiteText'

/**
 * Quiz
 */
class Quiz extends Component {

    state = {
        correct: 0,
    }

    static navigationOptions = ({ navigation }) => {
        const headerTitle = navigation.getParam('cards') !== undefined ? (
            navigation.getParam('cards') == 0 ? 'No cards available 😓' : `Quiz Time! Card ${navigation.getParam('index') + 1}/${navigation.getParam('cards')}`
        ) : (
            'Loading...'
        )
        return ({
            headerTitle,
        })
    };

    onNextQuestion = answer => {
        const { cards, navigation, deck } = this.props;
        const id = navigation.getParam('id');
        const index = navigation.getParam('index');
        this.setState(prevState => ({
            correct: answer ? prevState.correct+1 : prevState.correct
        }), () => {
            if (index == cards.length-1) {
                this.props.navigation.navigate('QuizResult', {id, score: {correct: this.state.correct, cards: cards.length}, name: deck.name})
            } else {
                this.props.navigation.setParams({index: index + 1})
            }
        })
    }

    componentDidMount = () => this.props.navigation.setParams({cards: this.props.cards.length});

    componentDidUpdate = prevProps => {
        if (prevProps.cards.length !== this.props.cards.length) {
            this.props.navigation.setParams({cards: this.props.cards.length})
        }
        if (prevProps.navigation.getParam('reset') !== this.props.navigation.getParam('reset')) {
            this.props.navigation.setParams({reset: false})
            this.setState({correct: 0})
        }
    }

    render = () => {
        const { cards, navigation, deck } = this.props;
        const id = navigation.getParam('id');
        const index = navigation.getParam('index');

        const navigateAction = NavigationActions.navigate({
            routeName: 'SingleDeck',
            params: {id, name: deck.name},
            action: NavigationActions.navigate({ routeName: 'AddCard' }),
        });

        return (
            <Container>
                <WhiteText centered style={{fontSize: t.h1}}>{deck.name}</WhiteText>
                {cards.length > 0 && <WhiteText centered style={{marginBottom: t.space}}>Tap the card to check the answer</WhiteText>}
                {cards.length > 0 ? (
                    <QuizCard question={cards[index].question} answer={cards[index].answer} onNextQuestion={this.onNextQuestion} />
                ) : (
                    <View>
                        <WhiteText centered style={{fontSize: t.h2, margin: t.space}}>You need to add cards to this deck before start a quiz.</WhiteText>
                        <Button onPress={() => this.props.navigation.dispatch(navigateAction)} text='Add Cards' icon='plus-circle' type='complementary' />
                    </View>
                )}
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Quiz);