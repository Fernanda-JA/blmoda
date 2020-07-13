import React from 'react';
import ControlledCarrousel  from '../../Components/Shared/Carousel';
import Retroaxios from '../../Components/Shared/Retroaxios';
import styled from 'styled-components';
import Details from '../Details/Details';
import Mujeres from '../Stock/stock';
import Hombres from '../Stock/hombre';
import Niños from '../Stock/niños';

const Styles = styled.div`
  .titulo{
    font-color:blue;
    background-color:lightpink;
  }
  body{
    position:relative;
  }
`;


export const HomePage = () => {
return (
<div>
    <h1>
    </h1>
    <br></br>
    <br></br>
    <br></br>
    <h2 style={{ color:'black', background:'white', fontFamily:'Century Gothic'}}>
    
    <center >
    <img
            height={100}
            width={300}
            
            class="center"
            className="height-50 w-80"
            src={require("../../Assets/PIE.jpg")}
            />
  
    <img
            height={100}
            width={300}
            
            class="center"
            className="height-50 w-80"
            src={require("../../Assets/LOGO1.jpg")}
            />
            
             <img
            height={100}
            width={300}
            
            class="center"
            className="height-50 w-80"
            src={require("../../Assets/PIE2.jpg")}
            />
    <br></br> 
  
    </center>
     </h2>
     <div class="container">
  <div id="inicio">
    <h1 class="display-4"> </h1>
  </div>
  </div>
    <ControlledCarrousel/>
    <div class="container">
  <div id="detalles">
    <h1 class="display-4"> </h1>
  </div>
  </div>
    <Details/>
    <div class="container">
  <div id="mujer">
    <h1 class="display-4"> </h1>
  </div>
  </div>
  <br></br> <br></br>
  <h5 style={{ color:'black', background:'white',fontSize:'40px', fontFamily:'Century Gothic'}}>
  <center>Mujeres</center>  
  </h5>
  
    <Mujeres></Mujeres>
    <div class="container">
  <div id="hombre">
    <h1 class="display-4"> </h1>
  </div>
  </div> <br></br><br></br>
  <h5 style={{ color:'black', background:'white',fontSize:'40px', fontFamily:'Century Gothic'}}>
  <center>Hombres</center> 
  </h5>
    <Hombres></Hombres>
    <div class="container">
  <div id="niño">
    <h1 class="display-4"> </h1>
  </div>
  </div> <br></br><br></br>
  <h5 style={{ color:'black', background:'white',fontSize:'40px', fontFamily:'Century Gothic'}}>
  <center>Niñ@s</center>
  </h5>
    <Niños></Niños>
    <div class="container">
  <div id="contacto">
    <h1 class="display-4"> </h1>
  </div>
  </div>
    <div class="card-footer text-muted">
    <center>&reg;BL MODA <br></br>
    Contacto <br></br>
    E-mail: blzapateria@gmail.com <br></br>
    Teléfono: +521 55 1199 263</center>
  </div>
</div>)
};
export default HomePage;
