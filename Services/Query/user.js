import { useQuery } from 'react-query';
import { useMutation } from 'react-query';
import { ResumeE } from './../Requests/Resume';
import { Tokenn } from '../helpers/TokenKeeper';
import { AuthSys } from './../Requests/Auth';

export function useFetchUserData() {
    return useQuery('userData', async () => {
        if(Tokenn.checkToken){
            try {
      const res = await AuthSys.userLogedData();
      console.log(res)
      console.log("user--->data", res.data);
      return res.data;
      } catch (err) {
    //   toast(err.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
      console.log("user query");
      console.log(err);
      console.log(err.message);
      }
        }
    });
  }
  
