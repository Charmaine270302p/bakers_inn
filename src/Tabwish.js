import { Tabs, TabList,TabPanels, TabIndicator,Divider, Tab, TabPanel, List, } from '@chakra-ui/react';
import CardBox from './CardBox';


const  Tabwish = (props) => {
    return(
        <Tabs mt={'40px'} p={'20px'} position={'relative'} variant='unstyled'  display={'flex'} flexDirection={'column'} alignItems={'center'} >
        <h1>{props.title}</h1>
        <div>
            <TabList >
                <Tab _selected={{color: 'rgb(45, 1, 111)'}} fontSize={'25px'} fontWeight={'bold'} color={'rgb(168, 160, 197)'}><p className='textname'>For Kids</p></Tab>
                <Tab _selected={{color: 'rgb(45, 1, 111)'}} fontSize={'25px'} fontWeight={'bold'} color={'rgb(168, 160, 197)'}><p className='textname'>For Vegans</p></Tab>
                <Tab _selected={{color: 'rgb(45, 1, 111)'}} fontSize={'25px'} fontWeight={'bold'} color={'rgb(168, 160, 197)'}><p className='textname'>For Family</p></Tab>
            </TabList>

             
            <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />

</div>

<Divider backgroundColor={'pink'} width={'100%'} height={'1px'}/> 
           
          
           <TabPanels width='100%' >
                <TabPanel>
                  <List  className='bb'  display={'flex'} gap={'30px'}>
                  <CardBox images= 'images/sandwich.png' header='Shwarma Sandwich' />
                  <CardBox images= 'images/sandwich.png' header='Shwarma Sandwich'/>
                  <CardBox images= 'images/sandwich.png' header='Shwarma Sandwich'/>
                  
                  </List>
                  
                </TabPanel>

                <TabPanel>
                  <List  className='bb' display={'flex'} gap={'30px'}>
                  <CardBox images= 'images/sweet.png'  header='Sweet Shortbread'/>
                  <CardBox images= 'images/sweet.png'  header='Sweet Shortbread'/>
                  <CardBox images= 'images/sweet.png' header='Sweet Shortbread'/>
                  </List>
                  
                </TabPanel>

                <TabPanel>
                  <List className='bb'  display={'flex'} gap={'30px'} >
                  <CardBox images= 'images/salmon.png' header='Salmon Strips'/>
                  <CardBox images= 'images/salmon.png' header='Salmon Strips'/>
                  <CardBox images= 'images/salmon.png'  header='Salmon Strips'/>
                  </List>
                  
                </TabPanel>

               
            </TabPanels>

        </Tabs>

    )

}

export default  Tabwish;




