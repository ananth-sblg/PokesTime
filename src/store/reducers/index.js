var pokes = require('./../../data/pokedex')

const initState = {
    pokes,
    pages: 12
}

let rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_POKE":
            console.log('add', action)
            const newPokes = [...state.pokes, action.poke]
            return { pokes: newPokes };
        case "UPDATE_POKE":
            console.log('update', action)
            const pokes = state.pokes.filter(poke => Number(poke.id) !== Number(action.poke.id))
            return {
                ...state,
                pokes: [
                    ...pokes,
                    action.poke
                ]
            };
        case "ADD_PAGE":
            return { ...state, pages: (state.pages + action.page) };
        default:
            return state;
    }
}

export default rootReducer;