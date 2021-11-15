import React from "react";
import {NormalProduct} from "../../model/ProductModels";
import {FlexRow, FlexColumn} from "./Contianers";
import styled from "styled-components";
import ProductLabel from "./ProductLabel";

interface IProp {
    item: NormalProduct
}

const ProductItemContainer = styled.div`
    border-radius: 15px;
    background: #fbfbfb;
    height: max-content;
    margin-top: 7px;
    padding: 0 7px 15px 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const ProductName = styled.h5`
    text-align: center;
    color: #151515;
    margin: 10px 5px;
`


const ProductProperty = styled.p`
  margin: 0;
  color: #4b4b4b;
  font-size: 12px;
  font-weight: lighter;
`

const ProductItem = (prop: IProp) => {

    return (
        <ProductItemContainer>
            <ProductName>{prop.item.name}</ProductName>
            <FlexRow width={'100%'} justifyContent={'space-between'}>
                <FlexColumn width={'49%'} alignItems={'start'}>
                    <ProductProperty>Sell In : {prop.item.sellIn}</ProductProperty>
                    <ProductProperty>Quality : {prop.item.quality}</ProductProperty>
                </FlexColumn>
                <FlexColumn width={'49%'} alignItems={'end'}>
                    <ProductLabel label={prop.item.productType()}>{prop.item.productType()}</ProductLabel>
                </FlexColumn>
            </FlexRow>
        </ProductItemContainer>
    );
}

export default ProductItem;