import React from 'react'
import img from "../assets/ruj7_fdbd_220311.jpg"
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <Main>
            <Text>
                Welcome Choose Your Game
            </Text>
            <Hold>
            <Link to="/alphabet">
                <First>
                    
                </First>
            </Link>
            <Link to="/number">
                <Second></Second>
            </Link>
            <Link to="/shape">
                <Third></Third>
            </Link>
            </Hold>
        </Main>
      </Container>
    </div>
  )
}

export default HomeScreen;
const Third = styled.div`
    width: 200px;
    height: 400px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 10px 0 10px;
    transition: all 400ms;

    &:hover{
        cursor: pointer;
        transform: scale(1.01);
    }
`
const Second = styled.div`
    width: 200px;
    height: 400px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 10px 0 10px;
    transition: all 400ms;

    &:hover{
        cursor: pointer;
        transform: scale(1.01);
    }
`
const First = styled.div`
    width: 200px;
    height: 400px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 10px 0 10px;
    transition: all 400ms;

    &:hover{
        cursor: pointer;
        transform: scale(1.01);
    }
`
const Hold = styled.div`
    display: flex;
`
const Text = styled.div`
    /* font-family: "Poppins"; */
    font-size: 40px;
    color: #6b0080;
    font-weight: bolder;
    margin-bottom: 20px;
`
const Main = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
`
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
`
