
 import Box from    "../Box"

const Kids = () => {
    return(
        <div >
            
            <div id="wrapper">
                    <div className="kid-section">
                        <div className="row">
                            <div className="col-lg-4" id="kid-txet">
                                <h1>Kid’s Corner</h1>
                            </div>

                            <div className="col-lg-8" id="kid-image">
                                <img  className=" img-fluid kidme" src= 'images/kids.png' alt=""/>
                            </div>
                             
                        </div>
                    </div>

                    <div className="wrapper-spaceship">
                    <div className="spaceship">
                        <Box header= 'Spaceship Maze'
                        title='Help the spaceship through the maze to get back to earth. Move through levels with increasing difficulty; each puzzle starts the ship in a different location. '
                                  
                        subtitle='Develop kids’ skills in strategizing, spatial awareness, hand-eye coordination, problem solving and more! Free to play, priceless for learning.' 
                       
                                        images='images/Rectangle 382.png' 

                                        link='https://toytheater.com/maze/'
                                       
                                       />
                                
                    </div> 
                    </div>

                    <div className="riskysection">
                        <Box header= 'Risky Way'
                        title='Risky Way is a free instant game. The highways of the future are risky and if you want
                         to survive you will need to be smarter than all of them combined. All you have to do in this
                          nerve-tingling racing game is click, hold, and let go. Of course, if you want to be an
                           effective driver who is able to survive you will have to know when to click, how long to hold,
                            and only let go at the appropriate time.'
                                
                                        images='images/robot1.png' 

                                        link='https://www.addictinggames.com/action/risky-way#url'


                                      />
        
                    </div> 

                        <div className="wrapper-pacsection">
                        <div className="pacsection">
                        <Box header= 'Pacman'
                        title='There is nothing like a little old school Pacman game right? The great arcade game Pac Man
                         was ported to the NES in 1988 and you can play it right here. Never played before?! What?! Eat
                          all the pellets to complete a stage while trying to score as many points as possible by eating
                           fruit and ghosts along the way! But there is more! Ever wonder how Pacman got started? Check out
                            the history of Pacman below and see how it all began.'
                                
                                        images='images/robot2.png' 

                                        
                                        link='https://www.pacman1.net/'
                                       />
        
                    </div> 
                        </div>
                
            </div>
         
        </div>
        
    );
}

export default Kids; 