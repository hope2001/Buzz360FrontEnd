import DashboardLayout from "./components/Layout/dashboardLayout";
import { Textarea } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from "react";
import { useForm } from "react-hook-form";
function Chat() {
    const {
        register,
        formState: { errors },
        handleSubmit, reset
    } = useForm();

    const onSubmit = async (data) => {

        console.log(data);
        setconverse([...converse, {from: "Humain", message:data.query}])
        reset()
        // try {
        //   const response = await axios.post(thisServer+"/datastore/upload/"+data.data, formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //     },
        //   });

        //   console.log('Upload successful:', response.data);
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
        // } catch (error) {
        //   console.error('Error uploading files:', error);
        //   toast({
        //     title: 'Something went wrong',
        //     description: "erreur réseau ou serveur",
        //     status: 'error',
        //     duration: 9000,
        //     isClosable: true,
        //   })
        // }
    };
    const [converse, setconverse] = useState([
        {
            from: "IA",
            message: "Bonjour en quoi puis-js vous aider? "
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