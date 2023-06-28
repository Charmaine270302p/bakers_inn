
/*  import Tabwish from "../Tabwish";

const Products = () => {
    return(
        <div >

           
                <div className="wrapper">
                    <div className="content">
                        <h1>The Finest of Baker’s Tik Tok Community Recipes</h1>
                        <p>Make the finest croissants worthy of    Paris from your     home
                        #Croissant #Zimbabwe #Paris #Baker’s_Inn</p>
                        <span>@The_Bakers_Inn</span> 

                   </div>

                   <div className="recipe-images">
                    <div className="">
                        <img className='' src= 'images/recipe1.png' alt=""/>
                        <img className='' src= 'images/breakfast.png' alt=""/>
                        </div>
                        <div className="">
                        <img className='' src='images/chimodho.png' alt=""/>
                        <img className='' src= 'images/factorybread.png' alt=""/>
                        </div>

                   </div>
                   </div>

           
        
          
            <div className="tabsection">
                <Tabwish  title='Our Recipes' />
                
            </div>   
        </div>
        
    );
}

export default Products; */
/* public/images/icon.png */



import croissant from '../imgs/recipe1.png';
import breakfast from "../imgs/breakfast.png";
import chimodho from "../imgs/chimodho.png";
import factorybread from "../imgs/factorybread.png";
import { useState } from "react";
import Tabwish from "../Tabwish";
import Carousel from "../Carousel";


const Recipes = () => {
  const [recipeText, setRecipeText] = useState(
    "Make the finest croissants worthy of Paris from your home #Croissant #Zimbabwe #Paris #Baker's_Inn"
  );

  const handleTextChange = (text) => {
    setRecipeText(text);
  };

  const images = [
    {
      src: croissant,
      alt: 'Image 1',
      title: 'Image 1 Title',
      description: 'This is the description for Image 1.',
    },
    {
      src:breakfast ,
      alt: 'Image 2',
      title: 'Image 2 Title',
      description: 'This is the description for Image 2.',
    },
    {
      src: chimodho,
      alt: 'Image 3',
      title: 'Image 3 Title',
      description: 'This is the description for Image 3.',
    },
    {
    src: factorybread ,
      alt: 'Image 4',
      title: 'Image 4 Title',
      description: 'This is the description for Image 4.',
    },
  ];

  const texts = [
    'Make the finest croissants worthy of Paris from your home #Croissant #Zimbabwe #Paris #Baker’s_Inn',
    'English breakfast done right with Bakers Inn Bread #British #Bakers #Breakfast',
    'Forget Chimodho, here’s a better recipe that makes use of those same ingredients #Chimodho #Local #Baker’s_Inn',
    'Ever wondered how our bread is made? Check this out  #Baker’s_Inn #Baker #Zimbabwe',
  ];

  return (
    <div>
      <section className="recipes">
        <div className="recipesContainer">
          <div className="row">
          <div className="col-lg-6" id="recipe-content">
            <h1>The Finest of Baker's Tik Tok Community Recipes</h1>
            <p>{recipeText}</p>
            <span>@The_Bakers_Inn</span>
          </div>
          <div className="col-lg-6" >
            <Carousel images={images} texts={texts} onTextChange={handleTextChange} />
          </div>
          </div>
        </div>
      </section>
      <div className="tabsection">
                <Tabwish  title='Our Recipes' />
                
            </div>  
     
    </div>
  );
};

export default Recipes




