import React from "react";
import {NormalProduct} from '../../model/ProductModels'
import styled from "styled-components";
import ProductItem from "../components/ProductItem";

const borderRadius: string = '15px';

interface IProp {
    list: NormalProduct[]
}

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 24% 24% 24% 24% ;
    
    column-gap: calc(4%/3);
    
    background: #f3f3f3;
    height: 60vh;
    justify-content: flex-start;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 15px;
    align-content: baseline;
    
    @media only screen and (max-width: 1000px){
    height: 75vh;
     grid-template-columns: 49% 49% ;
     column-gap: 2%;

  }
`

const ProductsList = (prop: IProp) => {

    return (
        <ProductsContainer>
            {prop.list.map((item) => <ProductItem key={item.name} item={item}/>)}
        </ProductsContainer>
    );

}

export default ProductsList;