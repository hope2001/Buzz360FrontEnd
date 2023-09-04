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
import { Spinner } from '@chakra-ui/react'
function Chat() {
    const [dstore, setdstore] = useState('');
    const [Jsondata, setJsonData] = useState([]);
    const router = useRouter();
    const {
        register,
        formState: { errors },
        handleSubmit, reset
    } = useForm();

    const { mutateAsync, isLoading: isLoadingAddAgent, error: errorAddAgent } = useGetOneDatastore();
    const dst = async (id) => {
        try {
            if (id) {

                const a = await mutateAsync(id)
                return a
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        if (router?.query.slug) {

            (async () => {
                let d = await dst(router?.query.slug)
                setdstore(d)
            })()
        }
    }, [])



    const [converse, setconverse] = useState([
        {
            from: "IA",
            message: "Bonjour en quoi puis-je vous aider? "
        },
    ])
    const [chatload, setchatLoad] = useState(false)
    const userdata =(query)=>{
        setconverse([...converse, { from: "Humain", message: query }])
        // setconverseres([...converse, { from: "Humain", message: query }])
    }

    const onSubmit = async (data) => {
        reset()
        setchatLoad(true)
        console.log(data);
        reset()
        // userdata(data.query)
        
        // setconverse([...converse, { from: "Humain", message: data.query }])
        // setJsonData([...Jsondata, {User: data.query, Bot: ""}])

        try {
            let body = {
                "collect_name": collectionName,
                "user_id": dstore?.data.data,
                "query": data.query,
                "json_data": []
            }
            console.log("=======> body", body);
            const response = await axios.post(iaapi + "/chatbot?collect_name=" + collectionName + "&user_id=" + dstore?.data.data + "&query=" + data?.query + "&json_data=[]");
            // const response = await axios.post(iaapi + "/chatbot?collect_name=" + collectionName + "&user_id=samsam&query=" + data?.query + "&json_data=[]");
            //   const response = await axios.post(iaapi+"/chatbot?collect_name="+collectionName+"&user_id="+dstore.data.data+"&query="+data.query+"&json_data="+JSON.stringify(converse));
            //   const response = await axios.post(iaapi+"/chatbot", body);
            console.log(response.data);
            const userquest = { from: "Humain", message: data.query };
            const iares = { from: "IA", message: response.data.bot_response };
            setchatLoad(false)
            setconverse([...converse,userquest, iares ])
            
        } catch (error) {
            console.error('Chat errors:', error);
        }

    };
    return (
        <DashboardLayout>
           
            <div className="container-fluid bg-gray-200 rounded p-5 m-3 h-ful  overflow-auto h-100">

                {converse?.map((item, index) => (item?.from == "IA" ?
                    <div key={index} className="flex justify-start my-2 bg-gray-900 rounded-md p-2">
                        {/* <div className="w-full h-full flex"> */}
                            {/* <span className="absolute -top-5 -left-2 bg-white border-0 rounded-full"> <img src="/images/custom/chatbot.png" alt="" className="w-[30px] zIndex-5 rounded-full" /> </span> */}
                        <i className="bi bi-robot px-2 py-1 bg-gray-400  rounded-md align-middle mb-auto  text-white mx-2" style={{fontSize:"20px"}}></i>
                        <span style={{fontSize:"20px"}} className="text-white p-1">
                          {item.message.replace("\n",<br/>)}
                        </span>
                        {/* </div> */}
                    </div>
                    :
                    <div key={index} className="flex justify-start my-2 bg-gray-100 rounded-md p-2 text-gray-800">
                        <i className="bi bi-person-fill-check px-2 py-1 mb-auto bg-gray-400 rounded-md text-gray-800 mx-2" style={{fontSize:"20px"}}></i>
                        <span style={{fontSize:"20px"}} className="text-gray-800">
                            {item.message}
                        </span>
                    </div>))}

                   { chatload && <div className=" flex justify-start my-2">
                        <span style={{fontSize:"20px"}} className="rounded-md my-2 shadow sm text-white bg-gray-700  p-3">
                        <button type="button" className="" disabled>
                        <i className="bi bi-robot text-white mx-2" style={{fontSize:"20px"}}></i>
                        <Spinner/> ....
                        </button>
                        </span>
                    </div>}

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="container-fluid flex gap-2 items-center bg-black rounded-lg shadow p-3">
                <Textarea className="text-white border-black-500" {...register("query", { required: true })} placeholder='Tapez votre question ici !' />
                <Button type="submit" className="item-center" colorScheme='purple' size='lg' variant='solid'>
                    <i className="bi bi-send-plus"></i>
                </Button>
            </form>
        </DashboardLayout>
    );
}

export default Chat;