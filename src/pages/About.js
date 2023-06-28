
import Box from '../Box';
import Core from "../Corevalue";


const About = () => {
    return(
        <div >
         

            <div id="wrapper">
                    <div className="about" id="abou">
                        <div className="row">
                            <h1>About Us</h1>
                        </div>
                        </div>

                         <div className="mission"> 
                            <div className="">
                                <div className="mission-sec">
                                   
                                           <img src= 'images/circle 1.png' alt=""/>  
                                       
                                        <div className="missiontxt">
                                            <h1>Our Mission</h1>
                                            <p>To sharpen our edge in the manufacture and marketing of quality baked products.</p>
                                        </div>
                                
                                        <div className="">
                                            <img className='img_3' src= 'images/circle 2.png' alt=""/>
                                        </div>
                                        <div className="missiontxt">
                                            <h1>Our Vision</h1>
                                            <p>To provide a nourishing, convenient and accessible answer to hunger’s call.</p>
                                        </div>

                                    </div>
                                   
                            </div>
                         </div> 

                         </div>

                        <div className="about-section">
                             <h1>Our Core Values</h1> 
                           <div className="core1">
                            <Core  images= 'images/Rectangle 22.png' 
                            header='Teamwork'
                            title='We set inspiring goals that we pursue with passion, unity and focus. We
                             support each other, build on our strengths and ensure that every player in our
                             team contributes fully. We play to win and realise 
                              .' />
                       
                       <Core  images= 'images/Rectangle 24.png' 
                            header='Respect'
                            title='We build self-esteem by treating each other fairly, communicating directly
                             and respectfully. We have empathy, discipline and build on our diversity as a
                              source of strength, creativity and innovation.' />

                        <Core  images= 'images/Rectangle 26.png' 
                            header='Integrity'
                            title='We build self-esteem by treating each other fairly, communicating directly
                             and respectfully. We have empathy, discipline and build on our diversity as a
                              source of strength, creativity and innovation.' />

                           </div>

                          <div className="core2">

                        <Core  images= 'images/aboutpic4.png' 
                            header='Commitment'
                            title='We build self-esteem by treating each other fairly, communicating directly
                             and respectfully. We have empathy, discipline and build on our diversity as a
                              source of strength, creativity and innovation.' />


                        <Core  images= 'images/aboutpic5.png' 
                            header='Integrity'
                            title='We build self-esteem by treating each other fairly, communicating directly
                             and respectfully. We have empathy, discipline and build on our diversity as a
                              source of strength, creativity and innovation.' />

                            </div>  
                        </div>
                               
                               
                                <div className="promise-section">
                        <Box header='PROMISE OF QUALITY'
                             title='Thank you for visiting our website. At Baker’s Inn, we are committed to delivering quality premium bread to our customers. We work with a team of over 1500 employees nationwide. Our aim is to uphold the highest ethical standards and perpetuate excellence in the delivery of our products. For us at Baker’s Inn, we aim to improve the accessibility of our bread. We are accountable to our stakeholders to deliver what we promise.'
                                            
                                    subtitle='We translate plans into actions; dreams into reality; strategies into achievements and tangible returns. We strive to be the best in our business and in our partnerships. We are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe who stock or consume our nourishing bread throughout Zimbabwe. We have built our top-quality brand and continue to grow as a company because of you. Thank you for your continued support of our brand.'
                             
                                 subtitle2=' We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together.'
                                 sign='C.E.O:'
                                 ss=' Ngoni Mazango'
                            images= 'images/man.png' />
        
                    </div>  
                    
            
         
      
        </div>
        
    );
}

export default About;