import { useQuery } from 'react-query';
import { useMutation } from 'react-query';
// import { ResumeE } from './../Requests/Resume';
import { Tokenn } from '../helpers/TokenKeeper';
import { toast } from "react-toastify";
import { agentReq } from '../Requests/Agents';
export function useFetchAgentData() {
    return useQuery('agentData', async () => {
        if(Tokenn.checkToken){
            try {
      const res = await agentReq.getAllAgent();
      console.log(res)
      return res.data;
      } catch (err) {
    //   toast(err.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
      console.log("Agent querry");
      console.log(err);
      console.log(err.response.data.message);
      }
        }
    });
  }
  

  export function useAddResumeData() {
    return useMutation(async (data) => {
      try {
        console.log("add---->resume", data);
      const res = await ResumeE.AddResume(data)
      // toast("Demande enrégistrée avec success", { hideProgressBar: false, autoClose: 4000, type: 'success' })
      // toast("Demande en attente de validation", { hideProgressBar: false, autoClose: 7000, type: 'warning' })
  
      return res
          
      } catch (error) {
          console.log(error)
          console.log(error.response.data.message);
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
          console.log(error.response.data.message);
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