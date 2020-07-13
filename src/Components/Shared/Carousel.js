import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const Styles = styled.div`
  .CarouselItem {
    border-radius: 15px;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin:auto;
    width:100%;
    background-color:lightpink;
  }
`;

 const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
    

      <Styles>
     
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} >
        <Carousel.Item>
        <div class="imagen" >
          
         <center> <img
            height={600}
            width={650}
            
            class="center"
            className="height-50 w-80"
            src={require("../../Assets/2.jpg")}r
            alt="First slide"

            />
            </center> 
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div class="imagen" >
          
         <center> <img
            height={500}
            width={700}
            
            class="center"
            className="height-50 w-80"
            src={require("../../Assets/1.jpg")}r
            alt="First slide"

            />
            </center> 
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <center><img
          height={500}
            width={800}
            className="d-flex w-80"
            src={require("../../Assets/3.jpg")}
            alt="Third slide"
          /></center>
  
          <Carousel.Caption>
            <h3></h3>
            <p>
            </p>
          </Carousel.Caption>
 
        </Carousel.Item>
        <Carousel.Item>
        <div class="imagen" >
          
         <center> <img
            height={550}
            width={700}
            
            class="center"
            className="height-50 w-80"
            src={require("../../Assets/4.jpg")}r
            alt="First slide"

            />
            </center> 
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div class="imagen" >
          
         <center> <img
            height={500}
            width={700}
            
            class="center"
            className="height-50 w-80"
            src={require("../../Assets/5.jpg")}r
            alt="First slide"

            />
            </center> 
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
      </Styles>
      
    );


    
  }
  
export default ControlledCarousel