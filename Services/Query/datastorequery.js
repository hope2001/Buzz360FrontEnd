import { useQuery } from 'react-query';
import { useMutation } from 'react-query';
// import { ResumeE } from './../Requests/Resume';
import { Tokenn } from '../helpers/TokenKeeper';
import { toast } from "react-toastify";
// import { agentReq } from '../Requests/';
import { dstoreReq } from '../Requests/datastore';


export function useFetchDatastore() {
    return useQuery('Dstore', async () => {
        if(Tokenn.checkToken){
            try {
      const res = await dstoreReq.getDstore();
      console.log(res)
      return res.data;
      } catch (err) {
    //   toast(err.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
      console.log("Datastore querry");
      console.log(err);
      console.log(err.message);
      }
        }
    });
  }
  

  export function useAddDatastore() {
    return useMutation(async (data) => {
      try {
        console.log("Create---->Datastore", data);
      const res = await dstoreReq.AddDstore(data)
      console.log(res);
      console.log("res");
      // toast("Demande enrégistrée avec success", { hideProgressBar: false, autoClose: 4000, type: 'success' })
      // toast("Demande en attente de validation", { hideProgressBar: false, autoClose: 7000, type: 'warning' })
  
      return res
          
      } catch (error) {
          console.log(error)
          console.log(error.message);
      // toast(error.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
          
      }
  
    });
  }


  export function useGetOneDatastore() {
    return useMutation(async (id) => {
      try {
        console.log("Get one---->Datastore", id);
      const res = await dstoreReq.getoneDstore(id)
      console.log(res);
      console.log("res");
      // toast("Demande enrégistrée avec success", { hideProgressBar: false, autoClose: 4000, type: 'success' })
      // toast("Demande en attente de validation", { hideProgressBar: false, autoClose: 7000, type: 'warning' })
  
      return res
          
      } catch (error) {
          console.log(error)
          console.log(error.message);
      // toast(error.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
          
      }
  
    });
  }




  export function useAddFileToDatastore() {
    return useMutation(async (data) => {
      try {
        console.log("Upload file to ---->Datastorefile", data);
      const res = await dstoreReq.AddDstorefile(data)
      console.log(res);
      console.log("======>res");
      // toast("Demande enrégistrée avec success", { hideProgressBar: false, autoClose: 4000, type: 'success' })
      // toast("Demande en attente de validation", { hideProgressBar: false, autoClose: 7000, type: 'warning' })
  
      return res
          
      } catch (error) {
          console.log(error)
          console.log(error.message);
      // toast(error.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
          
      }
  
    });
  }

  export function useAddDataForIAResume() {
    return useMutation(async (data) => {
      try {
        console.log("add---->iaresume", data);
      const res = await ResumeE.datatoia(data)
      // toast("Demande enrégistrée avec success", { hideProgressBar: false, autoClose: 4000, type: 'success' })
      // toast("Demande en attente de validation", { hideProgressBar: false, autoClose: 7000, type: 'warning' })
  console.log(res);
      return res
          
      } catch (error) {
          console.log(error)
          console.log(error.message);
      // toast(error.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
          
      }
  
    });
  }


  // export function useTrashResumeData() {
  //   return useMutation(async (data) => {
  //     console.log(data);
  //     const id= data.resumeID
  //     try {
  //     const res = await ResumeE.trashResume(id)
  //     queryClient.invalidateQueries('resumeData');
  //     toast("Supprimé avec succèss", { hideProgressBar: false, autoClose: 7000, type: 'infos' })
  //     return
  //     } catch (error) {
  //         console.log(error)
  //     // toast(error.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
  //     }
  
  //   });
  // }
  


  export function useTrashResumeData() {
    const trashResumeMutation = useMutation(async (data) => {
      console.log(data);
      const id = data.resumeID;
      console.log( " data.resumeID",data);
      try {
        const res = await ResumeE.trashResume(id);
        toast("Supprimé avec succès", { hideProgressBar: false, autoClose: 7000, type: 'success' });
        return res;
      } catch (error) {
        console.log(error);
        toast("Une erreur est survenue suppression non éffectuée", { hideProgressBar: false, autoClose: 4000, type: 'error' })
        // throw error;
      }
    });
  
    return {
      trashResume: trashResumeMutation.mutateAsync,
      isLoading: trashResumeMutation.isLoading,
      error: trashResumeMutation.error,
    };
  }