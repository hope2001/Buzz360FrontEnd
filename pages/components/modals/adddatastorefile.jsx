import { collectionName, iaapi, thisServer } from '@/Services/Requests/env';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAddFileToDatastore } from '@/Services/Query/datastorequery';
import { useToast } from '@chakra-ui/react';
import { useFetchUserData } from '@/Services/Query/user';
import Axios from '@/Services/Requests/interceptor';
function AddDstorefile({ data, show, setShow }) {
  const typeItem = [
    { id: 1, label: "Fichier", type: "file" },
    { id: 2, label: "Addresse web", type: "url" },
  ]
  const [ftype, setftype] = useState({ id: 1, label: "Fichier", type: "file" })

  const toast = useToast()

  const toggleModal = () => {
    setShow(!show);
  };

  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm()
  const { mutateAsync, isLoading: isLoadingAddAgent, error: errorAddAgent } = useAddFileToDatastore();
  //   const { mutateAsync, isLoading: isLoadingAddAgent, error: errorAddAgent } = useAddFileToDatastore();

  const {
    data: currenntuser,
    isLoading: isLoadingCurrentUser,
    error: errorCurrentUser,
    refetch
  } = useFetchUserData();

  const onSubmit = async (datas) => {

    console.log(datas);



    try {

      if (ftype.type == "file") {
        const formData = new FormData();
        for (let i = 0; i < datas.file.length; i++) {
          formData.append('files', datas.file[i]);
        }
        console.log(formData);
        const response = await Axios.post(thisServer + "/datastore/upload/" + data.data+"?datastoreid="+data.id, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Upload successful:', response.data);
        if (response.data) {
          // alert(JSON.stringify(response.data))
          // let bod = {
          //   name: datas.name,
          //   description: datas.description,
          //   path: response.data.path,
          //   datastore_id: data.id
          // }
          // await mutateAsync(bod)
          // //   à revoir urgement 
          toast({
            title: 'Fichier(s) ajouté avec success à la base ' + data.data + ' 😎.',
            description: "Files uploaded with success.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          reset()
        }

      } else {

        const response = await axios.post(iaapi + "/insert_data/" + collectionName + "/" + datas.label.replace(" ", "_") + "__" + currenntuser.id + "/link?directory_or_link=" + datas.url);
        if (response.data) {
          console.log('Processing effectué avec success:', response.data);
          // alert(response.data)
          toast({
            title: 'La base ' + datastore.data + ' à été téléversée avec success 😎.',
            description: "Files uploaded with success.",
            status: 'info',
            duration: 9000,
            isClosable: true,
          })
        }

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
            <form onSubmit={handleSubmit(onSubmit)} className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true">
              <div className="flex justify-between p-2 ">
                <span className="bi bi- text-lg"> Ajout de donnée à <strong style={{ fontSize: "12px" }} className='text-bold bg-red-300 p-1 rounded-sm text-red-600' >{data?.label}</strong>  </span>
                <span onClick={toggleModal} className="bi bi-x-circle-fill text-2xl cursor-pointer"></span>
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
                  <input {...register("label", { required: true })} className={errors.name ? " bg-red-100 text-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" : "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"}
                    type="text" id="name" placeholder="base de donnée" />
                  {/* <span className="bg-red-300 text-center text-white text-bold w-full p-2 mt-5"> Le nom de l'agent est important</span> */}
                  {errors.name && <span className="text-sm"> Donnée requise</span>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"> Description </label>
                  <input {...register("description", { required: true })} className={errors.description ? " bg-red-100 text-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" : "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"}
                    type="text" id="name" placeholder="details" />
                  {/* <span className="bg-red-300 text-center text-white text-bold w-full p-2 mt-5"> Le nom de l'agent est important</span> */}
                  {errors.description && <span className="text-sm"> Donnée requise</span>}
                </div>
                <div style={{ fontSize: "12px" }} className="flex gap-4 mb-3">
                  <span className="">Type: </span>
                  {typeItem?.map((item, index) => (
                    <span key={index} title={item.label} onClick={() => setftype(item)} className="px-2 py-1 rounded-md cursor-pointer bg-gray-800 text-white"> {item.label} </span>
                  ))}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor={'file'}>
                    <span> {ftype.label} </span>

                  </label>
                  <input accept='.pdf, .csv, .txt, .docx, .pptx' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder='http://www.w3schools.com/'
                    type={ftype?.type} id={'file'} multiple {...register(ftype?.type, { required: true })} />
                  {errors.data && <span className="text-sm"> Donnée requise</span>}
                </div>

              </div>


              <div className="bg-gray-200 px-4 py-3 text-right">
                <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={toggleModal}><i className="fas fa-times"></i> Fermer</button>
                <button type="submit" className="py-2 px-4 bg-gray-900 text-white rounded hover:bg-gray-800 mr-2"><i className="fas fa-plus"></i> Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


export default AddDstorefile;

