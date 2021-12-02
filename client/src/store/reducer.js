import {GET_CHARACTERS} from "./action.js";

export default function reducer(state = [], {type, payload}){
    if(type === GET_CHARACTERS){
        return {
            payload
        }
    }
}