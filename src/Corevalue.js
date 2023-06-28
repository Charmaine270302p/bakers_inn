const Core = (props) => {

    return(

        <div className="Value">
                       <div className="Corecontent">
                                <img src={props.images} alt="" />
                                <div className="content">
                                    <h3>{props.header}</h3>
                                    <p>{props.title}</p>
                                </div>
                                
                       </div>
        </div>
        
    );
}

export default Core;