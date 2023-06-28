
/* import ControlledComponent from "../Formlist"; */


const Contact = () => {
    return(
        <div >
          

            <div id="wrapper">
                    <div className="contact">
                        <div className="row">
                          
                                <h1>Contact Us</h1>
                            
                        </div>
                
                    </div>

                    <div className="factory"> 
                            <div className="factory-sec">
                                <div className="row">
                                    <div className="col-lg-6">
                                           <img className='' src= 'images/rec1co.png' alt=""/>  
                                       
                                        <div className="">
                                            <h1>Harare Bread Factory</h1>
                                            <p>1 Shepperton Road, Graniteside, Harare</p>
                                            <span>+263 242 710334, +263 242 751481, </span>
                                            <br/>
                                            <span>+263 242 751572, +263 242 758659</span>
                                            <p>VOIP: 08677006178</p>
                                            <p>Econet Toll Free: 08080151, 08080152</p>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="image-1">
                                            <img className='' src= 'images/rec2co.png' alt=""/>
                                        </div>
                                        <div className="">
                                            <h1>Bulawayo Bread Factory</h1>
                                            <p>22 A Bellevue Road, Belmont, Bulawayo</p>
                                            <span>+263 9 78279, +263 9 68826, +263 9 68381,</span>
                                            <br/>
                                            <span>+263 9 68383, +263 9 69592, +263 9 76693</span>
                                            <p>VOIP: 08677006179</p>
                                            <p>Econet Toll Free: 08080151, 08080152</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                         </div> 



                    </div>

<div className="tablesection">
    <div className="table-section">
      <div>
        <table >
          <thead>
            <tr> 
              <th>
      
                <div>Depot</div>
              </th>
              <th> 
           
                <div>Address</div>
              </th>
              <th>
            
                <div>Phone Number</div> 
              </th>
        
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chinhoyi Depot</td>
              <td>94/95 Josiah Tongogara St, Industrial Site, Chinhoyi</td>
              <td>0772 318 309</td>
        
            </tr>
            <tr>
              <td>Bindura Depot</td>
              <td>461 Luton Road, Industrial Site, Bindura</td>
              <td>066 2107317</td>
        
            </tr>
            <tr>
              <td>Murehwa Depot</td>
              <td>Stand number 351 Murehwa Growth Point</td>
              <td>0652 122 514</td>
       
            </tr>
            <tr>
              <td>Mutare Depot</td>
              <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
              <td>020 60715</td>
        
            </tr>
            <tr>
              <td>Hwange Depot</td>
              <td>29 Derby Drive, Hwange Industrial Site</td>
              <td>0281 2820105</td>
         
            </tr>
            <tr>
              <td>Chiredzi Depot</td>
              <td> 329 Lion Drive, Chiredzi</td>
              <td>039 266 333</td>
           
            </tr>
            <tr>
              <td> Masvingo Depot</td>
              <td>1310 Mineral Road, Masvingo</td>
              <td>054 2220 858</td>
          
          </tr>
            <tr>
              <td>Gweru Depot</td>
              <td>1843 Main Street, Gweru</td>
              <td>054 2220 858</td>
       
          </tr>
            <tr>
              <td>Zvishavane Depot</td>
              <td>Shabanie Mine Club, Noelville, Zvishavane</td> 
              <td>0772 395567</td>
           
          </tr>
          </tbody>
        </table>
      </div>
    </div>
      </div>


      <div className="enquiriesection">
      <img className=' img-fluid brea' src= 'images/contact-rectangle.png' alt=""/>
      <div className="gap">
      <div className="content1">
        <h6>For job enquiries , email your CV to</h6>
        <a href="/">hr@bakersinnzim.com</a>
      </div>

      <div className="content2">
        <h6>For general enquiries, email</h6>
        <a href="/">marketing@bakersinnzim.com</a>
      </div>

      </div>     
        
      </div>   

<div className="formsection">

    <h1>Request A Callback</h1>
    <p>Complete the form below and we will respond within 24 hours.</p>

<div className="container">
  
         <form action="https://formspree.io/f/xeqwvrpb" method="POST" class="form">

<div className="contact-first">

         <div className="subcontact1">

<select id="title" name="title">
             <option value="title">Your Title</option>
             <option value="mr">Mr</option>
             <option value="mrs">Mrs</option>
             <option value="miss">Miss</option>
             <option value="dr">Dr</option>
        </select>
        <input type="text" id="lname" name="lastname" placeholder="Your Name"/>
        </div>


<div className="subcontact2">
<input type="text" id="fname" name="firstname" placeholder="Your Phone Number" />

        
<input type="text" id="ename" name="emailname" placeholder="Your E-Mail"/>
</div>

           </div>

            <div className="charmy">
            <select id="ff" name="ff">
                <option value="australia">Select Area Of Interest</option>
                <option value="canada">Web-development</option>
                <option value="usa">Web-design</option>
            </select> 

            <select id="ff" name="ff">
               <option value="australia">Nature Of Enquiry</option>
               <option value="canada">Canada</option>
               <option value="usa">USA</option>
            </select> 


            <select id="ff" name="ff">
               <option value="australia">Do You Want To Be Contacted By Phone</option>
               <option value="canada">Canada</option>
               <option value="usa">USA</option>
            </select> 

            </div>
  
    <textarea name="subject" id="subject" placeholder="Your Message" cols="30" rows="10"></textarea>


    <input type="submit" value="SUBMIT"/>  

        </form>
      </div>


</div> 

{/* <div className="latifa">
<ControlledComponent/>
</div> */}

          
            
        </div>
        
    );
}

export default Contact; 