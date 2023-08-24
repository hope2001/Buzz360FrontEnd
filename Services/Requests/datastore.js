
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
let getDstore = () => {
    return Axios.get('/datastore')
}
let AddDstore = (rdata) => {
    console.log(rdata);
    return Axios.post('/datastore',rdata)
}

let AddFtoDstore = (rdata) => {
    console.log(rdata);
    return Axios.post('/datastore/upload',rdata,{
        headers: {
          "Content-Type": "multipart/form-data",
          
        },
      })
}


let AddDstorefile = (rdata) => {
    console.log(rdata);
    return Axios.post('/datastorefile',rdata)
}

/** 
 * @param {object} udata
 * @returns {Promise}
 */
let trashAgent = (id) => {
    return Axios.put('/datastore/'+id+'/trash')
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

export const dstoreReq = {
    getDstore,trashAgent, AddDstore,datatoia,AddFtoDstore,AddDstorefile
}