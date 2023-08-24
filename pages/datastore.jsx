import NavBar from "./components/partials/navbar";
import Link from "next/link"
import Sidebar from "./components/partials/sidebardash";
import DashLayout from "./components/Layout/dashboardLayout";
import { useEffect, useState } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { useFetchDatastore } from "@/Services/Query/datastorequery";
import AddDatastore from "./components/modals/adddatastore";
import { ManualClose } from "./components/modals/adddstor";
import AddDstorefile from "./components/modals/adddatastorefile";
import AddDstoreLink from "./components/modals/addLinkstorefile";
// import { adddatastorefile } from "./components/modals/adddatastorefile";
// import { useFetchDatastore,useTrashResumeData } from '../Services/Query/agentquery';

function Datastore() {
    const [showaddFile, setShowAddfile] = useState(false);
    const [showaddLink, setShowAddLink] = useState(false);
    const [agent, setAgent] = useState({});


    const {
        data: DsList,
        isLoading: isLoadingResumeData,
        error: errorResumeData,
        refetch
      } = useFetchDatastore();
    return (
        <DashLayout>

<div className="container"> 
    <div className="flex justify-between p-3"> 
    <Heading noOfLines={2}>
            Datastores
            </Heading>

            {/* <Link href="/addagent" >
        <Button colorScheme='purple' variant='solid'>
        <i className="bi bi-plus-circle mx-1"> </i>Nouvelle Base de donnée
  </Button></Link> */}
  <ManualClose/>
    </div>
</div>

            {/* <!-- component --> */}
            <div className="sm:px-1 w-full ">

                {/* <!-- component --> */}
                <div className="overflow-x-auto">
                    <div className="min-w-screen min-h-screenflex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                        <div className="w-full lg:w-5/6 mx-auto">
                            <div className="bg-white shadow-m rounded my-6">
                                <table className="min-w-max w-full table-auto rounded-xl overflow-hidden">
                                    <thead>
                                        <tr className="bg-gray-800 text-gray-100 uppercase text-sm leading-normal">
                                            <th className="py-3 px-6 text-left">Libelé</th>
                                            <th className="py-3 px-6 text-left">Description</th>
                                            <th className="py-3 px-6 text-center">Status</th>
                                            <th className="py-3 px-6 text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 text-sm font-light">
                                        {(!DsList || DsList.length== 0)&&<tr className="w-full p-1 bg-blue-200 ">
                                            <td colSpan="6" className="p-3 bg-gray-300 font-bold text-center w-full"> Aucune source disponible.</td>
                                            
                                        </tr>}
                                        {DsList?.map((agent, index)=>(
                                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 w-full">
                                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                                <div className="flex items-center">
                                                    {/* <div className="mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                            width="24" height="24"
                                                            viewBox="0 0 48 48"
                                                            style={{ fill:"#000000" }}>
                                                            <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                                        </svg>
                                                    </div> */}
                                                    <span className="font-medium"> {agent.label} </span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">
                                                    {/* <div className="mr-2"> */}
                                                        {/* <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" /> */}
                                                    {/* </div> */}
                                                    <span>  {agent.description}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="flex py-3 px-6 gap-1 text-center">{agent.visibility ?  
                                                     <i onClick={()=> alert("Voulez vous changer la visibilité de l'agent "+ agent .name)} className="bi bi-check-square-fill text-green-600 text-2xl"></i>  :
                                                     <i onClick={()=> alert("Voulez vous changer la visibilité de l'agent "+ agent .name)} className="bi bi-x-square-fill text-red-600 text-2xl"></i>  } 
                                                {/* <span className="bg-green-500 text-white py-2 px-3 rounded-md text-xs">   </span> */}
                                            </td>
                                            <td className="py-3 px-6 text-center">

                                            <Menu>
                                                <MenuButton className="p-0" as={Button} >
                                                    <i className="bi bi-wrench-adjustable-circle-fill
                                                Install text-xl"></i>
                                                </MenuButton>
                                                <MenuList> 
                                                    <MenuGroup className="bg-purple-200 rounded-md" title='Options'>
                                                    <Link href="/"><MenuItem> <i className="bi bi-folder-x  mr-2"></i>  Modifier</MenuItem></Link>
                                                    <MenuItem onClick={()=>(setShowAddLink(!showaddLink))} > <i className="bi bi-link mr-2"></i>  Ajouter une page Web</MenuItem>
                                                    <MenuItem onClick={()=>(setShowAddfile(!showaddFile),setAgent(agent))} > <i className="bi bi-file-earmark-plus-fill mr-2"></i>  Ajouter Fichier</MenuItem>
                                                    
                                                    <MenuItem> <span className="bg-red-400 w-full p-2 text-white rounded-md"> <i className="bi bi-trash3 mr-2"></i>  Supprimer</span> </MenuItem>
                                                   <MenuItem onClick={()=> alert('hope')} >  <span className="bg-purple-600 w-full p-2 text-white rounded-md"> <i className="bi bi-plugin mr-2"></i>  Soumettre </span> </MenuItem> 
                                                    </MenuGroup>
                                                </MenuList>
                                                </Menu>

                                                {/* <AdddatastoreFile show={showaddFile} setShow={setShowAddfile} /> */}
                                                {/* <adddatastorefile/> */}
                                                {/* <adddatastorefile  show={showaddFile} setShow={setShowAddfile}/> */}
                                               
                                                {/* <div className="flex item-center gap-4">
                                                    <div className="transform hover:text-purple-500 hover:scale-110">
                                                        <i className="bi bi-eye"></i>
                                                    </div>
                                                    <div className="transform hover:text-purple-500 hover:scale-110">
                                                    <i className="bi bi-pencil"></i>
                                                    </div>
                                                    <div className="transform hover:text-purple-500 hover:scale-110">
                                                    <i className="bi bi-trash"></i>
                                                    </div>
                                                </div> */}
                                            </td>
                                        </tr>
                                        )) 
                                            }
                                    </tbody>
                                </table>


                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddDstorefile data={agent} show={showaddFile} setShow={setShowAddfile} />
            <AddDstoreLink data={agent} show={showaddLink} setShow={setShowAddLink}/>        {/* <AddDatastore/> */}
                                           
        </DashLayout>




    );
}

export default Datastore;