import React from 'react';
//import NavBarProject from '../Components/NavBarProject';
import CarouselHomePage from '../Components/Carousel';
import Container  from 'react-bootstrap/Container';
const Home=() =>{
    return(

    <>  
     <Container className="col-6">
        <div className="contenedor">
            <CarouselHomePage/>
        </div>
    </Container> 
      
    
    </>
       //<NavBarProject/>
       
    );
}

export default Home;