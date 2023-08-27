// import DashboardLayout from "./components/Layout/dashboardLayout";
import { Textarea, Toast } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from '../components/Layout/dashboardLayout';
import { useGetOneDatastore } from '@/Services/Query/datastorequery';
import { useRouter } from 'next/router';
import { collectionName, iaapi } from '@/Services/Requests/env';
import axios from 'axios';
function Chat() {
    const [dstore, setdstore] = useState()
    const [Jsondata, setJsonData] = useState([])
    const router = useRouter()
    const {
        register,
        formState: { errors },
        handleSubmit, reset
    } = useForm();

    const { mutateAsync, isLoading: isLoadingAddAgent, error: errorAddAgent } = useGetOneDatastore();
    const dst = async(id)=>{
        try {
            if(id){

                const a = await mutateAsync(id)
                return a
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
  if(router?.query.slug){
    
   ( async()=>{
    let d = await dst(router?.query.slug)
    setdstore(d)
   })()
  }
    }, [])
    

    const onSubmit = async (data) => {

        console.log(data);
        setconverse([...converse, {from: "Humain", message:data.query}])
        // setJsonData([...Jsondata, {User: data.query, Bot: ""}])
        
        try {
            let body = {
                "collect_name":collectionName,
                "user_id": dstore?.data.data,
                "query": data.query,
                "json_data": []
            }
            console.log("=======> body", body);
          const response = await axios.post(iaapi+"/chatbot?collect_name="+collectionName+"&user_id="+dstore.data.data+"&query="+data.query+"&json_data=[]");
        //   const response = await axios.post(iaapi+"/chatbot?collect_name="+collectionName+"&user_id="+dstore.data.data+"&query="+data.query+"&json_data="+JSON.stringify(converse));
        //   const response = await axios.post(iaapi+"/chatbot", body);
          console.log(response.data);
          setconverse([...converse, {from: "IA", message: response.data.bot_response}])
        //   const rep = Jsondata[Jsondata.length -1 ].Bot=response.data.bot_response
        //   setJsonData([...Jsondata, rep])
                 reset()
        //   if(response.data){
        //     let bod = {
        //         name: datas.name,
        //         description: datas.description,
        //         path: response.data.path,
        //         datastore_id: data.id
        //       }
        //     //   await mutateAsync(bod)
        //     //   à revoir urgement 
        //     toast({
        //         title: 'Fichier(s) ajouté avec success à la base '+data.data+' 😎.',
        //         description: "Files uploaded with success.",
        //         status: 'success',
        //         duration: 9000,
        //         isClosable: true,
        //       })
        //       reset()
        //   }
        } catch (error) {
          console.error('Error uploading files:', error);
          Toast({
            title: 'Something went wrong',
            description: "erreur réseau ou serveur",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }

    };
    const [converse, setconverse] = useState([
        {
            from: "IA",
            message: "Bonjour en quoi puis-je vous aider? "
        }
    ])
    return (
        <DashboardLayout>
            <div className="container-fluid bg-yellow-100 rounded p-5 m-3 h-3/5 overflow-auto">
                {converse?.map((item, index) => (item?.from == "IA" ?
                    <div key={index} className="flex justify-start my-1">
                        <span className="rounded-md shadow sm bg-purple-200 p-2">
                            {item.message}
                        </span>
                    </div>
                    :
                    <div key={index} className="flex justify-end my-1">
                        <span className="rounded-md shadow sm bg-gray-200 p-2">
                            {item.message}
                        </span>
                    </div>))}
                    {/* {router.query.slug}
                    {dstore.data.data} */}

                    {JSON.stringify(converse)}
                    {/* {JSON.stringify(dstore)} */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="container flex gap-2 items-center bg-black rounded shadow p-1">
                <Textarea className="text-white border-black-500" {...register("query", { required: true })} placeholder='Here is a sample placeholder' />
                <Button type="submit" className="item-center" colorScheme='purple' size='lg' variant='solid'>
                    <i className="bi bi-send-plus"></i>
                </Button>
            </form>

        </DashboardLayout>
    );
}

export default Chat;