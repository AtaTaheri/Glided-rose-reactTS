import React from "react";
import {useContext} from 'react';
import {ShopContext} from "../../storage/GlidedRoseShop"
import ProductsList from "../layouts/ProductsList";
import TimeBarLayout from "../layouts/TimeBar";
import styled from "styled-components";

const MainPageContainer = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  height: 100%;
  border-radius: 15px;
  margin: 20px 40px; 
  overflow: hidden;
  box-shadow: 0px 5px 30px -5px rgba(0,0,0,0.33);
  @media only screen and (max-width: 1000px){
    margin: 10px 5px 0 5px;
  }
`

const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #183642ad;
`

const OverlayText = styled.p`
    color: #EAEAEA;
    font-size: 20px;
`


let MainPage = () => {

    const shopContext = useContext(ShopContext);
    return (
        <MainPageContainer>
             <ProductsList list={shopContext.items}/>
            <TimeBarLayout/>

            {shopContext.items.length === 0 &&
            <OverlayContainer>
                <OverlayText>You haven't added any products yet!</OverlayText>
            </OverlayContainer>
            }


        </MainPageContainer>
    );

}

export default MainPage;