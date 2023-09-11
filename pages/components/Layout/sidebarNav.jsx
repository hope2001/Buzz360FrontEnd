import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup,
    Stack,
    Radio,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { useState } from 'react'
import Sidebar from '../partials/sidebardash'


export function SidebarNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')
  
    return (
      <>
        {/* <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack>
        </RadioGroup> */}
        <Button className="bg-gray-900 my-5" colorScheme='blu' onClick={onOpen}>
         <i className="bi bi-stack mx-2"></i> Menu
        </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay  className="bg-gray-800"/>
          <DrawerContent className="bg-gray-800">
          <Sidebar/>
            {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
            <DrawerBody>
              <Sidebar/>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }