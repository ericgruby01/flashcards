export const consts = {
    RESET_DECKS: 'RESET_DECKS',
    GET_DECKS: 'GET_DECKS',
    ADD_DECK: 'ADD_DECK',
    EDIT_DECK: 'EDIT_DECK'
}

export const actions = {
    getDecks: () => ({ type: consts.GET_DECKS, get: 'decks' }),

    resetDecks: () => ({ type: consts.RESET_DECKS, set: 'decks' }),

    addDeck: (name, level) => ({ type: consts.ADD_DECK, name, level, set: 'decks' }),

    editDeck: (id, edited) => ({ type: consts.EDIT_DECK, id, edited, set: 'decks' }),
}