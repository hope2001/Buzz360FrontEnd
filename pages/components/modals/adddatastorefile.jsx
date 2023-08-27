import React from 'react'
import { collectionName, iaapi, thisServer } from '@/Services/Requests/env'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import { useAddFileToDatastore } from '@/Services/Query/datastorequery';
import { useToast } from '@chakra-ui/react'
function AddDstorefile({data,show, setShow}) {
    const toast = useToast()
    
  const toggleModal = () => {
    setShow(!show);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm()
  const { mutateAsync, isLoading: isLoadingAddAgent, error: errorAddAgent } = useAddFileToDatastore();
//   const { mutateAsync, isLoading: isLoadingAddAgent, error: errorAddAgent } = useAddFileToDatastore();



const onSubmit = async (datas) => {
    const formData = new FormData();
    for (let i = 0; i < datas.files.length; i++) {
      formData.append('files', datas.files[i]);
    }

    try {
      const response = await axios.post(thisServer+"/datastore/upload/"+data.data, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
      if(response.data){
        let bod = {
            name: datas.name,
            description: datas.description,
            path: response.data.path,
            datastore_id: data.id
          }
        //   await mutateAsync(bod)
        //   à revoir urgement 
        toast({
            title: 'Fichier(s) ajouté avec success à la base '+data.data+' 😎.',
            description: "Files uploaded with success.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          reset()
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      toast({
        title: 'Something went wrong',
        description: "erreur réseau ou serveur",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };


  return (
    <div>

      {show && (
        <div className="fixed  z-100 overflow-y-auto top-0 w-full left-0">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-600 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <form  onSubmit={handleSubmit(onSubmit)} className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true">
            <div className="flex justify-between p-2 ">
                <span className="bi bi- text-lg"> Ajout de fichier à <strong className='text-bold text-purple-600' >{data?.label}</strong>  </span>
                <span  onClick={toggleModal} className="bi bi-x-circle-fill text-2xl cursor-pointer"></span>
            </div>
              {/* <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                
                <label className="font-medium text-gray-800">Name</label>
                <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
                <label className="font-medium text-gray-800">Url</label>
                <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
              </div> */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* {JSON.stringify(data)} */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"> Titre </label>
                <input {...register("label", { required: true })} className={errors.name ?" bg-red-100 text-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500": "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"}
                type="text" id="name"  placeholder="Alpha WebChat"/>
                {/* <span className="bg-red-300 text-center text-white text-bold w-full p-2 mt-5"> Le nom de l'agent est important</span> */}
                {errors.name && <span className="text-sm"> Donnée requise</span>}
            </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"> Description </label>
                <input {...register("description", { required: true })} className={errors.description ?" bg-red-100 text-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500": "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"}
                type="text" id="name"  placeholder="details"/>
                {/* <span className="bg-red-300 text-center text-white text-bold w-full p-2 mt-5"> Le nom de l'agent est important</span> */}
                {errors.description && <span className="text-sm"> Donnée requise</span>}
            </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor={'file'}>
          <span>Fichier</span>
          
        </label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="file" id={'file'} multiple {...register("files", { required: true })}  />
          {errors.data && <span className="text-sm"> Donnée requise</span>}
      </div>
            
            </div>


              <div className="bg-gray-200 px-4 py-3 text-right">
                <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={toggleModal}><i className="fas fa-times"></i> Fermer</button>
                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i className="fas fa-plus"></i> Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


export default AddDstorefile;

