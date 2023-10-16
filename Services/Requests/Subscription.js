
import { back_api } from '../../enviro';
import Axios from './interceptor';
// import { axios } from 'axios';
// import axios from "axios";
// import axios from "axios";
// const apip = "http://localhost:3500"
const apip = back_api


/**
 * Connexion vers l'API
 * 
 * /
 
/** 
 * @param {object} udata
 * @returns {Promise}
 */
let getPrice = () => {
    return Axios.get('/subscriptions')
}



export const Subscriptions = {
    getPrice
}