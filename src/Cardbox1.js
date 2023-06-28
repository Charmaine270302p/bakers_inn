import { Card, CardBody, Image, Stack, Heading, Text,} from '@chakra-ui/react'

const  Cardlist = (props) => {
    return(
     

 <Card  maxW='lg' boxShadow={'1px 2px 3px 3px rgba(0,0,0,0.1)'} backgroundColor={'rgb(247,246,231)'}>
  <CardBody display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

     <Image width={'50%'}  src={props.images} alt='pics'   borderRadius='lg'  /> 
   
    <Stack mt='6' spacing='3' textAlign={'Center'}>
      <Heading size='lg' textAlign={'center'}>{props.header}</Heading>
    
      <Text color='blue.600' fontSize='1xl' > {props.title} </Text>
       
     
    
    </Stack>
  </CardBody>
</Card> 

    )
}

export default  Cardlist;