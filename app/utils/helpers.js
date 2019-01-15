import { Permissions, Notifications } from 'expo';
import { Alert, AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'Flashcards:notification'

/**
 * @function uniqid
 * @description Returns a random unique ID
 * @return {String}
 */
export const uniqid = (prefix = 'id_') => prefix + (Math.random(Date.now()*16).toString(36).substring(2));

export const levels = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard'
}

export const mapStateToProps = ({ cards, decks }, { navigation }) => ({
    cards: Object.values(cards).filter(card => (navigation.state.params.id === card.deck) && !card.deleted),
    decks,
    deck: decks[navigation.state.params.id]
});

export const newDeck = (name, level) => {
    const id = uniqid('deck_');
    return {
        [id]: {
            id,
            name,
            level,
            deleted: false,
            created_at: new Date().getTime()
        }
    }
}

export const newCard = (question, answer, deck) => {
    const id = uniqid('card_');
    return {
        [id]: {
            id,
            question,
            answer,
            deck,
            deleted: false,
            created_at: new Date().getTime()
        }
    }
}

export function deleteDeck(id, name, editDeck, navigation) {
    Alert.alert(
        `Confirmation`,
        `Delete "${name}"?`,
        [
            {text: 'Cancel', onPress: () => false, style: 'cancel'},
            {text: 'Yes', onPress: () => {
                editDeck(id, {deleted: true});
                navigation.navigate('Decks')
                undoDelete(id, name, editDeck)
            }},
        ],
        { cancelable: true }
    )
}

undoDelete = (id, name, editDeck) => {
    Alert.alert(
        'Success',
        `${name} was deleted.`,
        [
            {text: 'Undo', onPress: () => editDeck(id, {deleted: false})},
            {text: 'Thanks!', onPress: () => false, style: 'cancel'} 
        ],
        { cancelable: true }
    )
}

export const clearNotification = () => AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync)

const createNotification = {
    title: 'Flashcards reminder',
    body: '👋 Hey! Your decks are waiting for you',
    ios: {
        soud: true
    },
    android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true
    }
};


export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
        if (data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                if (status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()
                    let tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(9);
                    tomorrow.setMinutes(30);

                    console.log(tomorrow)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification,
                        {
                            time: tomorrow,
                            repeat: 'day'
                        }
                    )

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}