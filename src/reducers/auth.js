const intial_state = {
    isSignedIn:null,
    userId:null
}

const auth = (state=intial_state,action) => {
    if(action.type === 'SIGN_IN'){
        return {...state, isSignedIn : true,userId:action.payload.userId}
    }
    if(action.type === 'SIGN_OUT'){
        return {...state, isSignedIn:false,userId:null}
    }
    return state;
}

export default auth