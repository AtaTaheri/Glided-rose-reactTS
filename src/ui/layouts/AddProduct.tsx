import React from "react";
import {useState, useContext} from "react";
import styled from "styled-components";
import {FlexRow} from "../components/Contianers";
import ProductLabel from "../components/ProductLabel";
import Button from "../components/Button";
import Input from "../components/Input";
import {ProductTypes} from "../../model/ProductModels";
import {getProductType, instantiateProduct} from "../../util/ProductTypeUtil";
import {ShopContext} from "../../storage/GlidedRoseShop";
import { useNavigate } from "react-router-dom";


const AddProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #f3f3f3;
    height: fit-content;
    justify-content: flex-start;
    padding: 15px;
    width: 100%;
    align-content: baseline;
    
`

const ProductInput = styled(Input)`

  margin-bottom: 10px;
`
const PageTitle = styled.h4`
margin-bottom: 10px;
`


export const AddProductLayout = () => {
    const shopContext = useContext(ShopContext);
    let navigate = useNavigate();
    const [currentLabel, setLabel] = useState<string>(ProductTypes.Normal);
    const [name, setName] = useState<string>('');
    const [quality, setQuality] = useState<number>(0);
    const [sellIn, setSellIn] = useState<number>(0);


    function handleNameChange(evt: any) {
        setLabel(getProductType(evt.target.value));
        setName(evt.target.value);
    }

    function handleSellInChange(evt: any) {
        setSellIn(evt.target.value);
    }

    function handleQualityChange(evt: any) {
        setQuality(evt.target.value);
    }

    function addItem() {
        if (name.trim() === '') {
            alert('Please Enter a name');
            return;
        }

        if (quality < 0 || quality > 50) {
            alert('Please Enter a quality in the range of 0 - 50');
            return;
        }

        if (quality < 0 || quality > 365) {
            alert('Please Enter a Sell in in the range of 0 - 365');
            return;
        }

        shopContext.addItem(instantiateProduct(name, quality, sellIn, currentLabel));
        navigate('/', {replace: true});
    }

    return (
        <AddProductContainer>
            <PageTitle>New Product <ProductLabel label={currentLabel}>{currentLabel}</ProductLabel></PageTitle>
            <ProductInput placeholder="Product Name" type='text' onChange={handleNameChange}/>
            <ProductInput placeholder="Quality" type='number' min='0' max='50' onChange={handleQualityChange}/>
            <ProductInput placeholder="Sell In" type='number' min='0' max='365' onChange={handleSellInChange}/>


            <FlexRow width={'100%'} justifyContent={'end'}>
                <Button primary onClick={addItem}>
                    Save
                </Button>
            </FlexRow>
        </AddProductContainer>
    );

}