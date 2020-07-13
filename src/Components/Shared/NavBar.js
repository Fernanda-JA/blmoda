import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Component, Fragment } from 'react';


const Styles = styled.div`
  .navbar {
    background-color: white;
  }
  .navbar-brand,a, .navbar-nav {
    color: black;
    font: bold 85% monospace;
    font-size: 150%;
    &:hover {
      color: gray;
    }
  }
  .nav-link {
    color: black;
    font-size: 10pt;
    background-color: lightgreen;
    border-radius: 15px;
    &:hover {
      color: gray;
    }
  }
`;

export const NavBar = () => (
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a class="navbar-brand" href="#">Inicio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#inicio"> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#mujer">Mujeres</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#hombre">Hombres</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#niño">Niñ@s</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contacto">Contacto</a>
      </li>
    </ul>
  </div>
  </nav>
)

