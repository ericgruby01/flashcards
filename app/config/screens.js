/**
 * React & React Native
 */
import React from 'react';
import { Animated, Easing } from 'react-native'

/**
 * React Navigation
 */
import { createMaterialTopTabNavigator, createStackNavigator, createDrawerNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

/**
 * Theme Variables
 */
import t from './themeVariables'

/**
 * Components
 */
import Icon from '../components/Icon'

/**
 * Nav configs
 */
import stackHeaderConfig from './stackHeaderConfig'
import tabsConfig from './tabsConfig'

/**
 * Screens
 */
import AddCard from '../screens/AddCard'
import AddDeck from '../screens/AddDeck'
import Decks from '../screens/Decks'
import Quiz from '../screens/Quiz'
import QuizResult from '../screens/QuizResult'
import SingleDeck from '../screens/SingleDeck'
import Credits from '../screens/Credits'

/**
 * Stack transition animation
 */
const transitionConfig = () => ({
    transitionSpec: {
        duration: 500,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
    },
    screenInterpolator: ({ layout, position, scene }) => {
        const routeName = scene.route.routeName;
        const width = layout.initWidth;
        const inputRange = [scene.index - 1, scene.index, scene.index + 1];

        const translateX = position.interpolate({
            inputRange,
            outputRange: [width, 0, 0]
        });

        const opacity = position.interpolate({
            inputRange: [scene.index - 1, scene.index],
            outputRange: [0, 1]
        });

        if (routeName === 'Quiz') {
            return { opacity }
        }
        
        return { transform: [{ translateX }] }
    },
})

/**
 * Single Deck Tabs
 */
const SingleDeckTabs = createMaterialTopTabNavigator({
    SingleDeck: {
        screen: SingleDeck,
        navigationOptions: () => ({
            title: 'Deck',
            tabBarIcon: <Icon name='layers' size={24} color='white' />
        })
    },

    AddCard: {
        screen: AddCard,
        navigationOptions: () => ({
            title: 'Add Card',
            tabBarIcon: <Icon name='plus-circle' size={24} color='white' />
        })
    },
}, tabsConfig)


/**
 * Stack Navigation
 */
const Stack = createStackNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: () => ({
            title: 'Decks'
        })
    },

    AddDeck: {
        screen: AddDeck,
        navigationOptions: () => ({
            title: 'Add Deck'
        })
    },

    SingleDeck: {
        screen: SingleDeckTabs,
        path: 'deck/:id/:name',
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('name', '')
        })
    },

    Quiz: {
        screen: Quiz,
        path: 'quiz/:id/:index',
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: t.complementary2,
            },
        })
    },


}, { transitionConfig, defaultNavigationOptions: stackHeaderConfig });


/**
 * Drawer
 */
const Drawer = createDrawerNavigator({
    Decks: {
        screen: Stack
    },
    Credits: {
        screen: Credits
    }
}, {
    drawerBackgroundColor: t.secondary,
    drawerType: 'front',
    contentOptions: {
        activeTintColor: t.white,
        inactiveTintColor: t.white,
        activeBackgroundColor: t.complementary,
    }
});

/**
 * Switch
 */
const Switch = createSwitchNavigator({
    Home: {
        screen: Drawer
    },
    QuizResult: {
        screen: QuizResult,
        path: 'quiz/:id/:score',
    }
},{
    backBehavior: 'initialRoute',
});

export default createAppContainer(Switch);