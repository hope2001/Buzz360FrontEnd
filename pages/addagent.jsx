import NavBar from "./components/partials/navbar";
import Link from "next/link"
import Sidebar from "./components/partials/sidebardash";
import DashLayout from "./components/Layout/dashboardLayout";
import { useEffect } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useFetchAgentData,useAddAgent } from '../Services/Query/agentquery';
import { useForm } from "react-hook-form";
import { useState } from "react";
function AddAgents() {
  const toast = useToast()
  const [isLoading, setisLoading] = useState(false)
    useEffect(() => {

    }, []);

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm()

    const {
        data: AgentList,
        isLoading: isLoadingResumeData,
        error: errorResumeData,
        refetch
      } = useFetchAgentData();
      const { mutateAsync, isLoading: isLoadingAddAgent, error: errorAddAgent } = useAddAgent();
      // const onSubmit = async (data) => {
      //   console.log(data);
      //  let body = {
      //     "name": "string",
      //     "description": "string",
      //     "prompt": "string",
      //     "prompt_type": "string",
      //     "temperature": 0,
      //     "model_name": "string",
      //     "interface_config": "string"
      //   }
      // };

      const onSubmit = async (data) => {

        try {
          console.log("Data", data);
          setisLoading(true)
          let body = {
            name: data.name,
            description: data.description,
            prompt: data.prompt,
            prompt_type: data.prompt_type,
            temperature: data.temperature,
            model_name: data.model_name,
            interface_config: '{1:2,2:1}',
            datastore_id: 1,

          }

          await mutateAsync(body);
          toast({
            title: 'Agent '+data.name+' en route 😎.',
            description: "Vous avez créer avec success votre agent",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
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
        <DashLayout>

<div className="container"> 
    <div className="flex justify-between p-3"> 
    <Heading noOfLines={2}>
            Agents
            </Heading>

            <Link href="/agents" >
        <Button colorScheme='teal' variant='solid'>
        Liste des Agents
  </Button></Link>
    </div>
</div>

            {/* <!-- component --> */}
            <div class="sm:px-1 w-full ">
             
                {/* <!-- component --> */}
                {/* <!-- component --> */}
{/* <script src="https://cdn.tailwindcss.com"></script> */}
{/* <body class="bg-gray-100"> */}
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6 text-center"></h1>
    <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Nom </label>
        <input {...register("name", { required: true })} class={errors.name ?" bg-red-100 text-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500": "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"}
          type="text" id="name"  placeholder="Alpha WebChat"/>
        {/* <span className="bg-red-300 text-center text-white text-bold w-full p-2 mt-5"> Le nom de l'agent est important</span> */}
          {errors.name && <span className="text-sm"> Donnée requise</span>}
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
        <input class={errors.description ?" bg-red-100 text-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500": "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"}
          type="text" id="description" {...register("description", { required: true })} placeholder=" Eg: This agent is for survey"/>
          {errors.description && <span className="text-sm"> Donnée requise</span>}
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Model</label>
        {/* <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/> */}
          <select {...register("model_name", { required: true })} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue={"GPT-3.5"}>GPT-3.5</option>
                <option value="GPT-4">GPT-4</option>
        </select>
        {errors.model_name && <span className="text-sm"> Donnée requise</span>}
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Température</label>
        <input {...register("temperature", { required: true })}  id="default-range" type="range" step="0.1" min="0" max="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" title="hello"/>
        {errors.temperature && <span className="text-sm"> Donnée requise</span>}
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Prompt</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="password" {...register("prompt", { required: true })}  defaultValue="As a customer support agent, please provide a helpful and professional response to the user's question or issue." placeholder=""/>
          {errors.prompt && <span className="text-sm"> Donnée requise</span>}
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Prompt type</label>
        {/* <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/> */}
          <select {...register("prompt_type", { required: true })} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue={"generique"}>Générique</option>
                <option value="standard">Standard-4</option>
        </select>
        {errors.prompt_type && <span className="text-sm"> Donnée requise</span>}
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Datasource</label>
        {/* <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/> */}
          <select {...register("datasource_id", { required: true })} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
        </select>
        {errors.datasource_id && <span className="text-sm"> Donnée requise</span>}
      </div>
      {/* <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="confirm-password" name="confirm-password" placeholder="********"/>
      </div> */}

      <button
        class="w-full bg-gray-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
        type="submit"> {isLoading? <Spinner color='white w-24' className="m-auto" /> : <span>Sauvegarder</span> }   </button>
    </form>
  </div>
{/* </body> */}
            </div>

        </DashLayout>




    );
}

export default AddAgents;