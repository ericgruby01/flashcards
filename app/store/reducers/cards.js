import { HTML, REACT_REDUX, JS } from '../InitialQuestions';

import { consts } from '../actions/card'

import { newCard } from '../../utils/helpers'

const INITIAL_STATE = {
    ...HTML,
    ...REACT_REDUX,
    ...JS
}

export default function cards (state = INITIAL_STATE, action) {
    switch (action.type) {
        case consts.GET_CARDS:
            return action.value ? action.value : state
        case consts.RESET_CARDS:
            return {
                ...INITIAL_STATE
            }
        case consts.ADD_CARD:
            return {
                ...state,
                ...newCard(action.question, action.answer, action.deck)
            }
        case consts.EDIT_CARD:
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