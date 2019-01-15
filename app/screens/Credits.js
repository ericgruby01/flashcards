import React, { Component } from 'react';

import { withNavigation } from 'react-navigation';
import { View, Linking, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Container from '../components/Container'
import Button from '../components/Button/Button'
import WhiteText from '../components/WhiteText'

import t from '../config/themeVariables'

class Credits extends Component {
    goToDecks = () => {
        const { navigation } = this.props;
        navigation.goBack();
        navigation.navigate('Decks')
    }

    render = () => (
        <Container scroll>
            <WhiteText centered size='h1' style={{marginBottom: t.space}}>Credits</WhiteText>
            <WhiteText centered size='h4' style={{marginBottom: t.space}}>This project was made for the React Nanodegree at Udacity. It's my first React Native app, and although it looks simple, I put my brain and my heart to learn and love it.</WhiteText>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Ionicons style={styles.icon} onPress={() => Linking.openURL('https://www.linkedin.com/in/ericgruby/')} name="logo-linkedin" size={32} />
                <Ionicons style={styles.icon} onPress={() => Linking.openURL('https://fb.com/egruby/')} name="logo-facebook" size={32} />
                <Ionicons style={styles.icon} onPress={() => Linking.openURL('https://instagram.com/ericgruby/')} name="logo-instagram" size={32} />
            </View>
            <WhiteText centered size='h4' style={{marginBottom: t.space}}>Hope you enjoy 😄</WhiteText>
            <Button onPress={this.goToDecks} type="complementary2" text='Choose a Deck!' />
        </Container>
    )
};

const styles = StyleSheet.create({
    icon: {
        color: 'white',
        margin: t.space/2
    }
})

export default withNavigation(Credits);