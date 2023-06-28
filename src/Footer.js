import { NavLink } from 'react-router-dom';

const footer = () => {

    return(

        <div className="footersection">
                       <div className="footercontent">
                            <img className=' line1' src= 'images/rec1.png' alt=""/> 
                            <img className='icon' src= 'images/icon.png' alt=""/>
                            <img className='line2' src='images/rec2.png' alt=""/> 
                         
                       </div>

                       <div className="row" id='allcontent'>
                      {/*  <div className="allcontent"> */}
                        <div className="col-lg-5">
                            <h3>Instagram Feed</h3>
                            <div className="picsection">
                                <img id='img_4' className='img-fluid' src= 'images/smallpic1.png' alt=""/> 
                                <img  id='img_4'  className= 'img-fluid' src= 'images/smallpic2.png' alt=""/>
                                <img id='img_4' className='img-fluid img_1' src='images/smallpic3.png' alt=""/> 
                            </div>
                           
                        </div>
                       
                        <div id='content_1'  className="col-lg-2">
                            <h3>Our Location</h3>
                            <p>1 Shepperton Road, Graniteside, Harare, Zimbabwe.</p>

                        </div>
                        <div className="col-lg-3" id="spansection">
                            <h3>Get In Touch With Us</h3>
                                <span>  08080151</span>
                                <span>08080152</span>
                                <span>+263 242 751 481</span>
                                <span>+263 242 710 334</span>
                                <span>marketing@bakersinnzim.com</span>
                        </div>
                        <div className="col-lg-2" id="sitesection">
                            <h3>Sitemap</h3>
                           <a href="#navbar">Home</a>
                           {/*  <NavLink to='/'>Home</NavLink> */}
                            <NavLink to='/About'>About Us</NavLink>
                            <NavLink to='/Products'>Products</NavLink>
                            <NavLink to='/Recipes'>Recipes</NavLink>
                            <NavLink to='/Kids'>Kids Corner</NavLink>
                           {/*  <a href="/">About Us</a>
                            <a href="/">Products</a>
                            <a href="/">Recipes</a>
                            <a href="/">Kids Corner</a> */}
                        </div>

                       {/*  </div> */}

                       </div>

                       <div className="all">
                        <div className="all-items">
                        <p>Subsidiary of</p>
                        <img className='footer-img' src= 'images/whitelogo.png' alt=""/> 
                        </div>
                        <p>Copyright © 2022 Bakers Inn. All rights reserved. Site by <span> NoWalls Pan Africa</span> </p>
                       </div>


        </div>
        
    );
}

export default footer;