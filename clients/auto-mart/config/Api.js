import axios from 'axios'

export default () => {
    return axios.create({
        // baseURL:'https://maintainance-tracking-app.herokuapp.com/Api/v1'
        baseURL:'http://localhost:3000/Api/v1'
        // baseURL: '',
    });
}