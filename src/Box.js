

const Box = (props) => {

    return(

        <div className="Box">
                       <div className="Boxcontent">
                       <div className="col-lg-6" id='content'>
                                <h1>{props.header}</h1>
                                <p className="p-txt1">{props.title}</p>
                                <p className="p-txt2">{props.subtitle}</p>
                                <p className="p-txt3">{props.subtitle2}</p>
                                <button>{props.button}</button>
                               
                                <a target="_blank" href={props.link} rel="noreferre">PLAY GAME</a>

                               

                              <div className="signture"><h3>{props.sign} <span>{props.ss}</span></h3></div>  
                            </div>
                            <div className="col-lg-6" id="blue">
                                <img src={props.images} alt="scone" className="img-fluid me"/>
                                
                            </div>

                       </div>
                          
        </div>
        
    );
}

export default Box;