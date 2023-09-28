// import axios from 'axios';

// // Add an interceptor for handling request errors
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response) {
//       // The request was made, but the server responded with an error status
//       console.error(error.response.data);
//     } else if (error.request) {
//       // The request was made, but no response was received
//       console.error(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an error
//       console.error(error.message);
//     }

//     return Promise.reject(error);
//   }
// );





import axios from 'axios'
// import { toast } from 'react-toastify';
import { Tokenn } from '../helpers/TokenKeeper';
import { toast } from 'react-toastify';
import { thisServer } from './env';

// import { useRouter } from 'next/navigation'

// Paramétrage de base d'axios
const Axios = axios.create({
    baseURL: thisServer
})
// const router = useRouter();

// Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use(request => {
    if (typeof window !== 'undefined') {
        console.log("INTERCEPTOR");
    if (Tokenn.checkToken()) {
        request.headers.Authorization = 'Bearer ' + Tokenn.getToken()
        // request.headers.ContentType = 'application/json; charset=UTF-8':
    }}

    // request.headers.AccessControlAllowOrigin = api;
    return request
})

// Intercepteur de réponse API pour vérification de la session

// Axios.interceptors.response.use(response => {
//     return response
// }, error => {
//     if (error.response) {
//         // The request was made, but the server responded with an error status
//         console.error(error.response.data);
//     } else if (error.request) {
//         // The request was made, but no response was received
//         console.error(error.request);
//     } else {
//         // Something happened in setting up the request that triggered an error
//         console.error(error.message);
//     }

//     return Promise.reject(error);
// }
// );

Axios.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response) {
      // The request was made, but the server responded with an error status
      const statusCode = error.response.status;
  
      if (statusCode === 401) {
        // Redirect user to login page
        if(typeof window !== 'undefined'){
            // toast(error.response.message, {
            //     hideProgressBar: false,
            //     autoClose: 5000,
            //     type: "danger" });
            Tokenn.dropToken()
            toast("Veuillez vous Connecter", {
                hideProgressBar: false,
                autoClose: 6000,
                type: "danger" });
            // window.location.href('/')
        }
      } else if (statusCode === 403) {
        // Remove token from local storage
        // localStorage.removeItem("token");
        if(typeof window !== 'undefined'){
        toast(error.response.message, {
            hideProgressBar: false,
            autoClose: 5000,
            type: "danger",
          });
        Tokenn.dropToken()
      }
      } else {
        // Something happened in setting up the request that triggered an error
        console.error(error.message);
      }
  
      return Promise.reject(error);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error(error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error(error.message);
    }
  
    return Promise.reject(error);
  });

export default Axios




























// {
//     console.log('error 113')
//     console.log(error)
//     if( error.response.status === 401){
//         // alert("access non autorisé")
//         toast(error.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
//     }
//    else if(error.response.status === 403){
//         accountService.logout()
//         // alert("Votre session  à expirée")
//         Router.push('/auth/login')
//     }else{
//         return Promise.reject(error)
//     }
// })
