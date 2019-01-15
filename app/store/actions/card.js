export const consts = {
    RESET_CARDS: 'RESET_CARDS',
    GET_CARDS: 'GET_CARDS',
    ADD_CARD: 'ADD_CARD',
    EDIT_CARD: 'EDIT_CARD'
}

export const actions = {
    getCards: () => ({ type: consts.GET_CARDS, get: 'cards' }),

    resetCards: () => ({ type: consts.RESET_CARDS, set: 'cards' }),

    addCard: (question, answer, deck) => ({ type: consts.ADD_CARD, question, answer, deck, set: 'cards' }),

    editCard: (id, edited) => ({ type: consts.EDIT_CARD, id, edited, set: 'cards' }),
}