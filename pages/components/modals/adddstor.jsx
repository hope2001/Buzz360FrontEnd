import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react'

  import { useDisclosure } from '@chakra-ui/react'
  import { Input } from 'postcss'
  import { useRef }  from 'react'
  import { Spinner } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { useAddDatastore } from '@/Services/Query/datastorequery'
import { collectionName, iaapi } from '@/Services/Requests/env'
import axios from 'axios'
export function ManualClose() {


  const [fileInputs, setFileInputs] = useState([]);

  const addFileInput = () => {
    setFileInputs([...fileInputs, {}]);
  };

  const removeFileInput = (index) => {
    const updatedFileInputs = [...fileInputs];
    updatedFileInputs.splice(index, 1);
    setFileInputs(updatedFileInputs);
  };

    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter()
    const toast = useToast()
    const [isLoading, setisLoading] = useState(false)
    const [typee, setTypee] = useState("text")
      useEffect(() => {
  
      }, []);
  
      const {
        register,
        formState: { errors },
        handleSubmit,reset
      } = useForm()
      const { mutateAsync, isLoading: isLoadingAddAgent, error: errorAddAgent } = useAddDatastore();

      const onSubmit1 = async (data) => {
        console.log(data);
    //     try {
    //       console.log("Data", data);
    //       let body 
    //       setisLoading(true)
    //       if (data.type == "text"){
    //       body = {
    //         label: data.label,
    //         description: data.description,
    //         types: data.type,
    //         data: data.data,
    //         visibility: data.visibility

    //       }
    //     }else if(data.type == "file"){
    //         const formData = new FormData();
    //         formData.append("data", data.file[0]);
    //         console.log(formData)
    //         body = {
    //             label: data.label,
    //             description: data.description,
    //             types: data.type,
    //             data: formData,
    //             visibility: data.visibility
    
    //           }

    //       }

    //     //   const response = await axios.post(urlia + '?reunion=' + data.category, formData, {
    //     //     headers: {
    //     //       "Content-Type": "multipart/form-data",
              
    //     //     },

    //       const response = await mutateAsync(body);
    //       if (response){ 
    //         const responseapi = await axios.post(iaapi + '/create_index_payload/'+ collectionName +'/'+ response&&response.id , {
    //    headers: {
    //      "Content-Type": "multipart/form-data",
         
    //    },
    //  });}
          
    //       if (response && responseapi){
    //         toast({
    //         title: 'La base  '+data.label+' initialisée 😎.',
    //         description: "Votre base est initialisé avec success.",
    //         status: 'success',
    //         duration: 9000,
    //         isClosable: true,
    //       })
    //       router.push("/datastore")
    //     }else{
    //       toast({
    //         title: 'Something went wrong',
    //         description: "erreur réseau ou serveur",
    //         status: 'error',
    //         duration: 9000,
    //         isClosable: true,
    //       })
    //     }
    //     }
    //     catch (error) 
    //     {
    //       setisLoading(false);
    //       console.log(error)
    //       toast({
    //         title: 'Something went wrong',
    //         description: error.message,
    //         status: 'error',
    //         duration: 9000,
    //         isClosable: true,
    //       })
    //     }
    
    //     setisLoading(false)
      };



      const onSubmit = async (data) => {

        try {
          console.log("Data", data);
          setisLoading(true)
          let body = {
            label: data.label,
            description: data.description,
            visibility: data.visibility
          }

          const response = await mutateAsync(body);
          console.log(response);

          if (response){ 
            const responseapi = await axios.post(iaapi + '/create_index_payload/'+ collectionName +'/'+ response?.data);
          if (response && responseapi ){
            toast({
            title: 'Datastore '+data.label+' créé 😎.',
            description: "Votre Datastore est initialisé avec success.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          reset()
          router.push("/datastore")
        }else{
          toast({
            title: 'Something went wrong',
            description: "erreur réseau ou serveur",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
        }}
          
        catch (error) 
        {
          setisLoading(false);
          console.log(error)
          toast({
            title: 'Something went wrong',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
    
        setisLoading(false)
      };

  
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <Button onClick={onOpen} colorScheme='purple' variant='solid'>
        <i className="bi bi-plus-circle mx-1"> </i>Nouvelle Base de donnée
  </Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Créer une base de donnée</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <form className="w-full max-w-s mx-auto bg-white p-8 " onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"> Titre </label>
        <input {...register("label", { required: true })} className={errors.name ?" bg-red-100 text-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500": "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"}
          type="text" id="name"  placeholder="Alpha WebChat"/>
        {/* <span className="bg-red-300 text-center text-white text-bold w-full p-2 mt-5"> Le nom de l'agent est important</span> */}
          {errors.label && <span className="text-sm"> Donnée requise</span>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
        <input className={errors.description ?" bg-red-100 text-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500": "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"}
          type="text" id="description" {...register("description", { required: true })} placeholder=" Eg: This agent is htmlFor survey"/>
          {errors.description && <span className="text-sm"> Donnée requise</span>}
      </div>
      {/* <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 flex justify-between" htmlFor="email"> 
        <span>Type</span> 
        <span onClick={addFileInput} className='bi bi-plus-circle-fill text-purple text-xl'></span> 
        </label>

          <select onChange={(e)=> alert(e.value)} {...register("type", { required: true })} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option >Sélectionnez le type de donnée</option>
                <option onClick={()=> setTypee("file")} value={"file"}>Fichier</option>
                <option onClick={()=> setTypee("text")} value="text">Text</option>
                <option onClick={()=> setTypee("text")} value="text">Lien web</option>
        </select>
        {errors.type && <span className="text-sm"> Donnée requise</span>}
      </div> */}

      {/* <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 flex justify-between" htmlFor={'source'}>
          <span>Source</span>
          
        <span className='bi bi-trash-fill text-red-500 text-xl'></span> 
        </label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type={typee} id={'source'} {...register("data")}  />
          {errors.data && <span className="text-sm"> Donnée requise</span>}
      </div> */}


{/* <span className={fileInputs.length >0 && "bg-gray-100 p-2 rounded-sm flex flex-col w-full"}>
{     fileInputs.map((input, index) => ( <div key={index} className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 flex justify-between" htmlFor={'source'+index}>
          <span>Source {index+1} </span>
          
        <span onClick={() => removeFileInput(index)} className='bi bi-trash-fill text-red-500 text-xl'></span> 
        </label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type={typee} id={'source'+index} {...register("data"+index)}  />
          {errors.data && <span className="text-sm"> Donnée requise</span>}
      </div>))}</span> */}

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Status</label>
          <select {...register("visibility", { required: true })} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value={true} defaultValue={true}>Visible</option>
                <option value={false}>Inactif</option>
        </select>
        {errors.visibility && <span className="text-sm"> Donnée requise</span>}
      </div>


      <button
        className=" mt-5 w-full bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
        type="submit"> {isLoading? <Spinner color='white w-24' className="m-auto" /> : <span>Sauvegarder</span> }   </button>
    </form>

    {/* <div>
      <button onClick={addFileInput}>Add File Input</button>
      <form>
        {fileInputs.map((input, index) => (
          <div key={index}>
            <input type="file" />
            <button type="button" onClick={() => removeFileInput(index)}>
              Remove
            </button>
          </div>
        ))}
      </form>
    </div> */}
            </ModalBody>
  
            {/* <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>
      </>
    )
  }