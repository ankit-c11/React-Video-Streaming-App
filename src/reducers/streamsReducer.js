import _ from 'lodash'
const initial_state = {};

const streamsReducer = (state=initial_state,action) => {
    switch(action.type){
        case 'FETCH_STREAMS':
            {
                var newState = {}
                if(action.payload){
                    action.payload.forEach(stream => {
                        newState[stream.id] = stream
                    })
                }
                return {...state,...newState}
            }
        case 'FETCH_STREAM':
            return {...state,[action.payload.id]:action.payload}
        case 'CREATE_STREAM':
            return {...state,[action.payload.id]:action.payload}
        case 'DELETE_STREAM':
            return _.omit({...state},action.payload)
        case 'EDIT_STREAM':
            return {...state,[action.payload.id]:action.payload}
        default:
            return state
    }
}

export default streamsReducer