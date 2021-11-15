import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from "./global";
import {ShopContextProvider} from "./storage/GlidedRoseShop";

const Index = () => {

    return (
        <React.StrictMode>
            <GlobalStyle/>
            <ShopContextProvider>
                <App/>
            </ShopContextProvider>
        </React.StrictMode>
    );
}


ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);

