import {useState} from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'


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

export const Mujeres = () => (
    <Fragment>
      <br></br>
      
      <CardDeck>
      <Card>
        <Card.Img variant="top" src="https://http2.mlstatic.com/zapatos-de-mujer-balenciaga-tenis-mujer-tenis-casual-mujer-D_NQ_NP_708526-MCO31010743558_062019-F.jpg" />
            <Card.Body>
            <Card.Title>Categoría: Mujeres </Card.Title>
                <Card.Text>
                Modelo:5637E <br></br>
                Precio: $1200 <br></br>
                Color: Rosa/Negro <br></br>
                Tallas: 22-26 cm

                
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/43/4a/59/434a598a9493d9bc4262353788d65fe6.jpg" />
            <Card.Body>
            <Card.Title>Categoría: Mujeres </Card.Title>
                <Card.Text>
                Modelo:AWW37E <br></br>
                Precio: $1000 <br></br>
                Color: Blanco <br></br>
                Tallas: 22-26 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/cf/ff/df/cfffdf0e507b6bcce8d30e5eb9ea25b3.jpg" />
            <Card.Body>
            <Card.Title>Categoría: Mujeres </Card.Title>
                <Card.Text>
                Modelo:QW637E <br></br>
                Precio: $1100 <br></br>
                Color: Blanco <br></br>
                Tallas: 22-26 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i0.wp.com/ae01.alicdn.com/kf/H508c6bd30e1a48dabf535544b6ed02a5W/Zapatillas-de-Tenis-para-Mujer-Tenis-Blancos-Zapatillas-Tenis-Mujer-c%C3%B3modos-zapatillas-de-deporte-calzado-de.jpg_350x350.jpg" />
            <Card.Body>
            <Card.Title>Categoría: Mujeres </Card.Title>
                <Card.Text>
                Modelo:TY37E <br></br>
                Precio: $1200 <br></br>
                Color: Blanco <br></br>
                Tallas: 22-26 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i0.wp.com/ae01.alicdn.com/kf/HTB1rWtSeBWD3KVjSZKPq6yp7FXaL/BZBFSKY-2020-moda-8-5-cm-tacones-altos-botines-de-mujer-negro-Oto%C3%B1o-Invierno-zapatos-mujeres.jpg_350x350.jpg" />
            <Card.Body>
            <Card.Title>Categoría: Mujeres </Card.Title>
                <Card.Text>
                Modelo:7337E <br></br>
                Precio: $1200 <br></br>
                Color: Negro <br></br>
                Tallas: 22-26 cm
                </Card.Text>
            </Card.Body>
      </Card>
    </CardDeck>
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/03/c4/49/03c4493387ab9045be483692bb91b587.jpg" />
            <Card.Body>
            <Card.Title>Categoría: Mujeres </Card.Title>
                <Card.Text>
                Modelo:5637E <br></br>
                Precio: $1200 <br></br>
                Color: Negro <br></br>
                Tallas: 22-26 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTi88BGwzo7K3_rp_eusyVuoZhyTsgfbt2Tjg&usqp=CAU" />
            <Card.Body>
            <Card.Title>Categoría: Mujeres </Card.Title>
                <Card.Text>
                Modelo:AWW37E <br></br>
                Precio: $1000 <br></br>
                Color: Negro <br></br>
                Tallas: 22-26 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://ae01.alicdn.com/kf/HTB1Vcm.NpXXXXcNaXXXq6xXFXXXo/Houndstooth-altos-zapatos-mujeres-fiesta-platfrom-zapatos-de-tac-n-fino-de-moda-Nueva-primavera-caliente.jpg" />
            <Card.Body>
            <Card.Title>Categoría: Mujeres </Card.Title>
                <Card.Text>
                Modelo:QW637E <br></br>
                Precio: $1100 <br></br>
                Color: Blanco/Negro <br></br>
                Tallas: 22-26 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNzNMamFoCNFIsUthvJHnkHkG3Jdz9meKeeQ&usqp=CAU" />
            <Card.Body>
            <Card.Title>Categoría: Mujeres </Card.Title>
                <Card.Text>
                Modelo:TY37E <br></br>
                Precio: $1200 <br></br>
                Color: Café/Negro <br></br>
                Tallas: 22-26 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUcqu_yrXhVxCO8AyHi679uaoWjFgGGLTVSQ&usqp=CAU" />
            <Card.Body>
            <Card.Title>Categoría: Mujeres </Card.Title>
                <Card.Text>
                Modelo:4Q37E <br></br>
                Precio: $1200 <br></br>
                Color: Amarillo <br></br>
                Tallas: 22-26 cm
                </Card.Text>
            </Card.Body>
      </Card>
    </CardDeck>
    </Fragment>
  );
  
  export default Mujeres;