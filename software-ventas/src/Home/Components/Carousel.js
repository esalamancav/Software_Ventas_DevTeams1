import React from 'react';
import {Carousel} from 'react-bootstrap';
import logoMINTIC from "./logoMINTIC.png";
import logoUDEA from "./logoUDEA.png";
import logoMisionTic from "./logoMisionTic.png";
import "./Carousel.css";

const CarouselHomePage = () => {
    return(
    <>
    <h1>Software de ventas DevTeams1</h1>
    
        <Carousel variant="dark">
            <Carousel.Item interval={1000}>
                <img
                className="img-responsive center-block"
                src={logoMisionTic}
                alt="First slide"
                width="800"
                height="400"
                />
            <Carousel.Caption>
                <h3>Mision Tic 2022</h3>
                <p>Una iniciativa del MinTic que busca formar 50000 programadores</p>
            </Carousel.Caption>
            </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-800 h-400"
                    src={logoUDEA}
                    alt="Second slide"
                    width="800"
                    height="400"
                    />
                <Carousel.Caption>
                <h3>Universidad de Antioquia</h3>
                <p>Universidad encargada del proceso formativo</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-800 h-400"
                src={logoMINTIC}
                alt="Third slide"
                width="800"
                height="400"
                />
                <Carousel.Caption>
                <h3>MINTIC</h3>
                <p>Iniciativa impulsada por el MinTic</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    
    </>
    );
}

export default CarouselHomePage;