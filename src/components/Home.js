import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';


function Home() {
  return (
    <Container>

    <Zoom left>
        <Text >
            <h1>
            Hello, I am Anirudh A.
            I am a portrait photographer based in India.
            </h1>
       
        </Text>
        </Zoom>
            
        <ImageContainer>
        <ProfileImg src="/images/Ani.png" alt="" />
        </ImageContainer>
    </Container>
  )
}

export default Home


const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, #131317 66%, #111111 100%);    
    @media screen and (max-width: 800px){
        width: 100vh;
        
        
        
    }
`

const Text = styled.div`
    width: 50vw;
    font-size: 47px;
    font-family: 'Nunito', sans-serif;
    z-index: 5;

    position: absolute;
    color: #ffffffa0;
    top: 170px;
    left: 100px;
    align-self: center;

    @media screen and (max-width: 1460px){
        font-size: 25px;
        width: 30vw;
        margin-top: 100px;
        
        
    }

    @media screen and (max-width: 800px){
        font-size: 10px;
        width: 25vh;
        text-align: center;
        
        
        
        
    }


`

const ProfileImg = styled.img`
    height: 90vh;
    width: 90vh;
    position: absolute;
    
    margin-top: 50px;
    bottom: 0;
    right: 0;
    opacity: 0.6;

    @media screen and (max-width: 1460px){
        height: 80vh;
    width: 80vh;
        
        
    }

    @media screen and (max-width: 800px){
        display: none;
        
    }
    
`

const ImageContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: flex-end;
    
`




