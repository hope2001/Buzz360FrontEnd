import { useQuery,useQueryClient } from 'react-query';
import { useMutation } from 'react-query';
// import { ResumeE } from './../Requests/Resume';
import { Tokenn } from '../helpers/TokenKeeper';
import { toast } from "react-toastify";
import { agentReq } from '../Requests/Agents';



export function useFetchAgentlogData() {
    return useQuery('agentlogData', async () => {
        if(Tokenn.checkToken){
            try {
      const res = await agentReq.getAllAgentlog();
      console.log(res)
      return res.data;
      } catch (err) {
    //   toast(err.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
      console.log("Agentlog querry");
      console.log(err);
      console.log(err.message);
      }
        }
    });
  }
  
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
      console.log(err.message);
      }
        }
    });
  }
  

  export function useAddAgent() {
    const queryClient = useQueryClient()
    return useMutation(async (data) => {
      try {
        console.log("Create---->Agent", data);
      const res = await agentReq.AddAgent(data)

      return res

          
      } catch (error) {
          console.log(error)
          console.log(error.message);
      // toast(error.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
          
      }

  
    },{
      onSuccess: () => {
        queryClient.invalidateQueries('agentData')
      }
    });
  }








  export function useAddDataForIAResume() {
    return useMutation(async (data) => {
      try {
        console.log("add---->iaresume", data);
      const res = await ResumeE.datatoia(data)
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
  


  export function useTrashAgent() {
    const queryClient = useQueryClient()
    return useMutation(async (id) => {
      try {
        const res = await agentReq.trashAgent(id);
        toast("Supprimé avec succès", { hideProgressBar: false, autoClose: 7000, type: 'success' });
        return res;
      } catch (error) {
        console.log(error);
        toast("Une erreur est survenue", { hideProgressBar: false, autoClose: 6000, type: 'error' })
      }
    },{
      onSuccess: () => {
        queryClient.invalidateQueries('agentData')
      }
    });
  }