import React from "react";

import {AddProductLayout} from "../layouts/AddProduct";
import styled from "styled-components";

const AddPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;
  flex-direction: column;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  min-width: fit-content;
  width: 40vw;
  margin: 20px auto;
  box-shadow: 0px 5px 30px -5px rgba(0,0,0,0.33);
  @media only screen and (max-width: 1000px){
      width: 90vw;

  }
`


let AddPage = () => {


    return (
        <AddPageContainer>

            <AddProductLayout/>
        </AddPageContainer>
    );

}

export default AddPage;