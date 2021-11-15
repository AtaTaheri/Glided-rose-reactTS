import React from 'react';
import Button from "../components/Button";
import styled from "styled-components";
// @ts-ignore
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import MainPage from "../pages/MainPage";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    background: #313D5A;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    box-shadow: 0px 5px 30px -5px rgba(0,0,0,0.33);`;


const HeaderLayout = () => {
    return (
        <HeaderContainer>
            <h3>Glided Rose Inventory</h3>

            <Routes>
                <Route path='/' element={
                    <Link to='/add'>
                        <Button primary>
                            Add Product

                        </Button>
                    </Link>}>
                </Route>
                <Route path='/add' element={<Link to='/'>
                    <Button >
                        Back
                    </Button>
                </Link>}>
                </Route>
            </Routes>


        </HeaderContainer>
    );

}

export default HeaderLayout;
