
import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Container = styled.div`
  height: 60px;
 
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
 
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  
  
`;

const Input = styled.input`
  width: 250px;
  padding: 0px;
  margin: 0px;
  border: 0px;
  height: 30px;

`;



const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;

`;



const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

`;




const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search for products, brands and more" />
            <SearchTwoToneIcon/>

          </SearchContainer>
        </Left>
        <Center>
          <Logo>TrendBazaar</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
          <ShoppingBagIcon/>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;