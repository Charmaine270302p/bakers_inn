/*  import '../avenir/stylesheet.css' */
 import Tabwish from '../Tabwish';
 import Food from '../Food';
 import Box from '../Box';
 import { useNavigate } from "react-router-dom"; 
 import { NavLink } from 'react-router-dom';
 import React , {useState} from 'react';
 import Modal from '../Modal';
 import Modal1 from '../Modal1';
/*  import Footer from '../Footer'; */
import Checkbox from "../Checkbox";






  const button ={
    backgroundColor: ' #B2904C',
    color:'rgb(251, 251, 251)',
    padding:'12px 30px 12px 30px',
    borderRadius:'6px',
    fontSize: '22px',
    fontWeight: '600',
  }


const Home = () => {

     const navigate = useNavigate();

     const[openModal, setOpenModal] = useState(false)

     const[openModal1, setOpenModal2] = useState(false)

    return(
        <div >
          

                 <div id="wrapper">
                    <div className="hero" id='hero'>
                        <div className="row">
                            <div className="col-lg-4" id='hero-content'>
                                <h1>Bringing you the <span className="underline">best value</span> at the <span className="underline">best prices.</span></h1>
                                <p>The freshest sandwiches you can make are with Baker’s inn soft white loaf.</p>
                                <a href="#first"><button className="but1">READ MORE </button></a>
                           
                         
                            </div>

                            <div className="col-lg-8">
                                <div className="bread-section">
                                    <img className='bread-1' src= 'images/bread1.png' alt=""/>
                                    <img className='bread' src= 'images/bread2.png' alt=""/>
                                    <img className='bread' src='images/bread3.png' alt=""/>
                                    <img className='bread' src= 'images/bread4.png' alt=""/>
                                </div>
                              
                            </div>
                        </div>
                    </div>

                    <div className="first" id="first">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1>About Baker’s Inn</h1>
                                </div>
                                <div className="col-lg-6">
                                    <p>It all started back in the eighties when Baker's Inn was just a
                                         small confectionery company that employed 40 people and produced
                                          about 30,000 loaves a day. We now aim to provide a nourishing,
                                           convenient and accessible answer to hunger’s call.</p>
                                          {/*  <button className="but1">Read more</button> */}
                                         {/*   <button onClick={() =>navigate('/Products')}>Read more</button>  */}
                                           <NavLink style={button}  to='/About'>READ MORE</NavLink>
                                        
                                </div>
                        </div>

                        <div className="pics">
                            <img src= 'images/pic1.png' alt=""/>
                            <img src= 'images/pic2.png' alt=""/>
                            <img src= 'images/pic3.png' alt=""/>
                            <img src=  'images/pic4.png' alt=""/> 
                    
                        </div>
                        </div>

                        </div>

                    <div className="product-range">

                        <h1>Our Product Range</h1>

                        <div className="pics">
                          
                            <Food images= 'images/slice-1.png' title='Bread' />
                            <Food images='images/pie-1.png' title='Meat Pies' />
                            <Food images= 'images/scones-1.png' title='Scones' />
                            <Food images= 'images/donut-1.png' title='Donuts' />
                        </div>

                         {/*  <button>VIEW COMPLETE RANGE</button>  */} 
                           <button onClick={() =>navigate('/Products')}>VIEW COMPLETE RANGE</button>
                      
                    </div>



                    <div className="toursection">
                        <Box header={ "Book A Factory Tour" } 
                        title='Keen on seeing how Baker’s inn products are made? Are you interested in a
                                     field trip day for your school’s class? Get in touch with us to book a
                                      tour of our factory that is closest to you. Fill in the booking form
                                       and we will get back to you.' 
                                        images='images/Rectangle 32.png' 
                                      /*  button='BOOK FACTORY TOUR' *//>

                            <button className='button1'  onClick={() => setOpenModal2(true)}>BOOK FACTORY TOUR</button>
                            <Modal1 open = {openModal1} onClose= {() => setOpenModal2(false)}>
                            <div className="form-modal1">

                                <h1>Book A Factory Tour </h1>
                                <div className="container">

                                    <form action="https://formspree.io/f/xeqwvrpb" method="POST" class="form">

                                        <div className="contact-modal1">
                                            <div className="subcontact4">
                                                <input type="" id="" name="" placeholder="Name of Organisation" />
                                                <input type="" id="" name="" placeholder=" Name of Contact Person"/>
                                            </div>

                                            <div className="subcontact4">
                                                <input type="" id="" name="" placeholder="Organization Address" />                        
                                                <input type="" id="" name="" placeholder="Organization’s Resident Town"/>
                                            </div>

                                            <div className="subcontact4">
                                                <input type="" id="" name="" placeholder="Contact Person’s Telephone" />      
                                                <input type="" id="" name="" placeholder="Contact Person’s E-mail"/>
                                            </div>

                                            <div className="subcontact3">
                                               <input type="" id="" name="" placeholder="Date of Visit"/>
                                                <select id="title" name="title">
                                                    <option value="title">Number of Participants</option>
                                                    <option value="mr">Mr</option>
                                                    <option value="mrs">Mrs</option>
                                                    <option value="miss">Miss</option>
                                                    <option value="dr">Dr</option>
                                                </select>
                                            </div>

                                                <select id="long-select" name="long-select">
                                                    <option value="title">Age Range of Participants</option>
                                                    <option value="mr">Mr</option>
                                                    <option value="mrs">Mrs</option>
                                                    <option value="miss">Miss</option>
                                                    <option value="dr">Dr</option>
                                                </select>

                                           
                                       </div> 

                                       <Checkbox  label="Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct."  label1 = 'Have Read The Safety Regulations'/>

                                         <input type="proceed" value="PROCEED TO NEXT STEP"/>   
                                    </form>
                                   </div>
                            </div> 

                            </Modal1>
                    </div> 

                   

                    <div className="donationsection">
                        <Box header='Request A Donation'
                             title='If you are holding an event that you wish to have us donate to,
                                    we’re more than glad to help. Fill in the donation request form
                                    for us to best understand how we can increase your event’s impact
                                    in the local community.'
                             images= 'images/Rectangle 31.png' 
                           /*  button='REQUEST DONATION' *//> 

                        
                           <button className='button2'  onClick={() => setOpenModal(true)}>REQUEST DONATION</button>
                            <Modal open = {openModal} onClose= {() => setOpenModal(false)} > 
                            <div className="form-modal">

    <h1>Request Product Donations</h1>
    <p> You can apply for product donations by completing this form, we will contact you should your application be successful. Please bear in mind that we will need at least 3 weeks’ notice to the date of your event</p>

<div className="container">
  
        <form action="https://formspree.io/f/xeqwvrpb" method="POST" class="form">

<div className="contact-modal">

    


<div className="subcontact4">
<input type="text" id="" name="" placeholder="Name of Organisation" />

        
<input type="text" id="" name="" placeholder=" Name of Contact Person"/>
</div>

<div className="subcontact4">
<input type="text" id="" name="" placeholder="Organization Address" />

        
<input type="text" id="" name="" placeholder="Organization’s Resident Town"/>
</div>

<div className="subcontact4">
<input type="text" id="" name="" placeholder="Contact Person’s Telephone" />

        
<input type="text" id="" name="" placeholder="Contact Person’s E-mail"/>
</div>

<div className="subcontact3">

<input type="text" id="" name="" placeholder="Your Name"/>

<select id="title" name="title">
             <option value="title">Your Title</option>
             <option value="mr">Mr</option>
             <option value="mrs">Mrs</option>
             <option value="miss">Miss</option>
             <option value="dr">Dr</option>
        </select>
       
        </div>


        <div className="subcontact5">



<select id="title" name="title">
             <option value="title">Your Title</option>
             <option value="mr">Mr</option>
             <option value="mrs">Mrs</option>
             <option value="miss">Miss</option>
             <option value="dr">Dr</option>
        </select>

        <select id="title" name="title">
             <option value="title">Your Title</option>
             <option value="mr">Mr</option>
             <option value="mrs">Mrs</option>
             <option value="miss">Miss</option>
             <option value="dr">Dr</option>
        </select>
       
        </div>

           </div>

    <input type="proceed" value="PROCEED TO NEXT STEP"/>   

        </form>
      </div>


</div> 
                            </Modal>
                                
                    
        
                    </div>   

                <div className=" mme">
                    <div className="kidcornersection">
                        <div className="row">
                            <div className="col-lg-7">
                                    <img className='img-fluid kidpic' src= 'images/mario-nobg.png' alt=""/>
                            </div>

                            <div className="col-lg-5" id='kid-content'>
                                <h1>Kid's Corner</h1>
                                <p>Let your children join the fun. Explore a place with exciting games and the top winners stand a chance to win exciting monthly prizes!</p>
                            {/*     <button className="but1">Play Games</button> */}
                                <button onClick={() =>navigate('/Kids')}>PLAY GAMES</button>
                            </div>
                          
                        </div>
                    </div> 
                </div>  

                     <div className="tabsection">
                        <Tabwish  title='Baker’s Recipes' />
                        
                
                    </div>   

            
                    <div className=" input-sec">
                    <div className="submitsection">
                        <div className="row">
                            <div className="col-lg-7" id="m2">
                                <h1> Get Notified about promotions we offer</h1>
                                {/* <div className="inputWithButton"> */}<form action="https://formspree.io/f/xeqwvrpb" method="POST" class="form">
                                    <input type="text" placeholder="your email"/>
                                    <button type="submit">SUBMIT</button>
                                   {/*  <input type="submit" value="SUBMIT"/>  */} 
                              {/*   </div> */}</form>
                            </div>

                            <div className="col-lg-5" id='m1'>
                                <div className="brea-section">
                                    <img className=' img-fluid brea' src= 'images/bread2.png' alt=""/>
                                    <img className=' img-fluid brea-2' src= 'images/bread1.png' alt=""/>
                                    <img className=' img-fluid brea' src='images/bread4.png' alt=""/>
                                </div>

                            </div>
                          
                        </div>
                    </div> 
                </div> 

          

              
                </div>
        
    );
}

export default Home; 