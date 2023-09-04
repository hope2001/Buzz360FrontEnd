import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    ButtonGroup,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Select,
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'



import Link from "next/link"
import { useEffect } from "react"
import { Heading } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useFetchAgentData, useAddAgent } from '../../../Services/Query/agentquery';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { useFetchDatastore } from "@/Services/Query/datastorequery";
import axios from "axios";
import { collectionName, iaapi, prompt } from "@/Services/Requests/env";
import { ManualClose } from './adddstor'







export function AddAgentModel() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const router = useRouter()
    const toast = useToast()
    const [isLoading, setisLoading] = useState(false)
    const [temperature, settemperature] = useState(0)
    useEffect(() => {

    }, []);

    const {
        register,
        formState: { errors },
        handleSubmit,reset
    } = useForm()
    const { mutateAsync, isLoading: isLoadingAddAgent, error: errorAddAgent } = useAddAgent();
    const {
        data: AgentList,
        isLoading: isLoadingResumeData,
        error: errorResumeData,
        refetch
    } = useFetchAgentData();

    const {
        data: DsList,
        isLoading: isLoadingDst,
        error: errorDst,
    } = useFetchDatastore();

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
        // console.log(data);

        try {
            console.log("Data", data);
            setisLoading(true)
            let body

            if(data.prompt !== ""){

                body = {
                   name: data.name,
                   description: data.description,
                   prompt: data.prompt,
                   prompt_type: data.prompt_type,
                   temperature: value,
                   model_name: data.model_name,
                   interface_config: '{1:2,2:1}',
                   datastore_id: data.datasource_id
   
               }
            }else{
                body = {
                    name: data.name,
                    description: data.description,
                    prompt: data.prompt_type,
                    prompt_type: data.prompt_type,
                    temperature: value,
                    model_name: data.model_name,
                    interface_config: '{1:2,2:1}',
                    datastore_id: data.datasource_id
    
                }
            }
            console.log(body);
            const response = await mutateAsync(body);


            if (response) {
                toast({
                    title: 'Agent ' + data.name + ' en route 😎.',
                    description: "Votre agent a été  initialisé avec success.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                reset()
                router.push("/agents")
            } else {
                toast({
                    title: 'Something went wrong',
                    description: "erreur réseau ou serveur",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            }
        }
        catch (error) {
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


    const [value, setValue] = useState(0)
    const handleChange = (value) => setValue(value)

    return (
        <>
            <Button ref={btnRef} className='bg-gray-700' colorScheme='' onClick={onOpen}>
                <i className="bi bi-plus-circle mx-2"></i> Nouvel Agent
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'lg'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader> Ajouter un agent </DrawerHeader>

                    <DrawerBody>
                        <div className="sm:px-1 w-full ">
                            <div className="container mx-auto py-2">
                                <h1 className="text-2xl font-bold mb-1 text-center"></h1>
                                <form className="w-full max-w-s mx-auto bg-white p-5 rounded-md shadow-m" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"> Nom </label>
                                        <Input {...register("name", { required: true })} className={errors.name ? " bg-red-100 text-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" : "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"}
                                            type="text" id="name" placeholder="Alpha WebChat" />
                                        {/* <span className="bg-red-300 text-center text-white text-bold w-full p-2 mt-5"> Le nom de l'agent est important</span> */}
                                        {errors.name && <span className="text-sm"> Donnée requise</span>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                                        <Input className={errors.description ? " bg-red-100 text-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" : "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"}
                                            type="text" id="description" {...register("description", { required: true })} placeholder=" Eg: This agent is for survey" />
                                        {errors.description && <span className="text-sm"> Donnée requise</span>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Model</label>
                                        {/* <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/> */}
                                        <Select {...register("model_name", { required: true })} id="countries" classNamee="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option defaultValue={"GPT-3.5"}>GPT-3.5</option>
                                            <option value="GPT-4">GPT-4</option>
                                        </Select>
                                        {errors.model_name && <span className="text-sm"> Donnée requise</span>}
                                    </div>
                                    <div className="mb-4">
                                        <span className="flex justify-between">

                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Température</label>
                                        </span>
                                        <Slider
                                            className="w-full"
                                            min={0}
                                            max={1}
                                            step={0.10}
                                            flex='1'
                                            focusThumbOnChange={false}
                                            value={value}
                                            onChange={handleChange}
                                        >
                                            <SliderTrack className='bg-gray-700'>
                                                <SliderFilledTrack />
                                                </SliderTrack>
                                                <SliderThumb fontSize='sm' boxSize='30px' children={value} />
                                        </Slider>
                                        {/* <input onChange={(e) => alert(e.target.value)} {...register("temperature", { required: true })} id="default-range" type="range" step="0.1" min="0" max="1" className="w-full h- bg-gray-200 rounded-lg appearance-non cursor-pointer dark:bg-gray-700" title={temperature} /> */}
                                        {errors.temperature && <span className="text-sm"> Donnée requise</span>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Prompt</label>
                                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                            type="text" id="password" {...register("prompt")} defaultValue="" placeholder="As a customer support agent, please provide a helpful and professional response to the user's question or issue." />
                                        {errors.prompt && <span className="text-sm"> Donnée requise</span>}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Prompt type</label>
                                        {/* <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/> */}
                                        <Select {...register("prompt_type", { required: true })} id="countries" className=" text-gray-900 text-sm rounded-md  w-full p-2.5 dark:placeholder-gray-700 border">
                                          
                                           { prompt?.map((item, index)=>(
                                            <option key={index} className="p-2 my-2" value={item.label}> {item.label} </option>
                                           ))
                                            }
                                        </Select>
                                        {errors.prompt_type && <span className="text-sm"> Donnée requise</span>}
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex justify-between my-3">

                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Datasource</label>  <ManualClose btnc="Nouvelle base"/>
                                        </div>
                                        {/* <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/> */}
                                        <Select {...register("datasource_id", { required: true })} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            {DsList?.map((dst, index) => (
                                                <option key={index} value={dst.id}> {dst.label} </option>
                                            ))}
                                            <option defaultChecked>Choisisez une source</option>
                                        </Select>
                                        {errors.datasource_id && <span className="text-sm"> Donnée requise</span>}
                                    </div>
                                    {/* <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Confirm Password</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="confirm-password" name="confirm-password" placeholder="********"/>
      </div> */}
     

                                    <button
                                        className="w-full bg-gray-800 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                                        type="submit"> {isLoading ? <Spinner color='white w-24' className="m-auto" /> : <span>Sauvegarder</span>}   </button>
                                </form>
                            </div>
                        </div>
                    </DrawerBody>

                    {/* <DrawerFooter>
                        <Button variant='' className="bg-red-600 text-white" mr={3} onClick={onClose}>
                            Fermer
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        </>
    )
}