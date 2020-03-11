import axios from 'axios'

export const login = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: axios({
            method:'POST',
            url: 'http://192.168.1.21:8006/user/login',
            data: data
        })
    }
}

export const logout = () => {
    return {
        type : 'LOGOUT_USER'
    }
}