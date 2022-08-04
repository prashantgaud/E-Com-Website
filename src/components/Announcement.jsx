import styled from "styled-components"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 600;
`

const Announcement = () => {
  return (
    <Container>
        Super se upar Deals!  Free Shipping on Orders above 1000 Rs
    </Container>
  )
}

export default Announcement