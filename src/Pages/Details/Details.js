import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import React, { Component, Fragment } from 'react';
import Image from 'react-bootstrap/Image'

export const Details = () => (
<Fragment>
<br></br>
  <br></br>
  <font size="5">
  <p class="text-center">Nuestra página web permite al
   usuario visualizar los diferentes tipos de calzado que ofrece nuestra compañia.<br></br>
   Llevamos más de cinco años en el mercado laboral.</p> </font>
  <br></br>
  <h1 style={{ color:'black', background:'lightblue', fontFamily:'Arial'}}>
  </h1>
  <br></br>
  <br></br>
  <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://labombacha.com/wp-content/uploads/2017/05/tacones-bordados.jpeg" />
    <Card.Body>
      <Card.Title>Categoría: Mujeres </Card.Title>
      <Card.Text>
         Nuestro sistema cuenta con un amplio catálogo para el calzado femenino.
         <br></br>Siempre tenemos calzado en tendencia.
        </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/a7/2c/87/a72c870bbe7ead60db6ed0eba304f7fe.jpg" />
    <Card.Body>
      <Card.Title>Categoría: Hombres</Card.Title>
      <Card.Text>
      El extenso calzado masculino con el que contamos, le permite tener diferentes opciones.
  
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://ae01.alicdn.com/kf/HTB1fHescfc3T1VjSZPfq6AWHXXa0/MHYONS-ni-os-zapatos-ni-o-luminoso-zapatillas-de-deporte-ni-os-ni-as-zapatos-LED.jpg_960x960.jpg" />
    <Card.Body>
      <Card.Title>Categoría: Niños </Card.Title>
      <Card.Text>
      El catálogo infantil está pensado para que los niños tengan diferente tipos de calzado a su corta edad.
    </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</Fragment>
);
export default Details;


