import React from "react";
import styled from "styled-components";


interface IProps {
    width?: string;
    height?: string;
    alignItems?: string
    justifyContent?: string
}

export const FlexRow = styled.div<IProps>`
    display: flex;
    flex-direction: row;
    width: ${props => props.width ? props.width : ''};
    width: ${props => props.height ? props.height : ''};
    align-items: ${props => props.alignItems ? props.alignItems : ''};
    justify-content: ${props => props.justifyContent ? props.justifyContent : ''};
`


export const FlexColumn = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    width: ${props => props.width ? props.width : ''};
    width: ${props => props.height ? props.height : ''};
    align-items: ${props => props.alignItems ? props.alignItems : ''};
    justify-content: ${props => props.justifyContent ? props.justifyContent : ''};

`