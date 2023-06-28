import { Card, CardBody, Image, Stack, Heading, Text,} from '@chakra-ui/react';
import React , {useState} from 'react';
import Modal3 from './Modal3';

const Bimg ={
  position:'relative',
 width:'100vh',
 height:'70vh',
  top:'0',
 bottom:'0',
 right:'0',
 left:'0', 
 zIndex: 1000,
}

const  Cardlist = (props) => {
  const[openModal3, setOpenModal3] = useState(false)

    return(
     

 <Card  maxW='lg' boxShadow={'1px 2px 3px 3px rgba(0,0,0,0.1)'} >
  <CardBody>

     <Image
      src={props.images}
      alt='pics'
      borderRadius='lg'
    /> 
    <Stack mt='6' spacing='3' >
      <Heading size='lg'>{props.header}</Heading>

      <div  >
    
      <Text color='blue.600' fontSize='1xl'>
        Prep Time:20mins
      </Text>
      

      <div className="charmaine" >
      <Text color='blue.600' fontSize='1xl'>
      Serves:6 people
      </Text>
       <div className="" >
      <button className='button4'   onClick={() => setOpenModal3(true)}>< img className='tab-img' /* style={arrow}  */src= 'images/arrow.png' alt=""/> </button>
      <Modal3 open = {openModal3} onClose= {() => setOpenModal3(false)}>
      < img style={Bimg}  src= 'images/Shwarma Sandwich Modal.png' alt=""/>
    
      </Modal3>
      </div>
      </div>
      </div>
    </Stack>
  </CardBody>
</Card> 

    )
}
export default  Cardlist;



/* import { forwardRef, Box, BoxProps } from '@chakra-ui/react' */

/* const Card = forwardRef<BoxProps, 'div'>((props, ref) => (
  <Box px='4' py='5' rounded='sm' shadow='lg' ref={ref} {...props} />
)) */