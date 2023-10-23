import {
    Drawer,
    DrawerBody, DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, Box
} from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { useEffect } from "react";
import { useToast } from '@chakra-ui/react';
import { useFetchAgentData, useAddAgent } from '../../../Services/Query/agentquery';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useFetchDatastore } from "@/Services/Query/datastorequery";
import CodeEditor from '../partials/codeContainer';
import { ui } from './deployAgent';








export function DeployAgent({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const router = useRouter();
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [temperature, settemperature] = useState(0);
  useEffect(() => {
  }, []);

  const {
    register, formState: { errors }, handleSubmit, reset
  } = useForm();
  const { mutateAsync, isLoading: isLoadingAddAgent, error: errorAddAgent } = useAddAgent();
  const {
    data: AgentList, isLoading: isLoadingResumeData, error: errorResumeData, refetch
  } = useFetchAgentData();

  const {
    data: DsList, isLoading: isLoadingDst, error: errorDst,
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
      setisLoading(true);
      let body;

      if (data.prompt !== "") {

        body = {
          name: data.name,
          description: data.description,
          prompt: data.prompt,
          prompt_type: data.prompt_type,
          temperature: value,
          model_name: data.model_name,
          interface_config: '{1:2,2:1}',
          datastore_id: data.datasource_id
        };
      } else {
        body = {
          name: data.name,
          description: data.description,
          prompt: data.prompt_type,
          prompt_type: data.prompt_type,
          temperature: value,
          model_name: data.model_name,
          interface_config: '{1:2,2:1}',
          datastore_id: data.datasource_id
        };
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
        });
        reset();
        router.push("/agents");
      } else {
        toast({
          title: 'Something went wrong',
          description: "erreur réseau ou serveur",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    }
    catch (error) {
      setisLoading(false);
      console.log(error);
      toast({
        title: 'Something went wrong',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }

    setisLoading(false);
  };


  const [value, setValue] = useState(0);
  const handleChange = (value) => setValue(value);
  const front = `<html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <title>Chatbot Plugin</title>
    </head>
    <body>
      <h1>Chatbot Plugin</h1>
      <div id="chat-container">
        <div id="chat-output"></div>
        <input type="text" id="user-input" placeholder="Type your message..."/>
        <button id="send-button">Send</button>
      </div>
    
      <script src="plugin.js"></script>
    </body>
    </html>`;

  const plug = String(`document.addEventListener('DOMContentLoaded', () => {
        const chatOutput = document.getElementById('chat-output');
        const userInput = document.getElementById('user-input');
        const sendButton = document.getElementById('send-button');
      
        sendButton.addEventListener('click', () => {
          const userMessage = userInput.value;
          if (!userMessage) return;
      
          // Send user message to the chatbot API
          fetch('http://localhost:2500/chat/21')
            .then(response => response.json())
            .then(data => {
              // Display chatbot's response
              const chatMessage = document.createElement('div');
              chatMessage.classList.add('message');
              chatMessage.innerHTML = "<strong>You:</strong> {userMessage}<br><strong>Chatbot:</strong>} {data.message}";
              chatOutput.appendChild(chatMessage);
              userInput.value = '';
            })
            .catch(error => {
              console.error('Error:', error);
            });
        });
      })`);

  //   <strong>You:</strong> ${userMessage}<br><strong>Chatbot:</strong> ${data.message}`
  // const endpoint = iaapi + "/chatbot?collect_name=" + collectionName + "&user_id=" + dstore?.data.data + "&query=" + data?.query + "&json_data=[]"
  return (
    <>
      <span ref={btnRef} className='bg-gray-70' colorScheme='' onClick={onOpen}>
        <i className="bi bi-balloon mr-2"></i> Déployer
      </span>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'xl'}

      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> Déployer l'Agent </DrawerHeader>

          <DrawerBody className="bg-purple-20">
            {/* {JSON.stringify(data)} */}


            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton className='bg-gray-800 text-white'>
                    <Box as="span" flex='1' textAlign='left'>
                      Chatbot Front view{JSON.stringify(data)}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CodeEditor>
                    {/* {front} */}
                    {/*  */}
                    {`
                      <script src="https://databoot.io/plugins/widgt.js></script>
                      <script>
                        let data = {groupid: "MyDatastore__1"}
                        DataBootChatBotUi(data)
                      </script>`}
                  </CodeEditor>

                </AccordionPanel>
              </AccordionItem>
{/* 
              <AccordionItem>
                <h2>
                  <AccordionButton className='bg-gray-800 text-white'>
                    <Box as="span" flex='1' textAlign='left'>
                      plugin.js
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <code>
                    <pre>

                      {plug}
                    </pre>
                  </code>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton className='bg-gray-800 text-white'>
                    <Box as="span" flex='1' textAlign='left'>
                      Agent Api
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CodeEditor>

                  </CodeEditor>
                </AccordionPanel>
              </AccordionItem> */}
            </Accordion>




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
  );
}
