import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    FormControl,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import { Input } from 'postcss'
import { useState ,useRef }  from 'react'



function AddDatastore() {
    const initialRef = useRef();
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)
  
    return (
      <>
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Use Overlay one
        </Button>

        <Button
          ml='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
          Use Overlay two
        </Button>


        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>0
            
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Custom backdrop filters!</Text>
              <FormControl>
               <div>First ok ok</div>
              {/* <FormLabeL>First ok ok</FormLabeL> */}
              <Input ref={initialRef} placeholder='First name' />
                    </FormControl>

            <FormControl mt={4}>
              {/* <FormLabel>Last name</FormLabel> */}
              <div>Last name</div>
              <Input placeholder='Last name' />
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }



export default AddDatastore;