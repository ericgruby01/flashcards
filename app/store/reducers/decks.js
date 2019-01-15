import InitialDecks from '../InitialDecks'

import { consts } from '../actions/deck'

import { newDeck } from '../../utils/helpers'

const INITIAL_STATE = {
    ...InitialDecks
}

export default function decks (state = INITIAL_STATE, action) {
    switch (action.type) {
        case consts.GET_DECKS:
            return action.value ? action.value : state
        case consts.RESET_DECKS:
            return {
                ...INITIAL_STATE
            }
        case consts.ADD_DECK:
            return {
                ...state,
                ...newDeck(action.name, action.level)
            }
        case consts.EDIT_DECK:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    ...action.edited
                }
            }
        default:
            return state;
    }
}