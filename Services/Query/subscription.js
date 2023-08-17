import { useQuery } from 'react-query';
import { useMutation } from 'react-query';

import { Tokenn } from '../helpers/TokenKeeper';
import { Subscriptions } from '../Requests/Subscription';

export function useFetchPrice() {
    return useQuery('price', async () => {

            try {
      const res = await Subscriptions.getPrice();
      console.log(res)
      console.log("price--->data", res.data);
      return res.data;
      } catch (err) {
    //   toast(err.response.data.message, { hideProgressBar: false, autoClose: 4000, type: 'error' })
      console.log("price query query");
      console.log(err);
      console.log(err.response.data.message);
      }

    });
  }
  
