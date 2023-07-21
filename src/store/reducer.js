const reducer = (state,action)=>{ // action: {type:.. payload:..}
    switch(action.type){
        case "AUTH_LOGIN": return {...state,user:action.payload,isLoading:true};
        case "AUTH_REGISTER": return {...state,isLoading:true};
        case "HIDE_LOADING": return {...state,isLoading:false};
        default: return state;
    }
}
export default reducer;