import React from 'react'
import './Contact.css'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  return (
    <div id="contact">
    <Container>
        
        <ImageContact>
        

        <p>
            <h2>OPEN FOR ASSIGNMENTS</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem debitis voluptates magnam iste, amet dolore aut? Modi optio cupiditate dolorum quaerat laudantium neque voluptatibus numquam reiciendis nemo soluta nostrum sint fuga corporis veniam ab repellendus
            <br />
            <br />
            <br />
            Phone: 980######98
            <br />
            Email: ani#####@gmail.com
        </p>
        
          
          
            {/* <img src="https://images.pexels.com/photos/4424567/pexels-photo-4424567.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> */}
        <div class="carder">
            <a class="singup">Contact Me</a>
            <div class="inputBox1">
                <input type="text" required="required" />
                <span class="user">Name</span>
            </div>

            <div class="inputBox">
                <input type="text" required="required" />
                <span>Email</span>
            </div>

            <div class="inputBox">
                <input type="password" required="required" />
                <span>Message</span>
            </div>
            <div className="btnGrp"><button class="enter"> Send  <Icon /></button> </div>
            

        
    </div>

        </ImageContact>
        
    </Container>
    </div>
  )
}

export default Contact



const Container = styled.div`
    height: 100vh;
    background: rgb(7, 7, 7);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, #131317 66%, #111111 100%);
    
    color: #ffffff94;
    width: 100vw;
    border-top: 1px solid grey;
    

    
    h1 {
        position: absolute;
        font-size: 30px;
        text-align: center;
        width: 100%;
        margin-top: 50px;
    }

    img {
        
        height: 100vh;
        width: auto;

    }
`
const ImageContact = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;
    left: 0;

    p {
        height: 600px;
        width: 30vw;
        background-color: #0000005b;
        padding: 10px 30px;
        margin-left: 20vh;
        border-radius: 30px;
        font-size: 25px;

        h2 {
            font-weight: bold;
            font-size: 50px;
        }
        
    }
`

const Icon = styled(SendIcon)`
    padding-left: 10px;
`
