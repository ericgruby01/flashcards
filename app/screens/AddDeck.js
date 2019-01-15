/**
 * React
 */
import React, { Component } from 'react';

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
 * Components
 */
import Container from '../components/Container'
import WhiteText from '../components/WhiteText'
import Box from '../components/Box/Box'
import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import LevelSelector from '../components/LevelSelector/LevelSelector'

import t from '../config/themeVariables'

const boxSyle = {
    alignSelf: 'stretch'
}

const containerStyle = {
    justifyContent: 'flex-start'
}

class AddDeck extends Component {
    state = {
        name: '',
        level: 1
    }

    handleName = name => this.setState({name});
    handleLevel = level => this.setState({level});

    submitDeck = () => {
        const { addDeck, navigation } = this.props;
        const { name, level } = this.state;
        if (name === '') return;
        addDeck(name, level);
        navigation.goBack();
    };
    
    render = () => {
        const { name } = this.state;
        const disabled = name === '';

        return (
            <Container style={containerStyle}>
                <Box style={boxSyle}>
                    <WhiteText size='h5' style={{marginBottom: t.space/2}}>Deck Name:</WhiteText>
                    <Input
                    style={{marginBottom: t.space/2}}
                    placeholder='Inser deck name...'
                    value={name}
                    onChangeText={this.handleName}
                    />
                    <WhiteText size='h5' style={{marginBottom: t.space/2}}>Deck Level:</WhiteText>
                    <LevelSelector onchange={this.handleLevel} />
                    <Button disabled={disabled} type={disabled ? 'primary' : 'complementary'} onPress={this.submitDeck} text='Submit' icon='check'  />
                </Box>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addDeck: deckActions.addDeck }, dispatch);

export default connect(null, mapDispatchToProps)(AddDeck);