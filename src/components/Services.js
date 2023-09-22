import React from 'react'
import styled from 'styled-components'
import './Services.css'
import Fade from 'react-reveal/Fade';

function Services() {
  return (
    <div id="service">
    <Container>
    <Fade bottom>
       <Text>Services</Text>
       <div className='cards '>
       <div class="card w">
     <div class="textBox">
    <p class="text head">Wedding Albums</p>
    <span>Customer Satisfaction</span>
    <p class="text price">⭐⭐⭐⭐</p>
    </div>
    </div>
    <div class="card p">
     <div class="textBox">
    <p class="text head">Potrait Albums</p>
    <span>Customer Satisfaction</span>
    <p class="text price">⭐⭐⭐⭐⭐</p>
    </div>
    </div>
    <div class="card e">
     <div class="textBox">
    <p class="text head">Event Albums</p>
    <span>Customer Satisfaction</span>
    <p class="text price">⭐⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
</Fade >
    </Container>
    </div>
  )
}

export default Services


const Text = styled.h1`
margin-top: 50px;
    position: absolute;
    color: #ffffff90;
    text-align: center;
    width: 100%;
    
    
`

const Container = styled.div`
    min-height:100vh;
    background: rgb(7, 7, 7);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, #131317 66%, #111111 100%);

    @media screen and (max-width:800px) {
         
          width: 150vh;
        }
`
