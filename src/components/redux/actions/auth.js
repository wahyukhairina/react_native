import axios from 'axios'
import {REACT_APP_API_URL} from 'react-native-dotenv';

export const login = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios({
            method:'POST',
            url: `${REACT_APP_API_URL}`,
            data: data
        })
    }
}

export const logout = () => {
    return {
        type : 'LOGOUT_USER'
    }
}