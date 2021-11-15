import React from "react";
import styled from "styled-components";


/**
 * Normal
 * AgedBrie
 * Sulfuras
 * BackstagePass
 * Conjured
 * */
interface IProps {
    label: string;
}

const ProductLabel = styled.span<IProps>`
    border-radius: 3px;
    font-size: 12px;
    padding: 5px;
    width: fit-content;
    color: ${props => {
        switch (props.label) {
            case 'Normal':
                return 'black';
            case 'AgedBrie':
            case 'Sulfuras':
            case 'BackstagePass':
            case 'Conjured':
                return 'white';
        }
    }};
    background-color: ${props => {
        switch (props.label) {
            case 'Normal':
                return '#e7e7e7';
            case 'AgedBrie':
                return '#04AA6D';
            case 'Sulfuras':
                return '#ff9800';
            case 'BackstagePass':
                return '#2196F3';
            case 'Conjured':
                return '#f44336';
        }
    }};
`;

export default ProductLabel;