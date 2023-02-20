
import {createStore} from 'vuex'
import api from './modules/api'


export default createStore({
    modules: {
        api
    }
})