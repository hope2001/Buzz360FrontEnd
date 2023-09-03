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
    const [converseres, setconverseres] = useState([
    ])
    const userdata =(query)=>{
        setconverse([...converse, { from: "Humain", message: query }])
        // setconverseres([...converse, { from: "Humain", message: query }])
    }

    const onSubmit = async (data) => {

        console.log(data);
        userdata(data.query)
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
            const iares = { from: "IA", message: response.data.bot_response };
            setconverse([...converse, iares ])
            reset()
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
    return (
        <DashboardLayout>
            <div className="container-fluid bg-yellow-100 rounded p-5 m-3 h-3/5 overflow-auto h-100">

                {converse?.map((item, index) => (item?.from == "IA" ?
                    <div key={index} className=" text-md flex justify-start my-1">
                        <span className="rounded-md my-2 shadow sm bg-purple-100 p-3">
                            {item.message}
                        </span>
                    </div>
                    :
                    <div key={index} className="flex justify-end my-1">
                        <span className="rounded-md my-2 shadow sm bg-gray-300 p-3">
                            {item.message}
                        </span>
                    </div>))}

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