import React from "react";
import styled from "styled-components";
import { withLayout } from "../partials/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../assets/arkaplan1.jpg";
import slide2 from "../assets/arkaplan2.jpg";
import { Link } from "react-router-dom";

const StyledHomePage = styled.div`
  height: 90vh;
  align-items: center;
  font-size: 30px;
  .divider {
    height: 10px;
    background-color: rgb(154, 59, 59);
`;

const StyledStyle = styled.div`
background-image: url(${(props) => props.imgUrl});
background-size: cover; /* This property ensures the background image covers the entire container */
background-repeat: no-repeat; /* Prevents the background image from repeating */
display: flex;
height: 100vh;
background-position: center center;
justify-content: center;
align-items: flex-start;
padding-top: 100px;

  .text-container {
    background-color: rgba(33, 158, 188, 0.8);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    font-size: 21px;
  }
  p {
    // width: 60%;
    text-align: center;
    color: black;
  }
`;

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Carousel showThumbs={false}>
        <StyledStyle imgUrl={slide1}>
        </StyledStyle>
        <StyledStyle imgUrl={slide2}>
          
        </StyledStyle>
      </Carousel>
      <div className="divider" />
      
    </StyledHomePage>
  );
};

export default withLayout(HomePage);