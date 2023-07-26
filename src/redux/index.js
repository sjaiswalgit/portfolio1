import {createStore} from 'redux';
const initialState={
    navBar:false,
    count:0,
    desktop:window.innerHeight<window.innerWidth && window.innerWidth>=908?true:false
}
export function toggle(){
    return {
        type:"TOGGLE"
    }
}
export function resize(){
    return{
        type:"RESIZE"
    }
}
function reducer(state=initialState,action){
    switch (action.type){
        case "TOGGLE":
            return {
                navBar:!state.navBar,
                navBar:window.innerWidth>window.innerHeight && window.innerWidth>=908?false:!state.navBar,
                count:window.innerWidth>window.innerHeight && window.innerWidth>=908?0:1,
                desktop:state.desktop
            }
        case "RESIZE":
            return{
                navBar:window.innerWidth>window.innerHeight && window.innerWidth>=908?false:state.navBar,
                count:window.innerWidth>window.innerHeight && window.innerWidth>=908?0:state.count,
                desktop:window.innerWidth>window.innerHeight && window.innerWidth>=908?true:false
            }
        default:
            return state;
    }
}
const store=createStore(reducer);

export default store;