/**
 * React
 */
import React, { Component } from 'react';
import { FlatList } from 'react-native';

/**
 * Redux Stuff
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Actions
 */
import { actions as cardActions } from '../store/actions/card';
const { addCard, editCard } = cardActions;

/**
 * Components
 */
import Container from '../components/Container'
import Box from '../components/Box/Box'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import CardManager from '../components/CardManager/CardManager'
import WhiteText from '../components/WhiteText'
import EmptyList from '../components/EmptyList'

/**
 * Helpers
 */
import t from '../config/themeVariables'
import { mapStateToProps } from '../utils/helpers';

/**
 * Add Card
 */
class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    handleQuestion = question => this.setState({question});
    handleAnswer = answer => this.setState({answer});

    submitDeck = () => {
        const { addCard, navigation } = this.props;
        const { question, answer } = this.state;
        if (question === '') return;
        this.setState({question: '', answer: ''});
        addCard(question, answer, navigation.state.params.id);
    };
    
    render = () => {
        const { cards, editCard } = this.props;
        const { question, answer } = this.state;
        const disabled = question === '' || answer === '';

        const sortedCards = [...cards].sort((a, b) => a.created_at > b.created_at ? -1 : 1)

        return (
            <Container scroll contentContainerStyle={{justifyContent: 'flex-start'}}>
                <Box style={{marginBottom: t.space}}>
                    <WhiteText size='h5' style={{marginBottom: t.space/2}}>Question:</WhiteText>
                    <Input
                    style={{marginBottom: t.space/2}}
                    placeholder='Insert question...'
                    value={question}
                    onChangeText={this.handleQuestion}
                    />

                    <WhiteText size='h5' style={{marginBottom: t.space/2}}>Answer:</WhiteText>
                    <Input
                    style={{marginBottom: t.space}}
                    placeholder='Insert answer...'
                    value={answer}
                    onChangeText={this.handleAnswer}
                    />
                    <Button disabled={disabled} type={disabled ? 'primary' : 'complementary'} onPress={this.submitDeck} text='Submit' icon='check'  />
                </Box>
                
                <FlatList
                data={sortedCards}
                horizontal={false}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => <CardManager index={index} question={item.question} answer={item.answer} onDelete={() => editCard(item.id, {deleted: true})} />}
                ListEmptyComponent={ <EmptyList>No cards found 😓</EmptyList> }
                style={{marginBottom: 24}}
                />

            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addCard, editCard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);