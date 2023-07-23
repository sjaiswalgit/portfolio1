import {createStore} from 'redux';
const initialState={
    navBar:false,
    count:0
}
export function toggle(){
    return {
        type:"TOGGLE"
    }
}
function reducer(state=initialState,action){
    switch (action.type){
        case "TOGGLE":
            return {
                navBar:!state.navBar,
                count:state.count<1?1:state.count
            }
        default:
            return state;
    }
}
const store=createStore(reducer);

export default store;