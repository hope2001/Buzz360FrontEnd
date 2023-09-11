import { useTrashAgent } from '@/Services/Query/agentquery';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { useRef } from 'react'


export function DeleteThing({data, children}) {
    const { mutateAsync, isLoading: isLoadingTrashAgent, error: errorTrashAgentt } = useTrashAgent();
    const handleDelete = (itemId) => {
      // Call the delete mutation function when you want to delete an item.
    //   alert(itemId)
      mutateAsync(itemId);
    };
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
  
    return (
      <>
        <span onClick={onOpen}> {children} </span>
        {/* <Button onClick={onOpen}> {children} </Button> */}
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader> <i className="bi bi-warning"></i> Supprimer ?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
                {/* {JSON.stringify(data)} */}
                Etes vous sûre de vouloir supprimer {data.name} ?
              {/* Are you sure you want to discard all of your notes? 44 words will be
              deleted. */}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Non
              </Button>
              <Button onClick={()=> handleDelete(data.id)} colorScheme='red' ml={3}>
                Oui
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }