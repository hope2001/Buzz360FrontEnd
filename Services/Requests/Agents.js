
import Axios from './interceptor';
// import { axios } from 'axios';
// import axios from "axios";
// import axios from "axios";
const apip = "http://localhost:3500"

/**
 * Connexion vers l'API
 * 
 * /
 
/** 
 * @param {object} udata
 * @returns {Promise}
 */
let getAllAgent = () => {
    return Axios.get('/agents')
}
let getAllAgentlog = () => {
    return Axios.get('/agentslog')
}
let AddAgent = (rdata) => {
    console.log(rdata);
    return Axios.post('/agents',rdata)
}

/** 
 * @param {object} udata
 * @returns {Promise}
 */
let trashAgent = (id) => {
    return Axios.delete('/agents/trash/'+id)
}

/** 
 * @param {object} data
 * @returns {Promise}
 */
let datatoia = (data) => {
    const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
    return Axios.post('/iadata',data)
}

export const agentReq = {
    getAllAgent,trashAgent, AddAgent,datatoia,getAllAgentlog
}