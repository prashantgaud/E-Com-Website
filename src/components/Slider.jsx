import styled from "styled-components"
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`

// If we are writing position absolute then Patent should be relative
const Arrow= styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff7f7;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
opacity: 0.4;
cursor: pointer;
`;


const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide= styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;

`;


const ImageContainer= styled.div`
flex: 1;
height: 100%;
`; 

const Image = styled.img`
height: 80%;
`;


const Infocontainer= styled.div`
flex: 1;
padding: 50px;
`;

const Title =styled.h1`
font-size: 70px;
`;
const Desc =styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 600px;
letter-spacing: 3px;
`;
const Button =styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;




const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">  
           <ArrowLeft/>
        </Arrow>

        <Wrapper> 
        <Slide>
        <ImageContainer>
            <Image src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg" />
        </ImageContainer>
        <Infocontainer>
            <Title> Monsoon Sale </Title>
            <Desc> DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
        </Infocontainer>

        </Slide>  

        
        <Slide>
        <ImageContainer>
            <Image src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg" />
        </ImageContainer>
        <Infocontainer>
            <Title> Monsoon Sale </Title>
            <Desc> DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
        </Infocontainer>

        </Slide>  

        
        <Slide>
        <ImageContainer>
            <Image src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-1462637.jpg&fm=jpg" />
        </ImageContainer>
        <Infocontainer>
            <Title> Monsoon Sale </Title>
            <Desc> DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
        </Infocontainer>

        </Slide>  
        </Wrapper>


        <Arrow direction="right">  
           <ArrowRight/>
        </Arrow>
        
    </Container>
  )
}

export default Slider