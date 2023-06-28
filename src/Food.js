
const Food = (props) => {

    return(

        <div className="foodbox">
            <h4>{props.title}</h4>
            <img src={props.images} alt="scone" className="img-fluid me"/>
        </div>
        
    );
}

export default Food;