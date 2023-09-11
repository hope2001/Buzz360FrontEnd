import { useState, useEffect } from "react";
import LoadingP from "./partials/loadingpage";
import { Tokenn } from "@/Services/helpers/TokenKeeper";
import { useRouter } from 'next/navigation';
import SignIn from "../signin";

function IsAuth(Component) {
  
  return function (props) {
    const router = useRouter();
    const [isLoading, setisLoading] = useState(true)
    const [isLogged, setisLogged] = useState(null)


    // Check if the user is authenticated by making an API call.
    // const { data, loading, error } = useMeQuery();

    useEffect(() => {
      setisLoading(false)
    }, [])
    // if (!Tokenn.getToken) {
    //   // The user is not authenticated, so redirect to the login page.
    //   router.push('/signin');
    // }


    useEffect(() => {
      if (Tokenn.checkToken) {
        setisLogged(true)
      }
    })

    if (isLoading) {

      return <LoadingP />
    }

    if(!Tokenn.checkToken){
      router.push("/signin")
      return 
    }




    // The user is authenticated, so render the given component.
    if (isLogged) {
      return <Component {...props} />;
    } else {
      return <SignIn />
    }
  };
}


export default IsAuth;