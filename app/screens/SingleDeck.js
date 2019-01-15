/**
 * React & React Native
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * Redux Stuff
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Actions
 */
import { actions as deckActions } from '../store/actions/deck';

/**
 * Helpers
 */
import { mapStateToProps, deleteDeck } from '../utils/helpers'

/**
 * Components
 */
import Container from '../components/Container'
import WhiteText from '../components/WhiteText'
import Button from '../components/Button/Button'
import Box from '../components/Box/Box'
import Badge from '../components/Badge/Badge'

import { levels } from '../utils/helpers'
import t from '../config/themeVariables'

const customStyles = StyleSheet.create({
    btnStyle: {
        marginBottom: t.space/2,
    },
    box: {
        flex: 1,
        justifyContent: 'space-between',
    }
});

class SingleDeck extends Component {

    deleteAction = deleteDeck.bind(this)

    render = () => {
        const { deck, cards, editDeck, navigation } = this.props;
        const id = navigation.getParam('id', 0);
        const name = deck.name;
        const cardCount = cards.length;

        return (
            <Container>
                <Box style={customStyles.box}>
                    <View><Badge text={levels[deck.level]} alignSelf='center' big /></View>
                    <View>
                        <WhiteText centered style={{fontSize: t.h1}}>{name}</WhiteText>
                        <WhiteText centered style={{fontSize: t.h3}}>{cardCount} Cards</WhiteText>
                    </View>
                    <View>
                        <Button style={customStyles.btnStyle} type='complementary2' onPress={() => navigation.navigate('Quiz', {id, index: 0})} text='Start Quiz' icon='play' />
                        <Button style={[customStyles.btnStyle, {marginBottom: 0}]} type='primary' onPress={() => this.deleteAction(id, name, editDeck, navigation)} text='Delete Deck' icon='trash' />
                    </View>
                </Box>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ editDeck: deckActions.editDeck }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SingleDeck);