const initState = {
    models: [
        {id: '1', name: 'Azrael', stats: {'M': "6\"", 'WS': '2+', 'BS': '2+', 'S': '4', 'T': '4', 'W': '6', 'A': '5', 'Ld': '9', 'Sv': '2+'}, power: 9},
        {id: '2', name: 'Belial', stats: {'M': "5\"", 'WS': '2+', 'BS': '2+', 'S': '4', 'T': '4', 'W': '6', 'A': '5', 'Ld': '9', 'Sv': '2+'}, power: 8},
        {id: '3', name: 'Sammael on Corvex', stats: {'M': "14\"", 'WS': '2+', 'BS': '2+', 'S': '4', 'T': '6', 'W': '6', 'A': '5', 'Ld': '9', 'Sv': '3+'}, power: 10}
    ]
}

const modelReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_MODEL':
    }
    return state
}

export default modelReducer