import React, {useContext} from "react";
import styled from "styled-components";
import Button from "../components/Button";
import {Repeat, RightArrow} from '@styled-icons/boxicons-regular'
import {ShopContext} from "../../storage/GlidedRoseShop";

const TimeBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #183642;
  align-items: center;
  height: 70px;
  padding: 0 10px;
`

const TodayDate = styled.span`
  color: #EAEAEA;
  font-weight: bold;
  font-size: 17px;
`

const RestartIcon = styled(Repeat)`
    width: 15px;
`
const RightIcon = styled(RightArrow)`
    width: 15px;
`
const ButtonTexts = styled.span`
  @media only screen and (max-width: 1000px){
    display: none;
  }
`

const TimeBarLayout = () => {
    const shopContext = useContext(ShopContext);


    return (
        <TimeBarContainer>
            <Button onClick={shopContext.restart}>
                <ButtonTexts>Restart </ButtonTexts>
                <RestartIcon/>
            </Button>
            <TodayDate>{shopContext.date.toDateString()}</TodayDate>
            <Button onClick={shopContext.updateQuality}>
                <ButtonTexts>Tomorrow </ButtonTexts>
                <RightIcon/>
            </Button>
        </TimeBarContainer>
    );
}

export default TimeBarLayout;