/**
 * React & React Native
 */
import React, { Component } from 'react';
import { FlatList, Picker, AsyncStorage } from 'react-native';

/**
 * Redux Stuff
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * Actions
 */
import { actions as deckActions } from '../store/actions/deck';
import { actions as cardActions } from '../store/actions/card';

/**
 * Components
 */
import Container from '../components/Container'
import Deck from '../components/Deck/Deck'
import EmptyList from '../components/EmptyList'
import Input from '../components/Input/Input'
import Icon from '../components/Icon'
import Button from '../components/Button/Button'


import { levels, deleteDeck } from '../utils/helpers'
import t from '../config/themeVariables'

/**
 * Decks
 */
class Decks extends Component {

    state = {
        nameFilter: '',
        levelFilter: 'all'
    }

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <Picker style={{width: 120, color: t.white}} selectedValue={navigation.getParam('levelFilter')} onValueChange={navigation.getParam('handleHeaderPicker')}>
                <Picker.Item label='All' value='all' />
                {Object.keys(levels).map(level => <Picker.Item key={level} label={levels[level]} value={level} />)}
            </Picker>
        ),
        headerLeft: <Icon name='plus-circle' style={{marginLeft: t.space/2}} color={t.white} size={30} onPress={() => navigation.navigate('AddDeck')} />
    })

    changeNameFilter = nameFilter => this.setState({nameFilter})
    changeLevelFilter = levelFilter => {
        this.props.navigation.setParams({levelFilter})
        this.setState({levelFilter})
    }
    onClear = () => this.setState({nameFilter: ''})

    componentDidMount = () => {
        const { getDecks, getCards, navigation } = this.props;
        navigation.setParams({
            handleHeaderPicker: this.changeLevelFilter,
            levelFilter: this.state.levelFilter
        });
        getDecks();
        getCards();
    }

    deleteAction = deleteDeck.bind(this)

    renderDeck = ({item, index}) => (
        <Deck
        deck={item}
        index={index}
        onView={() => this.props.navigation.navigate('SingleDeck', {id: item.id, name: item.name})}
        />
    )

    render = () => {

        const { nameFilter, levelFilter } = this.state;
        const { decks } = this.props;

        const filteredDecks = decks.filter(deck => {
            if (nameFilter === '') return deck;
            return deck.name.toLowerCase().includes(nameFilter.toLowerCase());
        }).filter(deck => {
            if (levelFilter === 'all') return deck
            return deck.level == levelFilter;
        }).sort((a, b) => a.created_at > b.created_at ? -1 : 1);

        return (
            <Container scroll>
                <Input style={{marginBottom: t.space}} value={nameFilter} placeholder='Filter by name' onChangeText={this.changeNameFilter} />

                <FlatList
                data={filteredDecks}
                horizontal={false}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={this.renderDeck}
                ListEmptyComponent={ <EmptyList>No decks found 😓</EmptyList> }
                style={{marginBottom: 24}}
                />

                <Button style={{marginBottom: t.space}} type='complementary2' text='Reset Decks' onPress={this.props.resetDecks} />
                <Button style={{marginBottom: t.space*2}} type='complementary2' text='Reset Cards' onPress={this.props.resetCards} />
            </Container>
        )
    }
}

const mapStateToProps = ({ decks, cards }) => ({
    allDecks: decks,
    decks: Object.values(decks)
            .filter(deck => !deck.deleted)
            .map(deck => {
                deck.cards = Object.values(cards).filter(card => card.deck === deck.id && !card.deleted).length
                return deck;
            })
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...deckActions, ...cardActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Decks);