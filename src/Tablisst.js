import { Tabs, TabList,TabPanels, TabIndicator,Divider, Tab, TabPanel, List, } from '@chakra-ui/react';
import CardBox1 from './Cardbox1.js';


const mwandy ={
  
  width:'100%',

}

const  Tablisst = (props) => {
    return(
        <Tabs mt={'40px'} p={'20px'} position={'relative'} variant='unstyled'  display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <h1 color={'rgb(45, 1, 111)'} fontWeight={'bold'}>{props.title}</h1>
        <div>
            <TabList >
                <Tab _selected={{color: 'rgb(45, 1, 111)'}} fontSize={'25px'} fontWeight={'bold'} color={'rgb(168, 160, 197)'}><p className='textname'>Bread</p></Tab>
                <Tab _selected={{color: 'rgb(45, 1, 111)'}} fontSize={'25px'}  fontWeight={'bold'} color={'rgb(168, 160, 197)'}><p className='textname' >Meat Pies</p></Tab>
                <Tab _selected={{color: 'rgb(45, 1, 111)'}} fontSize={'25px'}  fontWeight={'bold'} color={'rgb(168, 160, 197)'}><p className='textname'>Scones</p></Tab>
                <Tab _selected={{color: 'rgb(45, 1, 111)'}} fontSize={'25px'}  fontWeight={'bold'} color={'rgb(168, 160, 197)'}><p className='textname' >Donuts</p></Tab>
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
                <TabPanel style={mwandy}>
                  <List className='bb'   display={'flex'} gap={'30px'} >
                  <CardBox1 images= 'images/bread4.png' header='Premium Soft White Loaf'  title='Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.'/>
                  <CardBox1 images= 'images/bread2.png' header='Family Loaf High Energy Brown' title='Our Family Loaf High Energy Brown loaves are a great source of fibre, high in energy and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs – anything! The Family Loaf has 21 slices.'/>
                  <CardBox1 images= 'images/bread3.png' header='Family Loaf Soft White' title='Our Family Loaf Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Family Loaf has 21 slices.'/>
                  
                  </List>
                  
                </TabPanel>

                <TabPanel>
                  <List className='bb'  display={'flex'} gap={'30px'}>
                  <CardBox1 images= 'images/pies-1.png'  header='Premium Soft White Loaf'  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                  <CardBox1 images= 'images/pies-1.png'  header='Family Loaf High Energy Brown'  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                  <CardBox1 images= 'images/pies-1.png' header='Family Loaf Soft White'  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                  </List>
                  
                </TabPanel>


                <TabPanel>
                  <List className='bb'  display={'flex'} gap={'30px'} >
                  <CardBox1 images= 'images/sconefree.png' header='Sugar Free Scone'  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                  <CardBox1 images= 'images/sconefree.png' header='Sugar Free Scone' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                  <CardBox1 images= 'images/sconefree.png'  header='Sugar Free Scone' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                  </List>
                  
                </TabPanel>


                <TabPanel>
                  <List className='bb'  display={'flex'} gap={'30px'} >
                  <CardBox1 images= 'images/chocolatedonut.png' header='Chocolate Donut'  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                  <CardBox1 images= 'images/whitedonut.png' header='Chocolate Donut'  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                  <CardBox1 images= 'images/chocolatedonut.png'  header='Chocolate Donut'  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                  </List>
                  
                </TabPanel>

               
            </TabPanels>

        </Tabs>

    )


}


export default  Tablisst;