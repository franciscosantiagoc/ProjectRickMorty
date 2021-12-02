
import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";

export function getCharacters(){
    return async (dispatch) => {
        const characters = await axios("http://localhost:3001/character");
        
        const payload = characters.data;

        return dispatch({
            payload,
            type: GET_CHARACTERS
        })
    }
}