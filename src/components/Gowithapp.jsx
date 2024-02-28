import React from 'react'
import {Image,Stack,Text,Heading,Button, Card, CardBody, CardFooter, InputGroup, InputLeftAddon, Input, Box, SimpleGrid } from '@chakra-ui/react'
import style from "../styles/Gowithapp.module.css"
import { useState } from 'react'
export default function Gowithapp() {
  let [isClick,setClick]=useState(false)
  return (
    <div className={style.gofurther_container}>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  width="80%"
  m="auto"
  mt="50px"
  >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '400px' }}
    src='https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=600't
    alt='Caffe Latte'
  />

  <Stack  >
    <CardBody
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    width="80%"
    
   
    textAlign={"left"} >
      <Heading size='md'>Go further with the Property app</Heading>

      <Text py='2'>
      Save even more - Get up to 20% on select Property and earn double the points when you book on the app. Our app deals help you to save on property so you can get more offers and comforts it all on the way.
      </Text>
     <Text py="2" >
      Text yourself a download link for easy access
      </Text>
    </CardBody>
  
    <CardFooter display="flex" 
 gap="20px"
 >
    
 
 

 


<SimpleGrid columns={[1,null,null,2]} spacing='10px'>
  <Box > <InputGroup>
    <InputLeftAddon children='+91' /> 
     <InputGroup>
  <Input  placeholder='phone number' />
   </InputGroup>
   </InputGroup></Box>
  <Box > <Button variant='solid' colorScheme='green' w={"40%"} paddingLeft={"50%"} paddingRight={"50%"} onClick={()=>setClick(!isClick)}>
        Get the app
      </Button></Box>
 
</SimpleGrid>
    
      
    </CardFooter>
   
    {isClick?  <CardFooter
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    width="80%"
    
   
    textAlign={"left"} >
      
      <Text py="2">
    We’ve sent you a text message with a link to download the app.
      </Text>
    </CardFooter>:""}
    <CardFooter
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    width="80%"
    
   
    textAlign={"left"} >
      
       <Text py="2" >
    By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.
      </Text>
    </CardFooter>
  
   
  </Stack>
</Card>
    </div>
  )
}
