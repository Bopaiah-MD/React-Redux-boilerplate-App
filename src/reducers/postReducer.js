import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    items:[],
    item:{}
}

export default function(state=initialState, action){
    switch(action.type){

        case FETCH_POSTS:
                console.log("3. postReducer FETCH_POSTS cald  ");
            return{
                ...state,
                items:action.payload
            };

            case NEW_POST:
                    console.log("3. postReducer NEW_POST cald  ");
                    return{
                        ...state,
                        item:action.payload
                    };
            default:
            return state;

    }

}