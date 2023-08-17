import NavBar from "./components/partials/navbar";
import Link from "next/link"
import Sidebar from "./components/partials/sidebardash";
import DashLayout from "./components/Layout/dashboardLayout";
import { useEffect } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useFetchAgentData,useTrashResumeData } from '../Services/Query/agentquery';
function AddAgents() {
    useEffect(() => {

    }, []);

    const {
        data: AgentList,
        isLoading: isLoadingResumeData,
        error: errorResumeData,
        refetch
      } = useFetchAgentData();
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
    <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Nom </label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" placeholder="John Doe"/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="description" name="description" placeholder=" Eg: This agent is for survey"/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Model</label>
        {/* <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/> */}
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>GPT-3.5</option>
                <option value="US">GPT-4</option>
                <option value="CA">TEST</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Température</label>
        <input id="default-range" type="range" step="1" min="0" max="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" title="hello"/>

      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Prompt</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="password" name="password" defaultValue="As a customer support agent, please provide a helpful and professional response to the user's question or issue." placeholder=""/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Datasource</label>
        {/* <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/> */}
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
        </select>
      </div>
      {/* <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="confirm-password" name="confirm-password" placeholder="********"/>
      </div> */}
      <button
        class="w-full bg-gray-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
        type="submit">Enregistrer</button>
    </form>
  </div>
{/* </body> */}
            </div>

        </DashLayout>




    );
}

export default AddAgents;